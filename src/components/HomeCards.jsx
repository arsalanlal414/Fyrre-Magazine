import cardImg1 from '../assets/card_img1.png'
import cardImg2 from '../assets/card_img2.png'
import cardImg3 from '../assets/card_img3.png'
import cardImg4 from '../assets/card_img4.png'
import cardImg5 from '../assets/card_img5.png'
import cardImg6 from '../assets/card_img6.png'

const HomeCards = () => {
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
        
    ]
  return (
    cardData.map((data, index) => (
        <article
          key={index}
          className="py-10 flex gap-10 border-b border-black last:border-0"
        >
          <img src={data.imgUrl} alt="card image" className="max-w-60" />
          <div className="flex flex-col justify-between w-full">
            <div>
              <h3 className="font-bold text-2xl">{data?.title}</h3>
              <p className="lg:py-3 lg:text-base/7">{data?.para}</p>
            </div>
            <div className="w-full flex justify-between">
              <div className="flex text-base gap-4">
                <div className="flex gap-2">
                  <span className="font-black">Text</span>
                  <span className="">{data?.name}</span>
                </div>
                <div className="flex gap-2">
                  <span className="font-black">Date</span>
                  <span className="">{data?.date}</span>
                </div>
                <div className="flex gap-2">
                  <span className="font-black">Duration</span>
                  <span className="">{data?.duration}</span>
                </div>
              </div>
              <button className="mr-6 border px-4 border-black rounded-full">
                {data?.cta}
              </button>
            </div>
          </div>
        </article>
      )))
}

export default HomeCards