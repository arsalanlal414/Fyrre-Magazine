import React, { useEffect } from 'react'
import darkLogo from '../assets/Authors-text-black.png'
import lightLogo from '../assets/Authors-text-white.png'
import author1 from '../assets/author1.png'
import author2 from '../assets/author2.png'
import author3 from '../assets/author3.png'
import author4 from '../assets/author4.png'
import author5 from '../assets/author5.png'
import author6 from '../assets/author6.png'
import { useDarkMode } from '../hooks/DarkModeContext';
import { FaArrowRightLong } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'
import { useData } from '../hooks/DataContext'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Authors = () => {
  const { darkMode } = useDarkMode();
  const authors = useData();

  useEffect(()=>{
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    scrollToTop()
  },[])
  const navigate = useNavigate()

  const handleNavigation = (data, ind) => {
    navigate(`/author/${ind}`,{
        state: { data }
      }
    ); 
  };

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      easing: 'ease-in-out',
      once: false,
    });
  }, []);

  return (
    <div className='pb-14'>
      <div className="">
        <img src={darkMode ? lightLogo : darkLogo} alt="Authors text" className='w-full h-auto object-cover py-6 lg:py-12' data-aos="fade-down"/>
      </div>
      <div className="flex flex-wrap lg:mt-8">
        {authors.map((author, index) => (
          <div
            key={index}
            className="w-full py-6 border-b border-black dark:border-white flex gap-4 md:gap-14 last:border-none"
            onClick={()=> handleNavigation(author, index+1)}
            data-aos="fade-up"
          >
            <img
              src={author?.imgUrl}
              alt="podcast cover image"
              className="max-w-36 rounded-full h-auto object-cover"
            />
              
            <div className='h-full flex flex-wrap justify-between items-center w-full'>
              <h4 className="font-black text-xl lg:text-3xl">
                {author?.name}
              </h4>
              <div className="flex flex-wrap md:gap-4 lg:gap-20 text-sm items-center">
                <p className='text-base sm:w-full md:w-fit px-2'>
                  <span className="font-bold">Job:</span> {author?.title}
                </p>
                <p className='text-base sm:w-full md:w-fit px-2'>
                  <span className="font-bold">City:</span> {author?.city}
                </p>
                <button 
                  className='flex text-base gap-2 md:gap-4 items-center font-bold sm:w-full md:w-fit px-2' 
                  onClick={()=> handleNavigate(index+1)}
                > 
                  About 
                  <FaArrowRightLong />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Authors