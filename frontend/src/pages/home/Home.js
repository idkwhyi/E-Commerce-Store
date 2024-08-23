import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Hero from './Hero'


const Home = ({ userData, loginStatus, setLoginStatus }) => {
  return (
    <div className='bg-softWhite h-auto flex flex-col'>
      <Navbar username={userData.username} loginStatus={loginStatus} setLoginStatus={setLoginStatus} />
      <main className=' h-screen'>
        <Hero/>
      </main>
    </div>
  )
}

export default Home