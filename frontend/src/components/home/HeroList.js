import React from 'react'

const HeroList = () => {
  return (
    <li className='roboto-slab-regular w-1/3 h-full p-7 flex flex-col justify-between gap-12 rounded-xl border border-softWhite hover:bg-softWhite hover:text-deepCharcoal transition-colors duration-300 ease-in-out'>
      <div className='w-full flex justify-between'>
        <span className='roboto-slab-bold pr-2 text-2xl'>PRODUCT NAME</span>
        <span className='text-lg roboto-slab-regular'>$10</span>
      </div>
      <div className='w-full flex flex-col'>
        <div className='w-full flex gap-5'>
          <span className='min-w-[30%]'>TYPE</span>
          <span className= 'w-full'>PRODUCT TYPE</span>
        </div>
        <div className='w-full flex gap-5'>
          <span className='min-w-[30%]'>ORIGIN</span>
          <span className='w-full'>PRODUCT ORIGIN</span>
        </div>
        <div className='w-auto flex gap-5'>
          <span className='min-w-[30%]'>PROCESS</span>
          <span className='w-full'>PRODUCT PROCESS</span>
        </div>
      </div>
      
    </li>
  )
}

export default HeroList