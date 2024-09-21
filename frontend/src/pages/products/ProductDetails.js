// THIS COMPONENT ARE PRODUCT DETAILS AFTER USER CLICK ON SOME PRODUCT CARDS
import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useUser } from '../../context/UserContext'

const ProductDetails = () => {

  const { productId } = useParams()
  const { loginStatus } = useUser()
  const token = localStorage.getItem('token')
  const navigate = useNavigate()
  const [productDetails, setProductDetails] = useState(null) // state to store product details from database
  const [productAmount, setProductAmount] = useState(0) // product amount from the input tag

  // useEffect to get product details by product_id from database
  useEffect(() => {
    const get_products_details = async () => {
      try {
        const response = await axios.post('http://127.0.0.1:5000/product/id', {
          'product_id': productId
        })
        console.log(response.data.product_details)
        setProductDetails(response.data.product_details)
        console.log("response data: ", response.data.productd)
        
      } catch (e) {
        console.log("failed fetch product by id")
        console.error(e.message)
      }
    }
    get_products_details()
  }, [productId])
  

  const increment = () => {
    setProductAmount(prevAmount => prevAmount + 1)
  }

  const decrement = () => {
    setProductAmount((prevQuantity) => (prevQuantity > 0 ? prevQuantity - 1 : 0));
  };

  // Function to handle manual input change
  const handleInputChange = (event) => {
    const value = event.target.value;
    // Allow only numbers
    if (/^\d*$/.test(value)) {
      // If value is empty, default to 1
      if (value === '') {
        setProductAmount(0);
      } else {
        const numericValue = parseInt(value, 10);
        // check if value > product quantity
        if (numericValue > productDetails.product_quantity){
          setProductAmount(productDetails.product_quantity)
        } else {
          setProductAmount(numericValue)
        }
      }
    }
  };

  // Retrieve cart from localstorage from JSON string as an object and create new empty array if cart is not exist
  const handleAddToCart = () => {
    //* Check if user is logged in
    if (!token && !loginStatus) {
      alert("Login is required before do this action!")
      navigate('/login')
    }

    // Get the cart from localstorage 
    const cart = JSON.parse(localStorage.getItem('cart')) || []

    // Check if the product is already in the cart
    const existingProductIndex = cart.findIndex(item => item.product_id === productDetails.product_id);

    if (existingProductIndex >= 0) {
      // If the product is already in the cart, update its quantity
      cart[existingProductIndex].quantity += productAmount;
    } else {
      cart.push({
        product_id: productDetails.product_id,
        product_name: productDetails.product_name,
        product_price: productDetails.product_price,
        product_image: productDetails.product_image,
        quantity: productAmount
      })
    }

    localStorage.setItem('cart', JSON.stringify(cart))
    alert(`${productDetails.product_name} has been added to the cart`)
    window.location.reload(true);
  }

  if (!productDetails) {
    // Render a loading message or spinner while fetching the product details
    return <div>Loading...</div>
  }

  return (
    <div className='w-auto h-screen bg-product_bg'>
      <header className='sticky top-0 h-auto w-full'>
        <Navbar />
      </header>
      <main className='w-full h-auto px-10 py-5'>
        {/* container */}
        <div className='w-full h-auto flex items-center justify-evenly gap-5'>

          <div className='min-w-1/2 w-1/2 max-w-1/2 h-[85vh] rounded-md'>
            <img
              src={productDetails && productDetails.product_image}
              alt={productDetails.product_name}
              className='w-full h-full object-cover rounded-md'
            />
          </div>

          {/* product details */}
          <div className='w-2/5 h-[85vh] bg-softWhite p-8 flex flex-col justify-between items-center rounded-md'>
            <div className='w-full flex justify-between items-center'>
              <h1 className='roboto-slab-bold text-5xl'>{productDetails.product_name}</h1>
              <p className='roboto-slab-medium text-3xl'>${productDetails.product_price}</p>
            </div>

            <div className='h-2/3  py-5 flex flex-col justify-between'>
              <p className='poppins-regular text-lg'>{productDetails.product_description}</p>

              <div className='w-full h-12 flex items-center justify-between mt-10'>
                {/* input */}
                <div className='w-1/2 h-full border-y border-y-softBlack flex items-center justify-between poppins-regular'>
                  {/* TODO: BUTTON INCREMENT AND DECREMENT */}
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
                    className='text-center w-full h-full bg-inherit'
                  />
                  <button
                    className='text-lg w-1/5 h-full'
                    onClick={increment}
                  >
                    +
                  </button>
                </div>
                {/* stock left */}
                <div className='w-1/2 h-full poppins-regular text-md  flex items-center justify-evenly p-5 px-10 text-2xl'>
                  <p className='poppins-regular text-xl'>Stock Left: </p>
                  <p className='poppins-medium underline'>
                    {productDetails.product_quantity}
                  </p>
                </div>
              </div>
            </div>

            <button
              className='w-full h-16 bg-black text-softWhite roboto-slab-bold text-2xl'
              onClick={handleAddToCart}
            >Add to Cart</button>
          </div>
        </div>
      </main>
      <Footer/>k
    </div>
  )
}

export default ProductDetails