import { useNavigate } from 'react-router-dom';
import cardImg1 from '../assets/card_img1.png';
import cardImg2 from '../assets/card_img2.png';
import cardImg3 from '../assets/card_img3.png';
import cardImg4 from '../assets/card_img4.png';
import cardImg5 from '../assets/card_img5.png';
import cardImg6 from '../assets/card_img6.png';

const MagazineCards = ({cardData}) => {
  const navigate = useNavigate()

  const handleNavigation = (data, ind) => {
    navigate(`/magazine/${ind}`,{
        state: { data }
      }
    ); 
  };

  return cardData.map((data, index) => (
    <article
      key={index}
      className="py-10 flex flex-col md:flex-row gap-6 md:gap-10 border-b border-black last:border-0 cursor-pointer"
      onClick={()=> handleNavigation(data, index+1)}
    >
      <img
        src={data.imgUrl}
        alt="card image"
        className="w-full max-w-full md:max-w-[240px] object-cover"
      />
      <div className="flex flex-col justify-between w-full">
        <div>
          <h3 className="font-bold text-xl md:text-2xl">{data?.title}</h3>
          <p className="py-2 text-sm md:text-base">{data?.para}</p>
        </div>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mt-4">
          <div className="flex flex-col lg:flex-row text-sm md:text-base gap-2 md:gap-4">
            <div className="flex gap-1 md:gap-2">
              <span className="font-semibold">Text:</span>
              <span>{data?.name}</span>
            </div>
            <div className="flex gap-1 md:gap-2">
              <span className="font-semibold">Date:</span>
              <span>{data?.date}</span>
            </div>
            <div className="flex gap-1 md:gap-2">
              <span className="font-semibold">Duration:</span>
              <span>{data?.duration}</span>
            </div>
          </div>
          <button className="mt-4 md:mt-0 border px-4 py-1 border-black dark:border-white rounded-full text-sm md:text-base">
            {data?.cta}
          </button>
        </div>
      </div>
    </article>
  ));
};

export default MagazineCards;