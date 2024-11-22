import React, { useEffect, useState } from 'react';
import { useDarkMode } from '../hooks/DarkModeContext';
import { FaMoon, FaSun } from 'react-icons/fa';  // Import icons

const ThemeToggler = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
  <div onClick={toggleDarkMode}>
    {darkMode ? <FaSun /> : <FaMoon />} {/* Show Sun if darkMode, else show Moon */}
  </div>
  );
};

export default ThemeToggler;
