import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Hero from './Hero'
import Products from './Products'
import Introduction from './Introduction'
import Footer from '../../components/footer/Footer'


const Home = ({ userData, loginStatus, setLoginStatus }) => {
  return (
    <div className='bg-softWhite h-auto flex flex-col'>
      <Navbar username={userData.username} loginStatus={loginStatus} setLoginStatus={setLoginStatus} />
      <main className='h-max'>
        <Hero />
        <Products />
        <Introduction />
        <Footer />
      </main>
    </div>
  )
}

export default Home