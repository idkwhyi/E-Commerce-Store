import React, { useState } from 'react';
import trashIcon from '../../assets/image/trash.png';

const ProductInCart = ({ item, productsInCart, setProductsInCart }) => {
  const [productAmount, setProductAmount] = useState(item.quantity);

  const increment = () => {
    const newQuantity = productAmount + 1;
    setProductAmount(newQuantity);
    updateCart(newQuantity);
  };

  const decrement = () => {
    const newQuantity = productAmount > 1 ? productAmount - 1 : 1;
    setProductAmount(newQuantity);
    updateCart(newQuantity);
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    if (/^\d*$/.test(value)) {
      const numericValue = value === '' ? 1 : parseInt(value, 10);
      setProductAmount(numericValue);
      updateCart(numericValue);
    }
  };

  const updateCart = (updatedQuantity) => {
    const updatedProducts = productsInCart.map(product =>
      product.product_id === item.product_id ? { ...product, quantity: updatedQuantity } : product
    );
    setProductsInCart(updatedProducts);
    localStorage.setItem('cart', JSON.stringify(updatedProducts));
  };

  const handleItemTrash = () => {
    const updatedCart = productsInCart.filter(i => i.product_id !== item.product_id);
    setProductsInCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const roundToTwoDecimals = (number) => {
    return Number.parseFloat(number).toFixed(2);
  };

  return (
    <div className='w-full h-25 flex py-5 gap-5 poppins-regular'>
      <img src={item.product_image} alt={item.product_name} className='w-24 h-24 object-cover rounded-md' />
      <div className='w-2/5 flex flex-col px-12'>
        <h2 className='text-2xl poppins-light'>{item.product_name}</h2>
        <h3 className='text-2xl roboto-slab-regular'>${item.product_price}</h3>
      </div>
      <div className='w-1/4 h-14 border-y border-y-softBlack flex items-center justify-between poppins-regular'>
        <button className='text-lg w-1/5 h-full' onClick={decrement}>-</button>
        <input onChange={handleInputChange} value={productAmount} className='text-center w-max h-full bg-inherit' />
        <button className='text-lg w-1/5 h-full' onClick={increment}>+</button>
      </div>
      <button onClick={handleItemTrash} className='w-8 h-8'>
        <img src={trashIcon} alt='trash' className='w-full h-full' />
      </button>
      <p className='w-1/4 text-end text-2xl'>${roundToTwoDecimals(item.product_price * productAmount)}</p>
    </div>
  );
};

export default ProductInCart;
