import podcastWhite from '../assets/Podcast-white.png'
import podcastBlack from '../assets/Podcast-black.png'
import cover1 from '../assets/podcast-cover1.png'
import cover2 from '../assets/podcast-cover2.png'
import cover3 from '../assets/podcast-cover3.png'
import cover4 from '../assets/podcast-cover4.png'
import cover5 from '../assets/podcast-cover5.png'
import { useDarkMode } from '../hooks/DarkModeContext';
import { FaArrowRightLong } from 'react-icons/fa6'

const Podcasts = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  const podcasts = [
    {
      name: 'The Problem of today’s cultural development',
      imgUrl: cover1,
      date: '16.01.2022',
      duration: '1h 20 Min' 
    },
    {
      name: 'The hidden messages of Jack Nielson',
      imgUrl: cover2,
      date: '16.01.2022',
      duration: '60 Min' 
    },
    {
      name: 'Behind the scenes of the street art culture',
      imgUrl: cover3,
      date: '16.01.2022',
      duration: '2h 10 Min' 
    },
    {
      name: 'The art of movement',
      imgUrl: cover4,
      date: '16.01.2022',
      duration: '60 Min' 
    },
    {
      name: '10 artists your should definitely know',
      imgUrl: cover5,
      date: '16.01.2022',
      duration: '60 Min' 
    },
  ]
  
  return (
    <div className='pb-14'>
      <div className="">
        <img src={darkMode ? podcastWhite : podcastBlack} alt="Authors text" className='w-full h-auto lg:py-12 object-cover sm:py-6'/>
      </div>
      <div className="flex flex-wrap mt-8">
          {podcasts.map((podcast, index) => (
            <div
              key={index}
              className="w-full py-6 border-b border-black flex gap-14 last:border-none"
            >
              <div className='flex items-center gap-10'>
                <p className='text-3xl font-black'>0{index+1}</p>
                <img
                  src={podcast?.imgUrl}
                  alt="podcast cover image"
                  className="max-w-36 h-auto object-cover"
                />
              </div>
                
              <div className='h-full flex flex-wrap justify-between items-center w-full'>
                <h4 className="font-black text-xl lg:text-3xl lg:w-2/5 sm:w-full">
                  {podcast?.name}
                </h4>
                <div className="flex flex-wrap lg:gap-20 text-sm pt-4 items-center">
                  <p className='text-base'>
                    <span className="font-bold">Date:</span> {podcast?.date}
                  </p>
                  <p className='text-base'>
                    <span className="font-bold">Duration:</span> {podcast?.duration}
                  </p>
                  <button className='flex ml-4 text-base gap-4 items-center font-bold'>LISTEN <FaArrowRightLong /></button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Podcasts