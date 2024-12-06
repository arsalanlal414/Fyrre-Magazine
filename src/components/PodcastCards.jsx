import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

const PodcastCards = ({ cardData, hidden, limit, type }) => {
  let [start, setStart] = useState(0)
  let [end, setEnd] = useState(limit)

  const navigate = useNavigate();  

  const handleNavigation = (data, index) => {
    navigate(`/${type}/${index}`, {
      state: { data } 
    });
  };

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      easing: 'ease-in-out',
      once: false,
    });
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-8">
      {cardData.slice(start,end && end).map((data, index) => (
        <div
          key={index}
          className="p-4 border border-black dark:border-white flex flex-col h- cursor-pointer"
          onClick={()=> handleNavigation(data, index+1)}
          data-aos="fade-in"
        >
          <div className={`flex justify-between py-4 pb-8 ${hidden ? "hidden" : ""}`}>
            <p className="text-sm lg:text-base">{data?.date}</p>
            <p className="mr-6 border px-4 py-1 text-sm lg:text-base border-black dark:border-white rounded-full">
              {data?.cta}
            </p>
          </div>
          <img
            src={data?.imgUrl}
            alt="podcast cover image"
            className="w-full mb-4"
          />
          <div className="flex flex-col justify-between h-full">
            <h4 className="font-bold text-lg lg:text-xl py-2">{data?.name}</h4>
            <p className="text-sm lg:text-base py-2">{data?.para}</p>
            <div className="flex flex-wrap gap-4 text-sm lg:text-base pt-4">
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
    </div>
  );
};

export default PodcastCards;
