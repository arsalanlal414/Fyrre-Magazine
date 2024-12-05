import React, { useEffect } from 'react';
import topImg from '../assets/Art_Life.png';
import topImgWhite from '../assets/Art_Life_white.png';
import NewsTicker from '../components/NewsTicker';
import img from '../assets/dimitar.png'
import magzineCover from '../assets/magazin-cover.png'
import { FaArrowRightLong } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import MagzineCards from '../components/PodcastCards';
import { useDarkMode } from '../hooks/DarkModeContext';
import Podcasts from './Podcasts';
import PodcastCards from '../components/PodcastCards';
import { useData } from '../hooks/DataContext';
import AuthorsCard from '../components/AuthorsCard';
import MagazineCards from '../components/MagzineCards';

const Home = () => {
  const navigate = useNavigate();
  const {darkMode} = useDarkMode()

  useEffect(()=>{
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    scrollToTop()
  },[])

  
  const data = useData();
  const allPodcasts = data.flatMap(author => author.podcasts);
  const allArticles = data.flatMap(article => article.magazines);
  const mostPopularMagazines = data[0].magazines.slice(0, 3);

  const handleNavigation = (data, ind) => {
    navigate(`/author/${ind}`,{
        state: { data }
      }
    ); 
  };

  return (
    <div className='w-full'>
      <img src={darkMode ? topImgWhite : topImg} alt="Art & Life"  className="w-full h-auto object-cover py-6 lg:py-12" />
      <NewsTicker />  

      <img src={img} alt="dimitar" className='max-w-full max-h-max sm:hidden my-6'/>
      <div className="w-full flex flex-wrap justify-between sm:pt-10 xl:py-16 sm:gap-8 lg:gap-0">
        <div className="w-full lg:w-1/2">
          <h3 className="text-4xl sm:text-6xl xl:text-8xl font-black leading-tight">
            DON'T CLOSE<br className="hidden lg:inline" /> YOUR EYES
          </h3>
        </div>

        <div className="w-full lg:w-1/2 flex flex-col justify-between gap-4">
          <p className="text-base sm:text-lg leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.
          </p>
          <div className="flex flex-wrap flex-col md:flex-row gap-4 text-sm sm:text-lg">
            <div className="flex gap-2">
              <span className="font-bold">Text:</span>
              <span>Jakob Gronberg</span>
            </div>
            <div className="flex gap-2">
              <span className="font-bold">Date:</span>
              <span>16. March 2022</span>
            </div>
            <div className="flex gap-2">
              <span className="font-bold">Duration:</span>
              <span>1 Min</span>
            </div>
          </div>
        </div>
      </div>
      <img src={img} alt="dimitar" className='max-w-full max-h-max hidden sm:block sm:mt-12'/>


      <section className="w-full flex flex-wrap lg:flex-nowrap sm:py-12">
        <div className="flex flex-col lg:w-3/4 w-full lg:pr-16">
          <div>
            <MagazineCards cardData={allArticles} limit={7}/>
          </div>
          <button
            onClick={() => navigate('/magazine')}
            className="flex gap-4 items-center font-bold mt-4"
          >
            ALL ARTICLES <FaArrowRightLong />
          </button>
        </div>
        <div className="flex flex-col lg:w-1/4 w-full sticky top-10 h-fit">
          <h4 className="text-2xl mt-4 font-bold">Printmagazine</h4>
          <p className="text-6xl mb-6 font-bold">03/2022</p>
          <img
            src={magzineCover}
            alt="magazine cover"
            className="w-full lg:w-[370px] mx-auto"
          />
          <button className="p-4 bg-primary-dark w-fit dark:bg-primary-light dark:text-black font-bold text-primary-light my-4">
            BUTTON
          </button>
          <div className="mt-8">
            <h3 className="text-lg font-bold">MOST POPULAR</h3>
            <div className="flex flex-col">
              {mostPopularMagazines.map((magazine, idx) => (
                <div
                  key={idx}
                  className={`flex gap-8 py-6 ${
                    idx !== mostPopularMagazines.length - 1 ? 'border-b border-black' : ''
                  }`}
                >
                  <p className="text-3xl font-black">{`0${idx + 1}`}</p>
                  <div className="flex flex-col justify-between gap-4">
                    <h3 className="font-bold text-2xl">{magazine.title}</h3>
                    <p>
                      <span className="font-bold">Author:</span> {data[0].name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="p-4 bg-gray-100 w-full dark:text-primary-dark mt-8">
            <h3 className="text-lg font-bold">Newsletter</h3>
            <h2 className="text-4xl font-bold my-4">Design News to your inbox</h2>
            <input
              type="email"
              placeholder="email"
              className="w-full px-4 py-2 text-lg dark:bg-gray-700 dark:text-white"
            />
            <div className="flex justify-end">
              <button className="px-4 py-2 bg-primary-dark dark:bg-gray-700 w-fit text-primary-light my-4">
                SignUp
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="my-14 lg:pt-8 py-8 border-t border-black">
        <div className="flex flex-col lg:flex-row justify-between items-center sm:gap-2 md:gap-8">
          <h2 className="font-black text-4xl lg:text-8xl text-center lg:text-left">
            PODCAST
          </h2>
          <button
            onClick={() => navigate("/podcast")}
            className="flex gap-4 items-center font-bold text-base lg:text-lg"
          >
            ALL PODCASTS <FaArrowRightLong />
          </button>
        </div>
        <PodcastCards cardData={allPodcasts} hidden={true} limit={3}/>
      </section>

      <section className="my-14 lg:pt-8 py-8 border-t border-black">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
          <h2 className="font-black text-4xl lg:text-8xl text-center lg:text-left">
            Author
          </h2>
          <button
            onClick={() => navigate("/authors")}
            className="flex gap-4 items-center font-bold text-base lg:text-lg"
          >
            ALL AUTHORS <FaArrowRightLong />
          </button>
        </div>
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 mt-8 gap-2 sm:gap-0">
          {data.map((author, index) => (
            <div
              key={index}
              className="flex items-center gap-6 p-4 border border-black dark:border-white cursor-pointer"
              onClick={()=> handleNavigation(author, index+1)}
            >
              <img
                src={author?.imgUrl}
                alt={`${author?.name}'s image`}
                className="w-20 h-20 sm:w-28 sm:h-28 lg:w-36 lg:h-36 rounded-full object-cover"
              />
              <div className="flex flex-col justify-center">
                <h4 className="font-bold text-lg lg:text-2xl">{author?.name}</h4>
                <div className="flex flex-wrap gap-4 text-sm lg:text-base pt-4">
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
        </div> */}

        <AuthorsCard limit={4} cardData={data} />
      </section>

    </div>
  );
}

export default Home;
