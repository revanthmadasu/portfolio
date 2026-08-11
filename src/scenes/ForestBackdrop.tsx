import type { BiomeArt, BiomePalette } from './types';

// Stylized, procedural forest silhouettes (no external assets). Each layer is
// an SVG tinted from the biome palette; parallax translation is applied by the
// parent via CSS custom properties --mx / --my.

function CanopyFar({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 1200 400" preserveAspectRatio="xMidYMin slice" className="h-full w-full">
      <path
        fill={color}
        d="M0,0 H1200 V150 C1140,210 1080,150 1020,190 C960,230 900,160 840,200 C780,240 720,170 660,205 C600,240 540,165 480,205 C420,245 360,170 300,205 C240,240 180,165 120,200 C60,235 20,180 0,150 Z"
      />
    </svg>
  );
}

function TreesMid({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 1200 700" preserveAspectRatio="xMidYMax slice" className="h-full w-full">
      <g fill={color}>
        <rect x="180" y="330" width="26" height="380" rx="6" />
        <rect x="520" y="300" width="34" height="410" rx="7" />
        <rect x="900" y="340" width="28" height="370" rx="6" />
        <rect x="1050" y="360" width="22" height="350" rx="6" />
        <ellipse cx="193" cy="320" rx="120" ry="90" />
        <ellipse cx="537" cy="285" rx="150" ry="115" />
        <ellipse cx="914" cy="330" rx="130" ry="100" />
        <ellipse cx="1061" cy="350" rx="95" ry="78" />
        <path d="M0,700 V520 C120,470 240,540 360,500 C480,460 600,540 720,505 C840,470 960,545 1080,510 C1140,492 1170,505 1200,500 V700 Z" />
      </g>
    </svg>
  );
}

function FoliageNear({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 1200 500" preserveAspectRatio="xMidYMax slice" className="h-full w-full">
      <g fill={color}>
        <path d="M0,500 V300 C60,250 40,180 90,150 C70,210 120,240 140,210 C120,270 170,300 150,340 C210,300 210,360 260,360 C210,420 150,430 120,500 Z" />
        <path d="M1200,500 V280 C1130,240 1160,170 1110,140 C1140,205 1080,235 1070,205 C1090,270 1040,300 1065,345 C1000,305 1000,365 950,360 C1010,420 1080,430 1110,500 Z" />
        <path d="M0,500 V440 C160,410 320,450 480,430 C640,410 800,455 960,435 C1080,420 1140,438 1200,430 V500 Z" />
      </g>
    </svg>
  );
}

/** Real-art renderer: opaque sky image + transparent depth planes, each
 *  translated by its own parallax factor via --mx / --my. Falls back to the
 *  palette sky gradient if no sky image is supplied. */
function ImageBackdrop({
  palette,
  art,
  progress,
}: {
  palette: BiomePalette;
  art: BiomeArt;
  /** forward-travel position across the nav tabs, 0 (first) → 1 (last) */
  progress: number;
}) {
  const panEase = 'transform 1.1s cubic-bezier(0.22, 1, 0.36, 1)';
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* panorama sky: only a slice is visible; navigating pans it 0% → 100% so
          the scene reads as moving forward. Falls back to a gradient if absent. */}
      {art.sky ? (
        <div
          className="absolute inset-0 bg-cover"
          style={{
            backgroundImage: `url(${art.sky})`,
            backgroundPosition: `${(progress * 100).toFixed(2)}% center`,
            transition: `background-position 1.1s cubic-bezier(0.22, 1, 0.36, 1)`,
          }}
        />
      ) : (
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(180deg, ${palette.skyTop} 0%, ${palette.skyBottom} 100%)`,
          }}
        />
      )}
      {/* glow */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(60% 45% at 62% 12%, ${palette.glow} 0%, transparent 70%)`,
        }}
      />
      {/* light shafts (kept over real art for atmosphere) */}
      <div
        className="scene-shafts absolute inset-0"
        style={{
          background: `repeating-linear-gradient(102deg, transparent 0 60px, ${palette.shaft} 60px 92px, transparent 92px 170px)`,
          transform: 'translate3d(calc(var(--mx,0)*-14px), calc(var(--my,0)*-8px), 0)',
        }}
      />
      {/* transparent depth planes, far -> near. Each rides in a wrapper that
          pans forward with the route (smoothly, at its own speed = parallax);
          the inner plane keeps the snappy pointer parallax. */}
      {art.layers.map((layer, i) => {
        const anchor = layer.anchor ?? 'bottom';
        const p = layer.parallax;
        const pan = layer.pan ?? 0;
        // wrapper geometry: over-widened by `pan` vw so the forward slide never
        // exposes an edge. Anchored so progress 0 shows the left of the plane.
        const wrapPos: Record<string, string | number> =
          anchor === 'top'
            ? { top: 0, height: layer.height ?? '60%' }
            : anchor === 'full'
            ? { top: 0, bottom: 0 }
            : { bottom: 0, height: layer.height ?? '60%' };
        return (
          <div
            key={`${layer.src}-${i}`}
            className="absolute"
            style={{
              ...wrapPos,
              left: 0,
              width: pan ? `calc(100% + ${pan}vw)` : '100%',
              transform: `translate3d(${(-progress * pan).toFixed(2)}vw, 0, 0)`,
              transition: panEase,
              willChange: 'transform',
            }}
          >
            <div
              className="absolute inset-0"
              style={{
                opacity: layer.opacity ?? 1,
                backgroundImage: `url(${layer.src})`,
                backgroundSize: layer.fit ?? 'cover',
                backgroundPosition:
                  layer.position ?? (anchor === 'top' ? 'top center' : 'bottom center'),
                backgroundRepeat: 'no-repeat',
                transform: `translate3d(calc(var(--mx,0)*${p}px), calc(var(--my,0)*${p * 0.6}px), 0)`,
                willChange: 'transform',
              }}
            />
          </div>
        );
      })}
      {/* ground mist to seat the nearest plane into the scene */}
      <div
        className="absolute inset-x-0 bottom-0 h-[40%]"
        style={{ background: `linear-gradient(0deg, ${palette.mist} 0%, transparent 100%)` }}
      />
    </div>
  );
}

export function ForestBackdrop({
  palette,
  art,
  progress = 0,
}: {
  palette: BiomePalette;
  art?: BiomeArt;
  progress?: number;
}) {
  if (art) return <ImageBackdrop palette={palette} art={art} progress={progress} />;
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* sky */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(180deg, ${palette.skyTop} 0%, ${palette.skyBottom} 100%)`,
        }}
      />
      {/* glow */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(60% 45% at 62% 12%, ${palette.glow} 0%, transparent 70%)`,
        }}
      />
      {/* light shafts */}
      <div
        className="scene-shafts absolute inset-0"
        style={{
          background: `repeating-linear-gradient(102deg, transparent 0 60px, ${palette.shaft} 60px 92px, transparent 92px 170px)`,
          transform:
            'translate3d(calc(var(--mx,0)*-14px), calc(var(--my,0)*-8px), 0)',
        }}
      />
      {/* far canopy */}
      <div
        className="absolute inset-x-0 top-0 h-[46%]"
        style={{ transform: 'translate3d(calc(var(--mx,0)*8px), calc(var(--my,0)*5px), 0)' }}
      >
        <CanopyFar color={palette.canopyFar} />
      </div>
      {/* mid trees */}
      <div
        className="absolute inset-x-0 bottom-0 h-[82%]"
        style={{ transform: 'translate3d(calc(var(--mx,0)*18px), calc(var(--my,0)*10px), 0)' }}
      >
        <TreesMid color={palette.treesMid} />
      </div>
      {/* ground mist gradient */}
      <div
        className="absolute inset-x-0 bottom-0 h-[45%]"
        style={{
          background: `linear-gradient(0deg, ${palette.mist} 0%, transparent 100%)`,
        }}
      />
      {/* near foliage framing */}
      <div
        className="absolute inset-0"
        style={{ transform: 'translate3d(calc(var(--mx,0)*34px), calc(var(--my,0)*20px), 0)' }}
      >
        <FoliageNear color={palette.foliageNear} />
      </div>
    </div>
  );
}
