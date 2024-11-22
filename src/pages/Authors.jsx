import React from 'react'
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

const Authors = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const authors = [
    {
      name: 'Jakob Grønberg',
      imgUrl: author1,
      title: 'Artist',
      city: 'Berlin' 
    },
    {
      name: 'Louise Jensen',
      imgUrl: author2,
      title: 'Artist',
      city: 'Stockholm' 
    },
    {
      name: 'Anne Henry',
      imgUrl: author3,
      title: 'Photograph  ',
      city: 'New York' 
    },
    {
      name: 'Anna Nielsen',
      imgUrl: author4,
      title: 'Columnists',
      city: 'Copenhagen' 
    },
    {
      name: 'Jane Cooper',
      imgUrl: author5,
      title: 'Artist',
      city: 'Berlin' 
    },
    {
      name: 'Cristofer Vaccaro',
      imgUrl: author6,
      title: 'Artist',
      city: 'Lisbon' 
    },    
  ]

  return (
    <div className='pb-14'>
      <div className="">
        <img src={darkMode ? lightLogo : darkLogo} alt="Authors text" className='w-full h-auto lg:py-12 object-cover sm:py-6'/>
      </div>
      <div className="flex flex-wrap mt-8">
          {authors.map((author, index) => (
            <div
              key={index}
              className="w-full py-6 border-b border-black flex gap-14 last:border-none"
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
                <div className="flex flex-wrap lg:gap-20 text-sm pt-4 items-center">
                  <p className='text-base'>
                    <span className="font-bold">Job:</span> {author?.title}
                  </p>
                  <p className='text-base'>
                    <span className="font-bold">City:</span> {author?.city}
                  </p>
                  <button className='flex ml-4 text-base gap-4 items-center font-bold'>About <FaArrowRightLong /></button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Authors