import React from 'react'

const MagzineCards = ({cardData, hidden}) => {
    {console.log({cardData})}
  return (
    <div className="flex flex-wrap mt-8">
        {cardData.map((data, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 lg:w-1/3 p-4 border border-black flex flex-col py-8"
          >
            <div className={`flex justify-between py-4 pb-8 ${hidden===true ? "hidden": ""}`}>
              <p>{data?.date}</p>
              <p className="mr-6 border px-4 border-black rounded-full">
                {data?.cta}        
              </p>
            </div>
            <img
              src={data?.imgUrl}
              alt="podcast cover image"
              className="w-full h-auto mb-4 object-cover"
            />
            <div className='h-full flex flex-col justify-between items-between'>
              <h4 className="font-bold py-4 text-xl lg:text-2xl">
                {data?.name}
              </h4>
              <p className='py-4'>
              {data?.para}
              </p>
              <div className="flex flex-wrap gap-4 text-sm pt-4">
                <p>
                  <span className="font-bold">Text:</span> {data?.date}
                </p>
                <p>
                  <span className="font-bold">Duration:</span> {data?.duration}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
  )
}

export default MagzineCards