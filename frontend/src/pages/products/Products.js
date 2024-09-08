import React, { useState, useEffect } from 'react'
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


  return (
    <>
      <header>
        <Navbar />
      </header>
    </>
  )
}

export default Products