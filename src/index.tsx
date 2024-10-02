import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('app') as HTMLElement;

const root = createRoot(rootElement);

const mountNode = (
  <StrictMode>
    <App />
  </StrictMode>
);

root.render(mountNode);
