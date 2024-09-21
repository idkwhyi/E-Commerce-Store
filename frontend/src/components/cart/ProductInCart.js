import React, { useState, useEffect } from 'react';
import trashIcon from '../../assets/image/trash.png';

const ProductInCart = ({ item }) => {
  const [productAmount, setProductAmount] = useState(item.quantity);

  const increment = () => {
    setProductAmount(prevAmount => prevAmount + 1);
  };

  const decrement = () => {
    setProductAmount(prevQuantity => (prevQuantity > 0 ? prevQuantity - 1 : 0));
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    // Allow only numbers
    if (/^\d*$/.test(value)) {
      // If value is empty, default to 1
      if (value === '') {
        setProductAmount(0);
      } else {
        const numericValue = parseInt(value, 10);
        setProductAmount(numericValue);
      }
    }
  };

  const handleItemTrash = () => {
    const localStorageCart = JSON.parse(localStorage.getItem('cart')) || [];

    const updatedCart = localStorageCart.filter(i => i.product_id !== item.product_id);

    localStorage.setItem('cart', JSON.stringify(updatedCart));

    console.log('Item removed. Updated cart:', updatedCart);
    window.location.reload();
  };

  const updateLocalStorage = (updatedQuantity) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingProductIndex = cart.findIndex(i => i.product_id === item.product_id);

    if (existingProductIndex >= 0) {
      cart[existingProductIndex].quantity = updatedQuantity;
    }

    localStorage.setItem('cart', JSON.stringify(cart)); // Fixed typo here
  };

  useEffect(() => {
    updateLocalStorage(productAmount);
  }, [productAmount]);

  const roundToTwoDecimals = (number) => {
    return Number.parseFloat(number).toFixed(2);
  };

  return (
    <div className='w-full h-25 flex py-5 gap-5'>
      <img src={item.product_image} alt={item.product_name} className='w-24 h-24 place-items-center object-cover rounded-md' />

      <div className='w-2/5 flex flex-col px-12'>
        <h2 className='text-2xl poppins-light'>{item.product_name}</h2>
        <h3 className='text-2xl roboto-slab-regular'>${item.product_price}</h3>
      </div>

      <div className='w-1/4 h-14 border-y border-y-softBlack flex items-center justify-between poppins-regular'>
        <button
          className='text-lg w-1/5 h-full'
          onClick={decrement}
        >
          -
        </button>
        <input
          placeholder=''
          onChange={handleInputChange}
          value={productAmount}
          className='text-center w-max h-full bg-inherit'
        />
        <button
          className='text-lg w-1/5 h-full'
          onClick={increment}
        >
          +
        </button>
      </div>
      <button
        onClick={handleItemTrash}
        className='w-8 h-8'
      >
        <img src={trashIcon} alt='trash' className='w-full h-full' />
      </button>
      <p className='w-1/4 text-end text-2xl'>
        $
        {roundToTwoDecimals(item.product_price * productAmount)}
      </p>
    </div>
  );
};

export default ProductInCart;
