import React from 'react'

const CategoryProduct = ({ categoryName, description, productCount }) => {

  const handleClick = () => {
    console.info('clicked')
  }

  return (
    <li className='roboto-slab-regular w-full h-full rounded-xl border border-softBlack hover:bg-softBlack hover:text-softWhite transition-colors duration-300 ease-in-out'>
      <button
        className='w-full h-full p-7 rounded-xl flex flex-col justify-between'
        onClick={handleClick}
      >
        <div className='w-full flex justify-between'>
          <span className='roboto-slab-bold pr-2 mb-5 text-2xl'>{categoryName}</span>
        </div>
        <div className='text-left'>
          {description}
        </div>
        <div className='w-full flex flex-col'>
          <div className='w-full flex gap-1 my-5'>
            <span className='min-w-[40%] text-start'>PRODUCT COUNT</span>
            <span className='w-full text-start'>{productCount}</span>
          </div>
        </div>
      
      </button>
    </li>)
}

export default CategoryProduct