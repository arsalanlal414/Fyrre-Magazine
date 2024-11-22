import React from 'react';
import topImg from '../assets/Art_Life.png';
import NewsTicker from '../components/NewsTicker';
import img from '../assets/dimitar.png'
import cover1 from '../assets/podcast-cover1.png'
import cover2 from '../assets/podcast-cover2.png'
import cover3 from '../assets/podcast-cover3.png'
import author1 from '../assets/author1.png'
import author2 from '../assets/author2.png'
import author3 from '../assets/author3.png'
import author4 from '../assets/author4.png'
import author5 from '../assets/author5.png'
import author6 from '../assets/author6.png'
import HomeCards from '../components/HomeCards';
import magzineCover from '../assets/magazin-cover.png'
import { FaArrowRightLong } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import MagzineCards from '../components/MagzineCards';

const Home = () => {
  const navigate = useNavigate();

  const podcast = [
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
    }
  ]

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
    <div className='w-full'>
      <img src={topImg} alt="Art & Life"  className="w-full h-auto lg:py-12 object-cover sm:py-6" />
      <NewsTicker />                    
      <div className='w-full flex justify-between py-16 flex-wrap'>
        <div className='lg:w-1/2 sm:w-full'>
            <h3 className='text-7xl lg:text-x8xl font-black'>
                DON'T CLOSE<br display-none/> YOUR EYES
            </h3>
        </div>
        <div className='lg:w-1/2 sm:w-full flex flex-col justify-between py-4'>
          <p className='text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.</p>
          <div className='flex gap-6 text-lg'>
            <div className='flex gap-2'>
              <span className='font-bold'>Text</span>
              <span className=''>Jakob Gronberg</span>
            </div>
            <div className='flex gap-2'>
              <span className='font-bold'>Date</span>
              <span className=''>16. March 2022</span>
            </div>
            <div className='flex gap-2'>
              <span className='font-bold'>Duration</span>
              <span className=''>1 Min</span>
            </div>
          </div>  
        </div>
      </div>
      <img src={img} alt="dimitar" className='max-w-full max-h-max'/>
      <section className='w-full flex flex-row flex-wrap py-10'>
        <div className='flex flex-col lg:w-3/4 sm:w-full pr-16'>
          <div>
            <HomeCards />
          </div>
          <button onClick={()=> navigate('/magazine')} className='flex gap-4 items-center font-bold'>ALL ARTICLES <FaArrowRightLong /></button>
        </div>
        <div className="flex flex-col lg:w-1/4 sm:w-full sticky top-10 h-fit">
          <h4 className='text-2xl mt-4 font-bold'>Printmagazine</h4>
          <p className='text-6xl mb-6 font-bold'>03/2022</p>
          <img src={magzineCover} alt="magzine cover" className='' width="370px"/>

          <button className='p-4 bg-primary-dark w-fit dark:bg-primary-light dark:text-black font-bold text-primary-light my-4'>BUTTON</button>
          <div className='mt-8'>
            <h3 className='text-lg font-bold'>MOST POPULAR</h3>
            <div className='flex flex-col'>
              <div className="flex gap-8 py-6 border-b border-black">
                <p className='text-3xl font-black'>01</p>
                <div className='flex flex-col justify-between gap-4'>
                  <h3 className='font-bold text-2xl'>Street art festival</h3>
                  <p><span className='font-bold'>Text</span> Cristofer Vaccaro</p>
                </div>
              </div>
              <div className="flex gap-8  py-6 border-b border-black">
                <p className='text-3xl font-black'>02</p>
                <div className='flex flex-col justify-between gap-4'>
                  <h3 className='font-bold text-2xl'>Hope dies last</h3>
                  <p><span className='font-bold'>Text</span> Cristofer Vaccaro</p>
                </div>
              </div>
              <div className="flex gap-8  py-6">
                <p className='text-3xl font-black'>03</p>
                <div className='flex flex-col justify-between gap-4'>
                  <h3 className='font-bold text-2xl'>Artists who want to rise above</h3>
                  <p><span className='font-bold'>Text</span> Cristofer Vaccaro</p>
                </div>
              </div>
            </div>
          </div>
          <div className='p-4 bg-gray-100 w-full dark:text-primary-dark'>
            <h3 className='text-lg font-bold'>NewsLetter</h3>
            <h2 className='text-4xl font-bold my-4'>Design News to your inbox</h2>
            <input type="email" placeholder='email' className='w-full px-4 py-2 text-lg dark:bg-gray-700 dark:text-white'/>
            <div className="flex justify-end">
              <button className="px-4 py-2 bg-primary-dark dark:bg-gray-700 w-fit text-primary-light my-4">
                SignUp
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className='my-14 lg:pt-8 sm:4 border-t border-black'>
        <div className="flex justify-between items-center">
          <h2 className='font-black text-8xl'>PODCAST</h2>
          <button onClick={()=> navigate('/podcast')} className='flex gap-4 items-center font-bold'>ALL PODCASTS <FaArrowRightLong /></button>
        </div>
        {/* <div className="flex flex-wrap mt-8">
          {podcast.map((data, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 lg:w-1/3 p-4 border border-black flex flex-col"
            >
              <img
                src={data?.imgUrl}
                alt="podcast cover image"
                className="w-full h-auto mb-4 object-cover"
              />
              <div className='h-full flex flex-col justify-between items-between'>
                <h4 className="font-bold py-2 text-xl lg:text-2xl">
                  {data?.title}
                </h4>
                <div className="flex flex-wrap gap-4 text-sm pt-4">
                  <p>
                    <span className="font-bold">Date:</span> {data?.date}
                  </p>
                  <p>
                    <span className="font-bold">Duration:</span> {data?.duration}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div> */}
        <MagzineCards cardData={podcast} hidden={true}/>
      </section>
      <section className='my-14 lg:pt-8 sm:4 border-t border-black'>
        <div className="flex justify-between items-center">
          <h2 className='font-black text-8xl'>Author</h2>
          <button onClick={()=> navigate('/authors')} className='flex gap-4 items-center font-bold'>ALL AUTHORS <FaArrowRightLong /></button>
        </div>
        <div className="flex flex-wrap mt-8">
          {authors.map((author, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 lg:w-1/2 p-6 border border-black flex gap-10"
            >
              <img
                src={author?.imgUrl}
                alt="podcast cover image"
                className="max-w-36 rounded-full h-auto mb-4 object-cover"
              />
              <div className='h-full flex flex-col justify-center'>
                <h4 className="font-bold py-2 text-xl lg:text-2xl">
                  {author?.name}
                </h4>
                <div className="flex flex-wrap gap-4 text-sm pt-4">
                  <p>
                    <span className="font-bold">Job:</span> {author?.title}
                  </p>
                  <p>
                    <span className="font-bold">City:</span> {author?.city}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </section>
    </div>
  );
}

export default Home;
