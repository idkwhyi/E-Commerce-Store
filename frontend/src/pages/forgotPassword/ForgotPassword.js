import logo from '../../assets/image/Logo.png'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const ForgotPassword = () => {
  const navigate = useNavigate()
  const [userData, setUserData] = useState({
    'username': '',
    'email': '',
    'newPassword': '',
    'confirmPassword': ''
  })
  const [message, setMessage] = useState('')

  const handleInput = (e) => {
    const { name, value } = e.target
    setUserData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const changePassword = async (e) => {
    e.preventDefault()
    if (userData.newPassword === userData.confirmPassword) {
      try {
        const response = await axios.post('http://127.0.0.1:5000/auth/reset_password', {
          'username': userData.username,
          'email': userData.email,
          'newPassword': userData.newPassword
        })
        console.log('response message: ', response.data.message)
        setMessage(response.data.message)
        navigate('/login')
      } catch (e) {
          console.error(e.message)
      }
    } else {
      console.log('Password is not match')
    }
  }

  return (
    <main className="bg-gray-200  poppins-regular">

      <section>
        <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
          <form 
            className="w-full max-w-lg p-12 rounded-3xl border border-coolGray bg-softWhite shadow-md"
            onSubmit={changePassword}
          >

            {/* logo */}
            <div className='w-full flex items-center justify-center'>
              <img className="object-cover max-w-40 p-2 py-3 rounded-md bg-fernGreen" src={logo} alt="Native" />
            </div>

            <div className='w-full flex flex-col items-center justify-center py-5 '>
              <h1 className='text-3xl poppins-medium'>
                Reset Password
              </h1>
              <div>Reset your account password here! Enter your account information below.</div>
            </div>

            <div className="relative flex items-center mt-8">
              <span className="absolute">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-coolGray" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </span>

              <input
                type="text"
                className="block w-full py-3 text-deepCharcoal bg-softWhite border rounded-lg px-11 focus:border-fernGreen_400 focus:ring-fernGreen_300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Username"
                name='username'
                value={userData.username}
                onChange={handleInput}
              />
            </div>



            <div className="relative flex items-center mt-6">
              <span className="absolute">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-coolGray" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>

              <input
                type="email"
                className="block w-full py-3 text-deepCharcoal bg-softWhite border rounded-lg px-11 focus:border-fernGreen_400 focus:ring-fernGreen_300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Email address"
                name='email'
                value={userData.email}
                onChange={handleInput}
              />
            </div>

            <div className="relative flex items-center mt-4">
              <span className="absolute">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-coolGray" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </span>

              <input
                type="password"
                className="block w-full px-10 py-3 text-deepCharcoal bg-softWhite border rounded-lg focus:border-fernGreen_400 focus:ring-fernGreen_300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="New password"
                name='newPassword'
                value={userData.newPassword}
                onChange={handleInput}
              />
            </div>

            <div className="relative flex items-center mt-4">
              <span className="absolute">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-coolGray" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </span>

              <input
                type="password"
                className="block w-full px-10 py-3 text-deepCharcoal bg-softWhite border rounded-lg focus:border-fernGreen_400 focus:ring-fernGreen_300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Confirm Password"
                name='confirmPassword'
                value={userData.confirmPassword}
                onChange={handleInput}
              />
            </div>

            <div className="mt-6">
              <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-softWhite capitalize transition-colors duration-300 transform bg-fernGreen rounded-lg hover:bg-fernGreen_400 focus:outline-none focus:ring focus:ring-fernGreen_300 focus:ring-opacity-50"
              >
                Change Password
              </button>
            </div>
          </form>
        </div>
        {message && (<p>{message}</p>)}
      </section>
    </main>
  )
}

export default ForgotPassword