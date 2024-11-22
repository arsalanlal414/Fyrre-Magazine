import React, { useEffect } from 'react'
import cardImg1 from '../assets/card_img1.png'
import cardImg2 from '../assets/card_img2.png'
import cardImg3 from '../assets/card_img3.png'
import cardImg4 from '../assets/card_img4.png'
import cardImg5 from '../assets/card_img5.png'
import cardImg6 from '../assets/card_img6.png'
import Magazine from '../assets/Magazine.png'
import { useNavigate } from 'react-router-dom'
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6'
import MagzineCards from '../components/MagzineCards'
import { FaArrowLeft } from 'react-icons/fa'

const Magzine = () => {

  useEffect(()=>{
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    scrollToTop()
  },[])

  const cardData = [
    {
        imgUrl: cardImg1,
        title: 'Hope dies last',
        para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.',
        name: 'Jakob Gronberg',
        duration: '1 Min',
        date: '16. March 2022',
        cta: 'Art'
    },
    {
        imgUrl: cardImg2,
        title: 'The best art museums',
        para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.',
        name: 'Jakob Gronberg',
        duration: '1 Min',
        date: '16. March 2022',
        cta: 'Sculptures'
    },
    {
        imgUrl: cardImg3,
        title: 'The devil is the details',
        para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.',
        name: 'Jakob Gronberg',
        duration: '1 Min',
        date: '16. March 2022',
        cta: 'Art'
    },
    {
        imgUrl: cardImg4,
        title: 'An inde­struc­tible hope',
        para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.',
        name: 'Jakob Gronberg',
        duration: '1 Min',
        date: '16. March 2022',
        cta: 'Art'
    },
    {
        imgUrl: cardImg5,
        title: 'Street art festival',
        para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.',
        name: 'Jakob Gronberg',
        duration: '1 Min',
        date: '16. March 2022',
        cta: 'Streat Art'
    },
    {
        imgUrl: cardImg6,
        title: 'Through the eyes of street artists',
        para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.',
        name: 'Jakob Gronberg',
        duration: '1 Min',
        date: '16. March 2022',
        cta: 'Art'
    },
    {
      imgUrl: cardImg2,
      title: 'Hope dies last',
      para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.',
      name: 'Jakob Gronberg',
      duration: '1 Min',
      date: '16. March 2022',
      cta: 'Art'
    },
    {
      imgUrl: cardImg6,
      title: 'The best art museums',
      para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.',
      name: 'Jakob Gronberg',
      duration: '1 Min',
      date: '16. March 2022',
      cta: 'Sculptures'
    },
    {
      imgUrl: cardImg1,
      title: 'The devil is the details',
      para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.',
      name: 'Jakob Gronberg',
      duration: '1 Min',
      date: '16. March 2022',
      cta: 'Art'
    },
    {
      imgUrl: cardImg3,
      title: 'An inde­struc­tible hope',
      para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.',
      name: 'Jakob Gronberg',
      duration: '1 Min',
      date: '16. March 2022',
      cta: 'Art'
    },
    {
      imgUrl: cardImg4,
      title: 'Street art festival',
      para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.',
      name: 'Jakob Gronberg',
      duration: '1 Min',
      date: '16. March 2022',
      cta: 'Streat Art'
    },
    {
      imgUrl: cardImg5,
      title: 'Through the eyes of street artists',
      para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.',
      name: 'Jakob Gronberg',
      duration: '1 Min',
      date: '16. March 2022',
      cta: 'Art'
    },
  ]

  const navigate = useNavigate();
  return (
    <div>
      <img src={Magazine} alt="Magazine" className='w-full h-auto lg:py-12 object-cover sm:py-6'/>
      <div className="flex justify-between items-center lg:py-6">
        <h2 className='font-black text-xl'>Categories</h2>
        <div className='flex justify-center items-center'>
          <p className="mr-6 border px-4 border-black rounded-full">
            All        
          </p>
          <p className="mr-6 border px-4 border-black rounded-full">
            Arts        
          </p>
          <p className="mr-6 border px-4 border-black rounded-full">
            Street Art        
          </p>
          <p className="mr-6 border px-4 border-black rounded-full">
            Sculptures        
          </p>
        </div>
      </div>
      {/* {console.log({cardData})} */}
      <MagzineCards cardData={cardData}/>
      <div className="flex justify-between my-14">
        <p className='font-bold flex items-center gap-2'><FaArrowLeftLong />PREVIOUS</p>
        <p className='font-bold flex items-center gap-2'>Next <FaArrowRightLong /></p>
      </div>
    </div>
  )
}

export default Magzine