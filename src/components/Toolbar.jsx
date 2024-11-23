import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';

const Toolbar = ({title}) => {
  const navigate = useNavigate();  // Get the navigate function from useNavigate

  const handleGoBack = () => {
    navigate(-1);  // This will navigate to the previous page in the browser history
  };

  return (
    <div className='flex justify-between items-center font-bold'>
        <p className='flex gap-4 justify-center items-center cursor-pointer' onClick={handleGoBack}><FaArrowLeft /> GO BACK</p>
        <h4 className='text-2xl'>{title}</h4>
    </div>
  )
}

export default Toolbar