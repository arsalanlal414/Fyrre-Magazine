import React from 'react';
import { useDarkMode } from './hooks/DarkModeContext';
import { FaMoon, FaSun } from 'react-icons/fa';  // Import icons
import AppRoute from './routes';

const App = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <>
      <AppRoute />
      {/* <header className="flex justify-between items-center p-4">
        <h1 className="text-2xl text-bold">My React App</h1>
        <button
          onClick={toggleDarkMode}
          className="text-2xl focus:outline-none"
        >
          {darkMode ? <FaSun className="text-yellow-500" /> : <FaMoon className="text-gray-800" />}
        </button>
      </header>
      <main className="px-4">
        <p>Welcome to my React App!</p>
        <p>{darkMode? "dark": "light"} mode</p>
      </main> */}
    </>
  );
};

export default App;
