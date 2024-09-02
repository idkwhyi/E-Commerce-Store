import React from 'react'
import CategoryProduct from '../../components/list/CategoryProduct'
import Carousel from '../../components/carousel/Carousel'
import { Link } from "react-router-dom"

const Products = () => {

  const carouselImages = [
    "https://images.unsplash.com/photo-1615290144628-8fa0f0d61658?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // cloth bag
    "https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // shirt
    "https://plus.unsplash.com/premium_photo-1715959420730-de9456ad726d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // lot of utensils
    "https://images.unsplash.com/photo-1589365278144-c9e705f843ba?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // bottle
    "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // papper bag
    "https://images.unsplash.com/photo-1616172912573-ed615bc0a14b?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // candle
  ]
  return (
    <section className='poppins-regular px-16 py-36 bg-softWhite'>
      <div className='w-full flex justify-between items-center mb-24'>
        <div className='poppins-medium text-3xl '>
          Products
        </div>
        <Link className='poppins-medium underline text-lg mr-20' to='/'>
          View All
        </Link>
      </div>
      <div style={{ height: '160vh' }} className='w-full'>
        <div style={{ maxHeight: '100vh' }} className='w-full h-full flex'>
          <div
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1557687790-902ede7ab58c?q=80&w=2800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className='w-3/5 flex items-center justify-center'
          >
            <div
              className='p-5 rounded-lg bg-white'
            >
              <p className='roboto-slab-bold text-7xl text-center'
                style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1557687790-902ede7ab58c?q=80&w=2800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}>
                ECO FRIENDLY<br /> PRODUCTS
              </p>
            </div>
          </div>
          <div className='poppins-regular w-2/5 h-full text-lg p-5 pt-0 pb-0 flex flex-col items-start justify-between'>
            <Carousel images={carouselImages} />
            <div>
              <h3 className='roboto-slab-bold text-5xl py-3'>PRODUCT CATEGORIES</h3>
              <p className='text-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam at iusto voluptatum labore, repellendus ipsa cum eligendi eum temporibus in officia esse beatae nisi! Aliquam, laboriosam! Dolor non voluptatum animi.</p>
            </div>
          </div>
        </div>
        <div className='w-full h-max px-0 py-10'>
          <ul className='w-full flex'>
            <CategoryProduct
              categoryName={'ACCESSORIES'}
              description={"Elevate your style with accessories that do more than just look good. Each piece is thoughtfully crafted from sustainable materials, blending fashion with a commitment to the planet. Wear your values with pride, knowing that every detail reflects a dedication."}
              productCount={'10'}
            />
            <CategoryProduct
              categoryName={'CLOTHING'}
              description={"Step into a wardrobe where style and sustainability coexist. Our eco-friendly clothing is designed with the Earth in mind, using organic fabrics and ethical practices to create timeless pieces. Each garment tells a story of care—for the environment."}
              productCount={'30'}
            />
            <CategoryProduct
              categoryName={'UTENSILS'}
              description={"Redefine your kitchen essentials with utensils that are as kind to the Earth as they are to your home. Crafted from sustainable materials, our eco-friendly utensils are designed to last, reducing waste and making every meal more mindful."}
            />
          </ul>
        </div>
      </div>
    </section >
  )
}

export default Products