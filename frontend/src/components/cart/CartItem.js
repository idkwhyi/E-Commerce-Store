// THIS COMPONENT IS BEEN USED IN NAVBAR
import React from 'react'

const CartItem = ({item}) => {
  return (
    <span className='w-full max-h-12 flex z-12 gap-3 text-md'>
      <img src={item.product_image} alt={item.product_name} className='w-12 rounded-md'/>
      <p className='w-1/2 min-w-24 max-w-24 poppins-regular text-wrap '>
        {item.product_name}
      </p>
      <div className='w-1/4 flex items-center justify-center poppins-medium'>
        <p>{item.quantity}x</p>
        <p>${item.product_price}</p>
      </div>
    </span>
  )
}

export default CartItem