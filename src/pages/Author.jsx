import React, { useEffect } from 'react'
import Toolbar from '../components/Toolbar'
import author1 from '../assets/author1.png'
import author2 from '../assets/author2.png'
import author3 from '../assets/author3.png'
import author4 from '../assets/author4.png'
import author5 from '../assets/author5.png'
import author6 from '../assets/author6.png'
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { useLocation, useNavigate } from 'react-router-dom'

const Author = () => {
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
    },[data])

    const navigate = useNavigate()
    const handleNavigation = (data, ind) => {
      navigate(`/author/${ind}`,{
          state: { data }
        }
      ); 
    };

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
    }  
  ]

  return (
    <div className='py-6 w-full'>
        <Toolbar title="AUTHOR"/>
        <div className='flex w-full'>
          <div className="flex flex-col items-center w-1/2 py-20">
            <img src={data.imgUrl} alt="author image" className='w-96 rounded-full'/>
            <div className="flex justify-between w-96 py-10 border-t border-black dark:border-white mt-10 text-xl">
              <p className='font-black'>FOLLOW</p>
              <div className="flex gap-4 ">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110">
                  <FaInstagram />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110">
                  <FaTwitter />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110">
                  <FaYoutube />
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-left w-1/2 py-20 justify-center gap-10">
            <h3 className='text-x7xl font-black max-w-96 uppercase'>{data?.name}</h3>
            <p className='text-lg/8 font-semibold lg:pr-24'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.</p>
            <p className='lg:pr-24'>Porttitor rhoncus dolor purus non enim praesent elementum. Eget dolor morbi non arcu risus quis varius. Posuere ac ut consequat semper viverra nam libero. In ornare quam viverra orci sagittis eu. Tristique risus nec feugiat in fermentum posuere urna nec. Tempus quam pellentesque nec nam aliquam sem et. Convallis a cras semper auctor neque vitae tempus quam pellentesque. Sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Sit amet porttitor eget dolor morbi non arcu risus. Justo eget magna fermentum iaculis eu non diam phasellus. Sit amet luctus venenatis lectus magna fringilla. Neque vitae tempus quam pellentesque nec nam.</p>
          </div>
        </div>
        <div className='flex flex-col gap-10 py-10 mt-10 border-t border-black dark:border-white'>
          <h4 className='text-6xl font-black'>Best Authors</h4>
          <div className="flex flex-wrap">
            {authors.map((author, index) => (
              <div
                key={index}
                className="w-full sm:w-1/2 lg:w-1/2 p-6 border border-black dark:border-white flex gap-10 cursor-pointer"
                onClick={()=> handleNavigation(author, index+1)}
              >
                <img
                  src={author?.imgUrl}
                  alt="podcast cover image"
                  className="max-w-36 rounded-full h-auto mb-4 object-cover"
                />
                <div className='h-full flex gap-3 flex-col justify-center'>
                  <h4 className="font-bold text-xl lg:text-2xl">
                    {author?.name}
                  </h4>
                  <div className="flex flex-wrap gap-4 text-sm">
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
        </div>                                             
    </div>
  )
}

export default Author