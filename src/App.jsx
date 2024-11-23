import React from 'react';
import { useDarkMode } from './hooks/DarkModeContext';
import { FaMoon, FaSun } from 'react-icons/fa';  // Import icons
import AppRoute from './routes';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <>
    <BrowserRouter>
      <AppRoute />
    </BrowserRouter>
    </>
  );
};

export default App;
