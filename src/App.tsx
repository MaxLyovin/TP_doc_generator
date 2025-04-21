import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { UserDataForm } from '@/UserDataForm/UserDataForm';
import { Landing } from '@/components/Landing/Landing';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/form" element={<UserDataForm />} />
      </Routes>
    </BrowserRouter>
  );
};
