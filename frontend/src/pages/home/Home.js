import React from 'react'
import Navbar from '../../components/navbar/Navbar'

const Home = ({ userData }) => {
  return (
    <div className='bg-mutedBlue h-auto flex flex-col'>
      <Navbar username={userData.username} />
      <main className='pt-14 h-screen'>
        {userData ? `username: ${userData.username}` : 'None'}
      </main>
    </div>
  )
}

export default Home