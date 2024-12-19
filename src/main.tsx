import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.scss';
import { Router } from './app/router';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router />
  </StrictMode>
);
