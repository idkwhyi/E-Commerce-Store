import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import CardContainer from '../../components/itemCard/CardContainer'


const Home = ({ userData, loginStatus, setLoginStatus }) => {
  return (
    <div className='bg-softWhite h-auto flex flex-col'>
      <Navbar username={userData.username} loginStatus={loginStatus} setLoginStatus={setLoginStatus} />
      <main className='pt-14 h-screen'>
        
        <section>
          <CardContainer/>
        </section>
      </main>
    </div>
  )
}

export default Home