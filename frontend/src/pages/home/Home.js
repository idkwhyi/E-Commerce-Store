import React from 'react'
import Navbar from '../../components/navbar/Navbar'

const Home = () => {
  return (
    <div className='bg-mutedBlue h-auto flex flex-col'>
      <Navbar />
      <main className='pt-14 h-screen'>
        home
      </main>
    </div>
  )
}

export default Home