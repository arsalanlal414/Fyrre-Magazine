import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import logo from "../assets/FyrreMagazine.png";
import { FaInstagram, FaMoon, FaRss, FaSun, FaTwitter, FaYoutube } from 'react-icons/fa';
import { GoHorizontalRule } from 'react-icons/go';
import SocialLinks from './SocialLinks';
import { useDarkMode } from '../hooks/DarkModeContext';

const Header = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <div className='flex items-center justify-between border-b border-slate-950 py-3 pt-10'>
      <Link to="/">
        <img src={logo} alt="Fyrre Magazine" className='2xl:w-72 w-56' />
      </Link>
      <div className='flex items-center gap-6'>
        {/* Navigation Links */}
        <ul className='flex gap-6 2xl:text-lg lg:text-base font-normal'>
          <li>
            <Link to="/magazine" className="hover:underline">
              Magazine
            </Link>
          </li>
          <li>
            <Link to="/podcast" className="hover:underline">
              Podcasts
            </Link>
          </li>
          <li>
            <Link to="/authors" className="hover:underline">
              Authors
            </Link>
          </li>
        </ul>

        <GoHorizontalRule />
        <SocialLinks />
        <button
          onClick={toggleDarkMode}
          className="text-xl focus:outline-none"
        >
          {darkMode ? <FaSun className="text-white" /> : <FaMoon className="text-gray-800" />}
        </button>
      </div>
    </div>
  );
};

export default Header;
