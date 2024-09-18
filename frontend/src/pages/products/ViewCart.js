import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import ProductInCart from '../../components/cart/ProductInCart'
import { Link } from 'react-router-dom'

const ViewCart = () => {
  return (
    <div className='w-auto h-screen bg-softWhite'>
      <header className='sticky top-0 h-auto w-full'>
        <Navbar />
      </header>
      <main className='w-full px-20 py-32 flex flex-col'>

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

        <div className='text-lg flex items-center justify-between '>
          <p className='p-5'>PRODUCT</p>
          <div className='flex items-center'>
            <p className='w-64 p-5'>QUANTITY</p>
            <p className='w-64 text-end p-5'>TOTAL</p>
          </div>
        </div>

        <div className='p-5'>
          <hr />
        </div>

        <div className='p-5'>
          <ProductInCart/>
        </div>

        <div className='p-5'>
          <hr />
        </div>

      </main>
      <Footer />
    </div>
  )
}

export default ViewCart