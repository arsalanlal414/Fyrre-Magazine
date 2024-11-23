const NewsTicker = () => {
  return (
    <div className='w-full p-5 bg-primary-dark flex flex-nowrap justify-between'>
        <p className='text-primary-light font-bold text-xl lg:min-w-48 pr-4'>News <span className='extra-sm:hidden lg:inline'>Ticker+++</span></p>
        
        <div className='w-full overflow-hidden'>
          <div className='flex animate-marquee min-w-max'>
            <p className='text-primary-light mr-8'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit +++ 
            </p>
            <p className='text-primary-light mr-8'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit +++ 
            </p>
            <p className='text-primary-light mr-8'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit +++ 
            </p>
            <p className='text-primary-light mr-8'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit +++ 
            </p>
            <p className='text-primary-light mr-8'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit +++ 
            </p>
          </div>
        </div>
      </div>
  )
}

export default NewsTicker