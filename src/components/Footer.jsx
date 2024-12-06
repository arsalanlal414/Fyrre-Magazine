import React, { useEffect, useState } from 'react';
import NewsTicker from './NewsTicker';
import logo from '../assets/FyrreMagazine_logo.png';
import SocialLinks from './SocialLinks';
import { toast } from 'react-toastify';
import 'aos/dist/aos.css';
import AOS from 'aos';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!email || !validateEmail(email)) {
      toast.error('Please enter a valid email address.');
    } else {
      toast.success('Thank you for signing up!');
      setEmail(''); // Reset email input
    }
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      easing: 'ease-in-out',
      once: false, // Animation happens only once
    });
  }, []);

  return (
    <footer className="bg-primary-dark dark:bg-gray-900 overflow-hidden text-primary-light dark:text-gray-300" >
      {/* News Ticker */}
      <NewsTicker />

      {/* Footer Content */}
      <div className="flex flex-col screen-container m-auto justify-center px-4 lg:px-8 py-16 space-y-12">
        {/* Newsletter Signup */}
        <div className="flex flex-wrap items-center justify-between gap-6 sm:gap-8">
          <h2 className="text-2xl sm:text-4xl font-black flex-1 sm:w-auto w-full" data-aos="fade-in">
            Design News to your inbox
          </h2>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 w-full sm:w-auto" data-aos="fade-right">
            <input
              type="email"
              placeholder="Enter Email..."
              className="flex-1 py-2 px-4 border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-200 focus:outline-none"
              onChange={(e) => setEmail(e.target.value)}
            />
            <button 
              className="w-fit sm:w-auto py-2 px-4 bg-gray-100 font-bold border-none text-primary-dark dark:bg-gray-800 dark:text-primary-light" 
              onClick={handleNewsletterSubmit}
              aria-label="Signup for newsletters"  
            >
              SIGN UP
            </button>
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="flex flex-wrap justify-between gap-12 w-full">
          <div className="flex-1 min-w-[150px]">
            <img src={logo} alt="Fyrre Logo" className="w-40 sm:w-52 cursor-pointer" data-aos="fade-in"/>
          </div>
          <div className="flex flex-wrap gap-8 md:w-2/3 justify-around" data-aos="fade-up">
            <div>
              <ul className="space-y-2 text-sm sm:text-base" >
                <li className='cursor-pointer hover:text-gray-400'>Art</li>
                <li className='cursor-pointer hover:text-gray-400'>Design</li>
                <li className='cursor-pointer hover:text-gray-400'>Architecture</li>
              </ul>
            </div>
            <div>
              <ul className="space-y-2 text-sm sm:text-base">
                <li className='cursor-pointer hover:text-gray-400'>Magazine</li>
                <li className='cursor-pointer hover:text-gray-400'>Podcast</li>
                <li className='cursor-pointer hover:text-gray-400'>Authors</li>
              </ul>
            </div>
            <div>
              <ul className="space-y-2 text-sm sm:text-base">
                <li className='cursor-pointer hover:text-gray-400'>Styleguide</li>
                <li className='cursor-pointer hover:text-gray-400'>Licensing</li>
                <li className='cursor-pointer hover:text-gray-400'>Changelog</li>
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
