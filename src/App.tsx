import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { UserDataForm } from '@/UserDataForm/UserDataForm';
import { Landing } from '@/components/Landing/Landing';

import { UserDataContextProvider } from './state/providers/UserDataContextProvider/UserDataContextProvider';
import { Navigation } from './components/navigation/Navigation';

export const App = () => {
  return (
    <UserDataContextProvider>
      <Navigation />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/form" element={<UserDataForm />} />
        </Routes>
      </BrowserRouter>
    </UserDataContextProvider>
  );
};
