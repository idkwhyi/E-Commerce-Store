import React from 'react'

const Card = ({ product }) => {
  return (
    <div className='min-w-[30vw] max-w-[30vw] min-h-[40vw] max-h-[40vw] p-5 rounded-md flex flex-col justify-between gap-5 bg-product_bg'>
      <div className='w-full h-full max-h-[80%]'>
        <img 
          src='https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt='img' 
          style={{
            objectFit: 'cover',
            placeContent: 'center',
            placeItems: 'center'
          }}
          className='h-full w-full'
        />
      </div>
      <div className='w-full flex justify-between items-center min-h-[15%] max-h-[15%]'>
        <div className='roboto-slab-bold text-3xl '>{product.product_name}</div>
        <div className='text-lg roboto-slab-regular'>${product.product_price}</div>
      </div>
    </div>
  )
}

export default Card