import React, { useEffect, useState } from 'react';
import Magazine from '../assets/Magazine.png';
import MagazineWhite from '../assets/Magazine_white.png';
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';
import PodcastCards from '../components/PodcastCards';
import { useDarkMode } from '../hooks/DarkModeContext';
import { useData } from '../hooks/DataContext';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Magzine = () => {
  const data = useData();
  const allArticles = data.flatMap(article => article.magazines);

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 9;

  const filteredArticles = selectedCategory === 'All'
    ? allArticles
    : allArticles.filter(article => article.cta === selectedCategory);

  const paginatedArticles = filteredArticles.slice(
    (currentPage - 1) * articlesPerPage,
    currentPage * articlesPerPage
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const { darkMode } = useDarkMode();

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to the first page when changing categories
  };

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      easing: 'ease-in-out',
      once: false,
    });
  }, []);

  return (
    <div>
      <img
        src={darkMode ? MagazineWhite : Magazine}
        alt="Magazine"
        className="w-full h-auto object-cover py-6 lg:py-12"
        data-aos="fade-down"
      />
      <div className="flex flex-col md:flex-row justify-between items-start lg:items-center lg:py-6 gap-6">
        <h2 className="font-black text-lg sm:text-xl lg:text-2xl">Categories</h2>
        <div className="flex flex-wrap justify-start lg:justify-center items-center gap-4">
          {['All', 'Art', 'Nature', 'Sculptures', 'Photography'].map((category) => (
            <p
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-4 py-1 border rounded-full text-sm sm:text-base lg:text-lg cursor-pointer ${
                selectedCategory === category
                  ? 'bg-black text-white dark:bg-white dark:text-black'
                  : 'border-black dark:border-white'
              }`}
            >
              {category}
            </p>
          ))}
        </div>
      </div>

      <PodcastCards cardData={paginatedArticles} limit={articlesPerPage} type="magazine"/>

      <div className="flex justify-between my-14 gap-4 sm:gap-0">
        <p
          className={`font-bold flex items-center gap-2 cursor-pointer ${
            currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
          data-aos="fade-in"
        >
          <FaArrowLeftLong /> PREVIOUS
        </p>
        <p
          className={`font-bold flex items-center gap-2 cursor-pointer ${
            currentPage * articlesPerPage >= filteredArticles.length
              ? 'opacity-50 cursor-not-allowed'
              : ''
          }`}
          onClick={() =>
            currentPage * articlesPerPage < filteredArticles.length &&
            setCurrentPage(currentPage + 1)
          }
          data-aos="fade-in"
        >
          NEXT <FaArrowRightLong />
        </p>
      </div>
    </div>
  );
};

export default Magzine;
