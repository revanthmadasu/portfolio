import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { ThemeProvider } from './theme/ThemeProvider';
import { SceneSettingsProvider } from './scenes/SceneSettings';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <SceneSettingsProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </SceneSettingsProvider>
    </ThemeProvider>
  </StrictMode>
);
