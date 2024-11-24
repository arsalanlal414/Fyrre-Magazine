import React, { useEffect } from 'react'
import Toolbar from '../components/Toolbar'
import cover1 from '../assets/podcast-cover1.png'
import { FaApple, FaInstagram, FaSoundcloud, FaSpotify, FaTwitter, FaYoutube } from 'react-icons/fa'
import { useLocation } from 'react-router-dom'

const Podcast = () => {
  const location = useLocation();  
  const { data } = location.state || {};
  useEffect(()=>{
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    scrollToTop()
  },[])
  return (
    <div className='py-6 w-full'>
      <Toolbar title="PODCAST"/>
      
      <div className="flex flex-wrap w-full justify-center sm:py-10">
        <div className="flex flex-col items-center w-full md:w-1/2  py-10 text-lg px-2 md:px-4">
          <div className="max-w-80 w-full">
            <img src={data?.imgUrl} alt="author image" className="sm:w-80 sm:max-w-80 w-full" />
            <div className="flex justify-between items-center w-full py-4">
              <p className="font-black">Listen On</p>
              <div className="flex gap-4 items-center ">
                <a href="https://spotify.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:scale-110">
                  <FaSpotify />
                </a>
                <a href="https://apple.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:scale-110">
                  <FaApple />
                </a>
                <a href="https://soundcloud.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:scale-110">
                  <FaSoundcloud />
                </a>
              </div>
            </div>


            <div className="flex flex-col gap-4 justify-between sm:w-80 w-full py-4 border-t border-black dark:border-white">
              <div className="flex justify-between">
                <p className="font-black">Date</p>
                <p>{data?.date || "16, March 2022"}</p>
              </div>
              <div className="flex justify-between">
                <p className="font-black">Duration</p>
                <p>{data?.duration || "1h 20 Min"}</p>
              </div>
              <div className="flex justify-between">
                <p className="font-black">Share</p>
                <div className="flex gap-4">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:scale-110">
                    <FaInstagram />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:scale-110">
                    <FaTwitter />
                  </a>
                  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:scale-110">
                    <FaYoutube />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start w-full md:w-1/2  py-10 px-2 md:px-4">
          <h5 className="text-xl font-black">EPISODE 01</h5>
          <h3 className="text-4xl md:text-4xl lg:text-6xl font-black uppercase py-3 sm:py-0 sm:pb-10">{data?.name || "Save the world from ourselves!"}</h3>
          <p className="text-base md:text-lg font-semibold leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut.
          </p>
          <p className="py-4">
            Porttitor rhoncus dolor purus non enim praesent elementum. Eget dolor morbi non arcu risus quis varius. Posuere ac ut consequat semper viverra nam libero. In ornare quam viverra orci sagittis eu. Tristique risus nec feugiat in fermentum.
          </p>

          <div className="flex border-t-2 border-b-2 font-black py-6 sm:py-12 my-4 sm:my-10 gap-2 sm:gap-5">
            <p className="text-6xl">“</p>
            <p className="text-xl sm:text-3xl">
              The greatest glory in living lies not in never falling, but
              in rising every time we fall.
              <span className="block text-base pt-2 sm:pt-4 font-semibold">
                  Nelson Mandela
              </span>
            </p>
          </div>
          <p>
            Porttitor rhoncus dolor purus non enim praesent elementum. Eget dolor morbi non arcu risus quis varius. Posuere ac ut consequat semper viverra nam libero. In ornare quam viverra orci sagittis eu. Tristique risus nec feugiat in fermentum.
          </p>
        </div>
      </div>

    </div>
  )
}

export default Podcast