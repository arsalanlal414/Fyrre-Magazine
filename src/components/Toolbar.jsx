import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'

const Toolbar = ({title}) => {
  return (
    <div className='flex justify-between items-center font-bold'>
        <p className='flex gap-4 justify-center items-center'><FaArrowLeft /> GO BACK</p>
        <h4 className='text-2xl'>{title}</h4>
    </div>
  )
}

export default Toolbar