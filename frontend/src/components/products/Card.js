import React from 'react'
import { useNavigate } from 'react-router-dom'

const Card = ({ product }) => {
  const navigate = useNavigate()

  const handleCardClick = () => {
    navigate(`/products/details/${product.product_id}`)
  }

  return (
    <div 
      className='min-w-[25vw] max-w-[25vw] min-h-[35vw] max-h-[35vw] rounded-md flex flex-col bg-product_bg p-5 cursor-pointer' 
      onClick={handleCardClick}
    >
      <div className='w-full h-full max-h-[80%] rounded-md'>
        <img 
          src={product.product_image} alt={product.product_name} 
          style={{
            objectFit: 'cover',
            placeContent: 'center',
            placeItems: 'center',
            // borderRadius: '0.375rem 0.375rem 0 0'
          }}
          className='h-full w-full rounded-md'
        />
      </div>
      <div className='w-full flex justify-between items-center min-h-[20%] max-h-full rounded-md'>
        <div className='roboto-slab-bold text-2xl '>{product.product_name}</div>
        <div className='text-lg roboto-slab-regular'>${product.product_price}, {}</div>
      </div>
    </div>
  )
}

export default Card