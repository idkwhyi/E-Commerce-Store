import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Hero from './Hero'
import Products from './Products'
// import Introduction from './Introduction'
import Footer from '../../components/footer/Footer'


const Home = () => {
  return (
    <div className='bg-softWhite max-w-[100vw] overflow-hidden lg:w-screen h-auto flex flex-col'>
      <header className='sticky top-0'>
        <Navbar/>
      </header>
      <main className='h-max'>
        <Hero />
        <Products />
        {/* <Introduction /> */}
        <Footer />
      </main>
    </div>
  )
}

export default Home