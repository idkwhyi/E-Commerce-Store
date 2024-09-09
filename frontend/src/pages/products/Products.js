import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Navbar from '../../components/navbar/Navbar'

const Products = () => {

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5000/product/all')
        console.log(response.data)
      } catch (e) {
        console.error("Error fetching products: ", e)
      }
    }
    loadProducts()
  }, [])

  const [selectedOption, setSelectedOption] = useState('');
  const [dropdownClosed, setDropdownClosed] = useState('false')
  const dropdownOptions = ['All Products', 'Accessories', 'Clothing', 'Utensils']

  const handleSelectOption = (option) => {
    setSelectedOption(option)
    setDropdownClosed(true)
  }


  return (
    <div className='w-full h-full'>
      <header className='sticky top-0 h-auto w-full'>
        <Navbar />
      </header>
      <main className='w-full h-auto bg-red-300'>
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
          <div style={{ marginRight: '10vw' }} className="z-10 min-w-[400px] max-w-[400px] min-h-[235px] flex flex-col poppins-medium text-softWhite mb-10">
            <button
              type="button"
              onClick={() => setDropdownClosed(!dropdownClosed)}
              className="inline-flex justify-between w-full h-auto px-4 py-4 text-md border-y border-y-white max-h-[65px]"
              style={{
                borderBottom: dropdownClosed ? 'solid white' : '1px solid #212121',
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
              className="w-auto bg-white"
            >
              {dropdownOptions.map((option, index) => (
                <li
                  key={index}
                  className="w-full h-auto px-4 py-3 text-md min-w-[400px] max-h-[65px] text-softBlack cursor-pointer hover:bg-gray-100 text-sm rounded-md"
                  onClick={() => handleSelectOption(option)}
                >
                  {option}
                </li>
              ))}
            </ul>
          </div>
        </section>

      </main>
    </div>
  )
}

export default Products