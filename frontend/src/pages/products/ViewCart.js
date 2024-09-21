import React, { useState, useEffect } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import ProductInCart from '../../components/cart/ProductInCart'
import { Link } from 'react-router-dom'

const ViewCart = () => {
  const [productsInCart, setProductsInCart] = useState([])

  // useEffect to get product in cart in local storage
  useEffect(() => {
    const getProductsFromLocalStorage = () => {
      const cartLocalStorage = JSON.parse(localStorage.getItem('cart'))
      console.log(cartLocalStorage)

      if (cartLocalStorage) {
        setProductsInCart(cartLocalStorage)
      }
    }
    getProductsFromLocalStorage()
  }, [])

  return (
    <div className='w-auto h-auto bg-softWhite'>
      <header className='sticky top-0 h-auto w-full'>
        <Navbar />
      </header>
      <main className='w-full h-full bg-inherit px-20 py-24 flex flex-col'>

        <div className='poppins-regular flex items-center justify-between'>
          <h1 className='p-5'>
            Cart
          </h1>
          <h2 className='p-5'>
            <Link to='/products/all'>
              Continue shopping
            </Link>
          </h2>
        </div>

        <div className='text-lg flex items-center justify-between py-5'>
          <p className='p-5'>PRODUCT</p>
          <div className='flex items-center justify-end px-5 gap-2'>
            <p className='w-[18rem] py-5'>QUANTITY</p>
            <p className='w-[18rem] text-end py-5'>TOTAL</p>
          </div>
        </div>

        <div className='p-5'>
          <hr />
        </div>

        {/* PRODUCT LIST */}
        <div className='p-5'>
          {productsInCart.map(item => (
            <ProductInCart item={item} key={item.product_name} />
          ))}
        </div>

        <div className='p-5'>
          <hr />
        </div>

        <div className='w-full h-auto flex items-center justify-end p-5'>
          <button className='poppins-regular w-5/12 h-20 text-2xl bg-black text-white hover:bg-white hover:text-black hover:border-2 hover:border-black'
          >Check Out</button>
        </div>

      </main>
      <Footer />
    </div>
    // TODO: CART PRICE UPDATE WHEN ITEM AMOUNT CHANGE 
    // TODO: ADD THE SUB TOTAL
  )
}

export default ViewCart