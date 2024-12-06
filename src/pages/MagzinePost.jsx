import React, { useEffect, useState } from 'react'
import Toolbar from '../components/Toolbar'
import cardImg1 from '../assets/card_img1.png'
import { FaApple, FaInstagram, FaSoundcloud, FaSpotify, FaTwitter, FaYoutube } from 'react-icons/fa6'
import { useLocation } from 'react-router-dom'

const MagzinePost = () => {
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
        <Toolbar title="MAGAZINE"/>
        <div className="w-full flex flex-wrap justify-between py-10 md:py-16">
            {/* Left Section */}
            <div className="w-full lg:w-1/2">
                <h3 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black uppercase">
                {data?.title || "Hope dies last"}
                </h3>
            </div>

            {/* Right Section */}
            <div className="w-full lg:w-1/2 flex flex-col py-4 md:py-0">
                <p className="text-base md:text-lg leading-relaxed md:pr-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.
                </p>
            </div>
        </div>


        <div className="flex flex-wrap text-lg w-full justify-between items-center gap-4">
            {/* Left Content */}
            <div className="flex flex-wrap flex-col md:flex-row gap-4 text-md sm:text-lg w-full sm:w-auto">
                <div className="flex gap-2 justify-between sm:justify-normal">
                    <span className="font-bold">Author:</span>
                    <span>{data?.name}</span>
                </div>
                <div className="flex gap-2 justify-between sm:justify-normal">
                    <span className="font-bold">Date:</span>
                    <span>{data?.date}</span>
                </div>
                <div className="flex gap-2 justify-between sm:justify-normal">
                    <span className="font-bold">Duration:</span>
                    <span>{data?.duration}</span>
                </div>
            </div>

            {/* Right Button */}
            <div className="flex gap-2 items-center w-full sm:w-auto justify-center sm:justify-normal">
                <button className="h-fit border px-4 py-1 border-black dark:border-white rounded-full uppercase text-sm sm:text-lg" aria-label="CTA button">
                    {data?.cta || "Label"}
                </button>
            </div>
        </div>
        <div className='w-full py-4'>
            <img src={data.imgUrl} alt="magzine post image" className='w-full max-h-post object-cover'/>
        </div>
       
        <div className="w-full flex flex-wrap justify-center px-4">
            <div className="w-full xl:w-3/4 flex flex-wrap">
                <div className="w-full md:w-1/2 flex flex-col items-center sm:p-10 text-lg">
                    <div className="w-full max-w-sm">
                        <div className="flex gap-4 py-10 items-center">
                            <img
                                src={data.imgUrl}
                                alt="author image"
                                className="w-24 rounded-full"
                            />
                            <p className="text-3xl font-black">Jakob Gronberg</p>
                        </div>
                        <div className="flex flex-col gap-4 justify-between w-full py-4 border-t border-black">
                            <div className="flex justify-between">
                                <p className="font-black">Date</p>
                                <p>{data?.date || "16. March 2022"}</p>
                            </div>
                            <div className="flex justify-between">
                                <p className="font-black">Duration</p>
                                <p>{data?.duration || "1h 20 Min"}</p>
                            </div>
                            <div className="flex justify-between">
                                <p className="font-black">Share</p>
                                <div className="flex gap-4">
                                    <a
                                        href="https://instagram.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-xl hover:scale-110"
                                    >
                                        <FaInstagram />
                                    </a>
                                    <a
                                        href="https://twitter.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-xl hover:scale-110"
                                    >
                                        <FaTwitter />
                                    </a>
                                    <a
                                        href="https://youtube.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-xl hover:scale-110"
                                    >
                                        <FaYoutube />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full md:w-1/2 flex flex-col sm:py-10 md:py-16">
                    <p className="text-lg leading-7 font-semibold">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui
                        vivamus arcu felis bibendum ut. Porttitor leo a diam.
                    </p>
                    <p className="py-6 leading-7">
                        Porttitor rhoncus dolor purus non enim praesent elementum. Eget
                        dolor morbi non arcu risus quis varius...
                    </p>
                    <div className="flex border-t-2 border-b-2 font-black py-6 sm:py-12 sm:my-10 gap-2 sm:gap-5">
                        <p className="text-6xl">“</p>
                        <p className="text-xl sm:text-3xl">
                            The greatest glory in living lies not in never falling, but
                            in rising every time we fall.
                            <span className="block text-base pt-2 sm:pt-4 font-semibold">
                                Nelson Mandela
                            </span>
                        </p>
                    </div>
                    <p className="text-base sm:text-lg leading-7 font-semibold py-4">
                        Est pellentesque elit ullamcorper dignissim. Consectetur a erat nam at. Blandit libero volutpat sed cras ornare arcu. Iaculis urna id volutpat lacus laoreet. Tincidunt ornare massa eget egestas purus viverra accumsan in. Viverra ipsum nunc aliquet bibendum enim facilisis gravida neque.
                    </p>
                    <p className="leading-7 text-base">
                        Porttitor rhoncus dolor purus non enim praesent elementum. Eget dolor morbi non arcu risus quis varius. Posuere ac ut consequat semper viverra nam libero. In ornare quam viverra orci sagittis eu. Tristique risus nec feugiat in fermentum posuere urna nec. Tempus quam pellentesque nec nam aliquam sem et. Convallis a cras semper auctor neque vitae tempus quam pellentesque. Sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Sit amet porttitor eget dolor morbi non arcu risus. Justo eget magna fermentum iaculis eu non diam phasellus. Sit amet luctus venenatis lectus magna fringilla. Neque vitae tempus quam pellentesque nec nam.
                        Tellus orci ac auctor augue mauris augue neque gravida. Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis. Id eu nisl nunc mi ipsum faucibus vitae aliquet. Duis convallis convallis tellus id interdum velit laoreet id. Vulputate mi sit amet mauris commodo quis. Semper viverra nam libero justo laoreet sit amet. Eget nullam non nisi est sit. Nibh cras pulvinar mattis nunc sed blandit libero. Ac felis donec et odio pellentesque diam volutpat. Quis varius quam quisque id diam vel quam elementum. Felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices. Id diam vel quam elementum pulvinar etiam non. Non consectetur a erat nam at lectus urna duis convallis.
                    </p>
                </div>
            </div>
        </div>

    </div> 
  )
}

export default MagzinePost