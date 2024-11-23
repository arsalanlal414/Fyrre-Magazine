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
        {/* {!data.length > 0 ? <div>Post not found!</div> : <> */}
            <div className='w-full flex justify-between py-16 flex-wrap'>
                <div className='lg:w-1/2 sm:w-full'>
                    <h3 className='text-7xl lg:text-x8xl font-black uppercase'>
                    {data?.title || "Hope dies last"}
                    </h3>
                </div>
                <div className='lg:w-1/2 sm:w-full flex flex-col justify-between py-4'>
                    <p className='text-lg/10 pr-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.</p>
                </div>
            </div>
            <div className='flex text-lg w-full justify-between'>
                <div className='flex gap-4'>
                    <div className='flex gap-2'>
                        <span className='font-bold'>Text</span>
                        <span className=''>{data.name || "Jakob Gronberg"}</span>
                    </div>
                    <div className='flex gap-2'>
                        <span className='font-bold'>Date</span>
                        <span className=''>{ data?.date || "16. March 2022"}</span>
                    </div>
                    <div className='flex gap-2'>
                        <span className='font-bold'>Read</span>
                        <span className=''>{data?.duration || "2 Min"}</span>
                    </div>
                </div>
                <div className='flex gap-2'>
                    <button className="mr-6 border px-4 border-black rounded-full uppercase">
                        {data?.cta || "Label"}
                    </button>
                </div>
            </div>  
            <div className='w-full py-4'>
                <img src={data.imgUrl} alt="magzine post image" className='w-full max-h-post object-cover'/>
            </div>
            <div className="w-full flex justify-center">
                <div className="w-3/4 flex gap-10">
                    <div className="flex flex-col items-center w-1/2 py-10 text-lg">
                        <div className='w-80'>
                            <div className="flex gap-4 py-10 items-center">
                                <img src={data.imgUrl} alt="author image" className='w-24 rounded-full'/>
                                <p className='text-3xl font-black'>Jakob Gronberg</p>
                            </div>
                            <div className="flex flex-col gap-4 justify-between w-80 py-4 border-t border-black">
                                <div className="flex justify-between">
                                    <p className='font-black'>Date</p>
                                    <p>{ data?.date || "16. March 2022"}</p>
                                </div>
                                <div className="flex justify-between">
                                    <p className='font-black'>Duration</p>
                                    <p>{ data?.duration || "1h 20 Min"}</p>
                                </div>
                                <div className="flex justify-between">
                                    <p className='font-black'>Share</p>
                                    <div className="flex gap-4 ">
                                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:scale-110">
                                        <FaInstagram />
                                    </a>
                                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:scale-110">
                                        <FaTwitter />
                                    </a>
                                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:scale-110">
                                        <FaYoutube />
                                    </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-left w-1/2 py-20 justify-center w-full">
                        <p className='text-lg/10 font-semibold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.</p>
                        <p className='py-10'>
                            Porttitor rhoncus dolor purus non enim praesent elementum. Eget dolor morbi non arcu risus quis varius. Posuere ac ut consequat semper viverra nam libero. In ornare quam viverra orci sagittis eu. Tristique risus nec feugiat in fermentum posuere urna nec. Tempus quam pellentesque nec nam aliquam sem et. Convallis a cras semper auctor neque vitae tempus quam pellentesque. Sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Sit amet porttitor eget dolor morbi non arcu risus. Justo eget magna fermentum iaculis eu non diam phasellus. Sit amet luctus venenatis lectus magna fringilla. Neque vitae tempus quam pellentesque nec nam.
                            Tellus orci ac auctor augue mauris augue neque gravida. Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis. Id eu nisl nunc mi ipsum faucibus vitae aliquet. Duis convallis convallis tellus id interdum velit laoreet id. Vulputate mi sit amet mauris commodo quis. Semper viverra nam libero justo laoreet sit amet. Eget nullam non nisi est sit. Nibh cras pulvinar mattis nunc sed blandit libero. Ac felis donec et odio pellentesque diam volutpat. Quis varius quam quisque id diam vel quam elementum. Felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices. Id diam vel quam elementum pulvinar etiam non. Non consectetur a erat nam at lectus urna duis convallis.
                        </p>
                        <div className="flex border-t-2 border-b-2 font-black py-12 my-10 gap-5">
                            <p className='text-8xl'>“</p>
                            <p className='text-5xl'>
                                The greatest glory in living lies not in never falling, but in rising every time we fall.
                                
                                <p className='text-xl pt-4 font-semibold'>Nelson Mandela</p>
                            </p>

                        </div>
                        <p className='text-lg/10 font-semibold pb-4'>
                        Est pellentesque elit ullamcorper dignissim. Consectetur a erat nam at. Blandit libero volutpat sed cras ornare arcu. Iaculis urna id volutpat lacus laoreet. Tincidunt ornare massa eget egestas purus viverra accumsan in. Viverra ipsum nunc aliquet bibendum enim facilisis gravida neque.    
                        </p>
                        <p>
                            Porttitor rhoncus dolor purus non enim praesent elementum. Eget dolor morbi non arcu risus quis varius. Posuere ac ut consequat semper viverra nam libero. In ornare quam viverra orci sagittis eu. Tristique risus nec feugiat in fermentum posuere urna nec. Tempus quam pellentesque nec nam aliquam sem et. Convallis a cras semper auctor neque vitae tempus quam pellentesque. Sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Sit amet porttitor eget dolor morbi non arcu risus. Justo eget magna fermentum iaculis eu non diam phasellus. Sit amet luctus venenatis lectus magna fringilla. Neque vitae tempus quam pellentesque nec nam.
                            Tellus orci ac auctor augue mauris augue neque gravida. Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis. Id eu nisl nunc mi ipsum faucibus vitae aliquet. Duis convallis convallis tellus id interdum velit laoreet id. Vulputate mi sit amet mauris commodo quis. Semper viverra nam libero justo laoreet sit amet. Eget nullam non nisi est sit. Nibh cras pulvinar mattis nunc sed blandit libero. Ac felis donec et odio pellentesque diam volutpat. Quis varius quam quisque id diam vel quam elementum. Felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices. Id diam vel quam elementum pulvinar etiam non. Non consectetur a erat nam at lectus urna duis convallis.
                        </p>
                        
                    </div>
                </div>
            </div>
        {/* </>

        } */}
    </div>
  )
}

export default MagzinePost