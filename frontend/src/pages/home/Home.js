import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Hero from './Hero'
import Products from './Products'
import Footer from '../../components/footer/Footer'


const Home = ({ userData, loginStatus, setLoginStatus }) => {
  return (
    <div className='bg-softWhite h-auto flex flex-col'>
      <Navbar username={userData.username} loginStatus={loginStatus} setLoginStatus={setLoginStatus} />
      <main className='h-max'>
        <Hero />
        <Products />
        <Footer />
      </main>
    </div>
  )
}

export default Home