import React, {useState, useEffect} from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import ProductInCart from '../../components/cart/ProductInCart'
import { Link } from 'react-router-dom'

const ViewCart = () => {
  const [productsInCart, setProductsInCart] = useState([])

  // TODO: GET CART ITEM FROM LOCAL STORAGE
  useEffect(() => {
    const getProductsFromLocalStorage = () => {
      const cartLocalStorage = JSON.parse(localStorage.getItem('cart'))
      console.log(cartLocalStorage)

      if (cartLocalStorage){
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

        <div className='p-5'>
          {productsInCart.map(item => (
            <ProductInCart item={item} key={item.product_name}/>
          ))}
        </div>

        <div className='p-5'>
          <hr />
        </div>

        {/* TODO: CREATE CHECK  OUT BUTTON BELOW*/}
        <button>CHECK OUT</button>

      </main>
      <Footer />
    </div>
  )
}

export default ViewCart