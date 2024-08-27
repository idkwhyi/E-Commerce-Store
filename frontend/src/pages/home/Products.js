import React from 'react'

const Products = () => {
  return (
    <section className='poppins-regular px-16 py-36 bg-softWhite'>
      <div className='w-full flex justify-between items-center mb-5'>
        <div className='poppins-medium text-3xl '>
          Products
        </div>
        <div className='poppins-medium underline text-lg mr-20'>
          View All
        </div>
      </div>
      <div style={{ height: '100vh' }} className='w-full'>
        <div className='w-full h-full flex'>
          <div
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1557687790-902ede7ab58c?q=80&w=2800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className='w-3/5 flex items-center justify-center'
          >
            <div
              className='bg-softWhite p-5 rounded-lg'
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
          <div className='poppins-regular w-2/5 h-full text-lg p-5 pb-0 flex flex-col items-start justify-end'>
              <h3 className='roboto-slab-bold text-5xl py-3'>PRODUCT CATEGORIES</h3>
              <p className='text-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam at iusto voluptatum labore, repellendus ipsa cum eligendi eum temporibus in officia esse beatae nisi! Aliquam, laboriosam! Dolor non voluptatum animi.</p>
          </div>
        </div>
      </div>
    </section >
  )
}

export default Products