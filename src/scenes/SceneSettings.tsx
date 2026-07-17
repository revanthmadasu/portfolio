import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import type { Intensity } from './types';

interface SceneSettingsValue {
  intensity: Intensity;
  reducedMotion: boolean;
  /** effective intensity after honouring reduced-motion */
  effective: Intensity;
  toggleCalm: () => void;
}

const Ctx = createContext<SceneSettingsValue | undefined>(undefined);
const KEY = 'scene-intensity';

export function SceneSettingsProvider({ children }: { children: ReactNode }) {
  const [intensity, setIntensity] = useState<Intensity>(
    () => (localStorage.getItem(KEY) as Intensity) || 'full'
  );
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReducedMotion(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    localStorage.setItem(KEY, intensity);
  }, [intensity]);

  const value = useMemo<SceneSettingsValue>(
    () => ({
      intensity,
      reducedMotion,
      effective: reducedMotion ? 'calm' : intensity,
      toggleCalm: () => setIntensity((i) => (i === 'full' ? 'calm' : 'full')),
    }),
    [intensity, reducedMotion]
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useSceneSettings() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error('useSceneSettings must be used within SceneSettingsProvider');
  return ctx;
}
