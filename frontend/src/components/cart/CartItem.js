import React from 'react'

const CartItem = (item) => {
  return (
    <span className='w-full'>
      <img src={item.product_image} alt={item.product_name}/>
      <p className='text-md poppins-regular'>{item.product_name}</p>
      <div className=''>
        <p>{item.quantity}x</p>
        <p>{item.product_price}</p>
      </div>
    </span>
  )
}

export default CartItem