import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/FyrreMagazine.png";
import logoWhite from "../assets/FyrreMagazine_logo.png";
import { FaBars, FaSun, FaMoon } from 'react-icons/fa';
import SocialLinks from './SocialLinks';
import { useDarkMode } from '../hooks/DarkModeContext';

const Header = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null); // Ref to track menu DOM

  const toggleMenu = (e) => {
    e.stopPropagation(); // Prevent outside click detection
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (menuOpen && menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [menuOpen]);

  return (
    <header className="border-b border-slate-950 dark:border-white sm:py-3 pt-5 sm:pt-10">
      <div className="flex items-center justify-between">
        <Link to="/">
          <picture>
            <source srcSet={logo} type="image/webp" />
            <source srcSet={logo} type="image/jpeg" />
            <img
              src={darkMode ? logoWhite : logo} 
              alt="Fyrre Magazine" 
              className="w-48 md:w-56"
              loading="lazy"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '/fallback-image.jpg'
              }}
            />
          </picture>
        </Link>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl focus:outline-none" aria-label="hamburger toggle">
            <FaBars />
          </button>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <ul className="flex gap-6 text-lg font-normal">
            <li><Link to="/magazine" className="hover:underline">Magazine</Link></li>
            <li><Link to="/podcast" className="hover:underline">Podcasts</Link></li>
            <li><Link to="/authors" className="hover:underline">Authors</Link></li>
          </ul>
          <button onClick={toggleDarkMode} className="text-xl focus:outline-none" aria-label="theme toggle">
            {darkMode ? <FaSun className="text-white" /> : <FaMoon className="text-gray-800" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        ref={menuRef}
        className={`md:hidden bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-2 transition-all duration-500 ease-in-out transform ${
          menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col gap-4 px-4 py-6 text-base font-normal">
          <li><Link to="/magazine" className="hover:underline" onClick={toggleMenu}>Magazine</Link></li>
          <li><Link to="/podcast" className="hover:underline" onClick={toggleMenu}>Podcasts</Link></li>
          <li><Link to="/authors" className="hover:underline" onClick={toggleMenu}>Authors</Link></li>
        </ul>
        <div className="flex justify-center items-center gap-4 py-2">
          <SocialLinks />
          <button onClick={toggleDarkMode} className="text-xl focus:outline-none" aria-label="theme toggler">
            {darkMode ? <FaSun className="text-white" /> : <FaMoon className="text-gray-800" />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
