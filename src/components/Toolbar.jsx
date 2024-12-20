import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';

const Toolbar = ({title}) => {
  const navigate = useNavigate();  // Get the navigate function from useNavigate

  const handleGoBack = () => {
    if (window.history.length > 1) {
      window.history.go(-1); // Uses native browser history
    } else {
        navigate('/'); 
    }
};

  return (
    <div className='flex justify-between items-center font-bold'>
        <p className='flex gap-2 sm:gap-4 justify-center items-center cursor-pointer' onClick={handleGoBack}><FaArrowLeft /> GO BACK</p>
        <h4 className='text-lg md:text-2xl'>{title}</h4>
    </div>
  )
}

export default Toolbar