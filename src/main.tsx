import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';
import './i18n/i18n.ts';
import { App } from './App.tsx';
import { UserDataContextProvider } from './state/providers/UserDataContextProvider/UserDataContextProvider.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UserDataContextProvider>
      <App />
    </UserDataContextProvider>
  </StrictMode>,
);
