import React from 'react';
import NewsTicker from './NewsTicker';
import logo from '../assets/FyrreMagazine_logo.png';
import SocialLinks from './SocialLinks';

const Footer = () => {
  return (
    <div className="bg-primary-dark dark:bg-gray-900 overflow-hidden text-primary-light dark:text-gray-300">
      <NewsTicker />
      <div className="flex flex-col screen-container m-auto justify-center">
        <div className="flex flex-wrap py-24">
          <h2 className="text-x7xl font-black sm:w-full lg:w-1/2 pr-10">
            Design News to your inbox
          </h2>
          <div className="flex sm:w-full lg:w-1/2 justify-end items-center gap-4">
            <input
              type="text"
              placeholder="Enter Email..."
              className="py-2 lg:w-96 px-4 border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-200 focus:outline-none"
            />
            <button className="p-2 bg-gray-100 font-bold border-none text-primary-dark dark:bg-gray-800 dark:text-primary-light">
              SIGN UP
            </button>
          </div>
        </div>
        <div className="flex flex-wrap py-4 pb-20">
          <div className="logo w-2/5">
            <img src={logo} alt="Fyrre Logo" className="w-52" />
          </div>
          <div className="logo w-1/5">
            <ul className="flex flex-col gap-4 text-white dark:text-gray-300">
              <li>Art</li>
              <li>Design</li>
              <li>Architecture</li>
            </ul>
          </div>
          <div className="logo w-1/5">
            <ul className="flex flex-col gap-4 text-white dark:text-gray-300">
              <li>Magazine</li>
              <li>Podcast</li>
              <li>Authors</li>
            </ul>
          </div>
          <div className="logo w-1/5">
            <ul className="flex flex-col gap-4 text-white dark:text-gray-300">
              <li>Styleguide</li>
              <li>Licensing</li>
              <li>Changelog</li>
            </ul>
          </div>
        </div>
        <div className="flex justify-between text-white dark:text-gray-300 pb-14">
          <p>© Made by Pawel Gola - Powered by Webflow</p>
          <SocialLinks />
        </div>
      </div>
    </div>
  );
};

export default Footer;
