import React from 'react';
import NewsTicker from './NewsTicker';
import logo from '../assets/FyrreMagazine_logo.png';
import SocialLinks from './SocialLinks';

const Footer = () => {
  return (
    <footer className="bg-primary-dark dark:bg-gray-900 overflow-hidden text-primary-light dark:text-gray-300">
      {/* News Ticker */}
      <NewsTicker />

      {/* Footer Content */}
      <div className="flex flex-col screen-container m-auto justify-center px-4 lg:px-8 py-16 space-y-12">
        {/* Newsletter Signup */}
        <div className="flex flex-wrap items-center justify-between gap-6 sm:gap-8">
          <h2 className="text-2xl sm:text-4xl font-black flex-1 sm:w-auto w-full">
            Design News to your inbox
          </h2>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 w-full sm:w-auto">
            <input
              type="text"
              placeholder="Enter Email..."
              className="flex-1 py-2 px-4 border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-200 focus:outline-none"
            />
            <button className="w-fit sm:w-auto py-2 px-4 bg-gray-100 font-bold border-none text-primary-dark dark:bg-gray-800 dark:text-primary-light">
              SIGN UP
            </button>
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="flex flex-wrap justify-between gap-12 w-full">
          <div className="flex-1 min-w-[150px]">
            <img src={logo} alt="Fyrre Logo" className="w-40 sm:w-52" />
          </div>
          <div className="flex flex-wrap gap-8 md:w-2/3 justify-around">
            <div>
              <ul className="space-y-2 text-sm sm:text-base">
                <li>Art</li>
                <li>Design</li>
                <li>Architecture</li>
              </ul>
            </div>
            <div>
              <ul className="space-y-2 text-sm sm:text-base">
                <li>Magazine</li>
                <li>Podcast</li>
                <li>Authors</li>
              </ul>
            </div>
            <div>
              <ul className="space-y-2 text-sm sm:text-base">
                <li>Styleguide</li>
                <li>Licensing</li>
                <li>Changelog</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 border-t border-gray-700 pt-8">
          <p className="text-xs sm:text-sm text-center sm:text-left">
            © Developed by Muhammad Arsalan - (Designed by figma community)
          </p>
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
