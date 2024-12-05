import React from 'react'
import { useNavigate } from 'react-router-dom';

function AuthorsCard({cardData, limit}) {
    
    const navigate = useNavigate();
    const handleNavigation = (data, ind) => {
        navigate(`/author/${ind}`,{
            state: { data }
            }
        ); 
    };
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 mt-8 gap-2 sm:gap-0" >
        {cardData.slice(0,limit && limit).map((author, index) => (
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
    </div>
  )
}

export default AuthorsCard