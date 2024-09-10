import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Navbar from '../../components/navbar/Navbar'
import Filter from '../../components/products/Filter'
import Card from '../../components/products/Card'

const Products = () => {

  const { category } = useParams()
  const navigate = useNavigate()
  const [selectedOption, setSelectedOption] = useState('All Products');
  const [dropdownClosed, setDropdownClosed] = useState(true)
  const [message, setMessage] = useState('')
  const [productsList, setProductsList] = useState([])

  useEffect(() => {
    if (category) {
      category === 'all' ? setSelectedOption('All Products') : setSelectedOption(category.charAt(0).toUpperCase() + category.slice(1));
    } else {
      setSelectedOption('All Products');
    }
  }, [category])

  useEffect(() => {
    const loadProducts = async () => {
      if (category === 'all') {
        // Perform fetch all products
        try {
          const response = await axios.get('http://127.0.0.1:5000/product/all')
          console.log("Response - allproducts: ", response.data)
          setProductsList(response.data.products)
          setMessage(response.data.message)
        } catch (e) {
          console.error("Error fetching products: ", e)
        }
      } else {
        // Perform fetch products by category
        try {
          const response = await axios.post('http://127.0.0.1:5000/product/category', {
            'category': category
          })
          console.log(response.data.message)
          console.log("Response - bycategory: ", response.data)
          setProductsList(response.data.products)
          setMessage(response.data.message)
        } catch (e) {
          console.error(e.message)
        }
      }
    }
    loadProducts()
  }, [category])

  const handleSelectOption = (urlValue, textValue) => {
    setSelectedOption(textValue)
    setDropdownClosed(true)
    navigate(`/products/${urlValue}`)
    console.info("category", category)
  }


  return (
    <div className='w-full h-full'>
      <header className='sticky top-0 h-auto w-full'>
        <Navbar />
      </header>
      <main className='w-full h-auto '>
        {/* hero section */}
        <section
          style={{
            height: '55vh',
            backgroundImage: 'url(https://images.unsplash.com/photo-1636013606408-efc3191dc09e?q=80&w=2784&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
          }}
          className='w-full bg-gray-600 flex items-end justify-end'
        >
          {/* Dropdown */}
          <div style={{ marginRight: '10vw' }} className="z-10 min-w-[400px] max-w-[400px] min-h-[240px] max-h-[240px] flex flex-col poppins-medium text-softWhite mb-10">
            <button
              type="button"
              onClick={() => setDropdownClosed(!dropdownClosed)}
              className="inline-flex justify-between w-full h-auto px-4 py-4 text-md max-h-[65px]"
              style={{
                borderTop: dropdownClosed ? 'solid white' : '',
                borderBottom: dropdownClosed ? 'solid white' : '',
                color: dropdownClosed ? '#fff' : '#212121',
                backgroundColor: dropdownClosed ? 'transparent' : '#fff',
                borderRadius: dropdownClosed ? '0' : '0.375rem 0.375rem 0 0'
              }}
            >
              {selectedOption ? selectedOption : 'All Products'}
              {/* Down arrow */}
              <svg
                className={`w-5 h-5 ml-2 transition-transform ${dropdownClosed ? 'rotate-180' : ''}`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.707a1 1 0 011.414 0L10 10.586l3.293-2.879a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {/* Dropdown options */}
            <ul
              style={{
                display: dropdownClosed ? 'none' : 'block',
                borderRadius: '0 0 0.375rem 0.375rem'
              }}
              className="w-auto bg-white border-t border-t-softBlack"
            >
              <Filter handleSelectOption={handleSelectOption} urlValue={'all'} textValue={'All Products'} />
              <Filter handleSelectOption={handleSelectOption} urlValue={'accessories'} textValue={'Accessories'} />
              <Filter handleSelectOption={handleSelectOption} urlValue={'clothing'} textValue={'Clothing'} />
              <Filter handleSelectOption={handleSelectOption} urlValue={'utensils'} textValue={'Utensils'} />
            </ul>
          </div>
        </section>
        <section className='p-12 w-full'>
          {/* {category ? category : 'All Products'} */}
          <h1 className='text-9xl roboto-slab-bold mb-14'>
            {selectedOption}
          </h1>
          <section className='w-full max-w-[100vw] h-auto flex items-center justify-center'>
            <div className='grid grid-cols-3 gap-5'>
              {/* Map the products */}
              {productsList.map((product) => (
                <Card product={product} key={product.product_id} />
              ))}
            </div>
          </section>
        </section>
      </main>
    </div>
  )
}

export default Products