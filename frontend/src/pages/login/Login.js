import React, { useState } from 'react'
import logo from '../../assets/image/Logo.png'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useUser } from '../../context/UserContext'
import { DecodeJWT } from '../../utils/DecodeJWT'

const Login = () => {

  const navigate = useNavigate()
  const [userData, setUserData] = useState({
    'username': '',
    'password': ''
  })
  const [message, setMessage] = useState('')
  const { setUser, setLoginStatus } = useUser()

  const handleInputUserData = (e) => {
    const { name, value } = e.target
    setUserData(prevUserData => ({
      ...prevUserData,
      [name]: value
    }))
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.post('http://127.0.0.1:5000/auth/login', {
        'username': userData.username,
        'password': userData.password
      })

      const token = response.data.access_token
      console.info(token)

      localStorage.setItem('token', token)

      const userInfo = DecodeJWT()

      if (userInfo) {
        setUser({
          'id': userInfo.id,
          'roles': userInfo.rls
        })
        console.log('user info: ', userInfo)
      }

      try {
        // Fetch additional user data using the decoded ID
        const userResponse = await axios.post('http://127.0.0.1:5000/user/userData', {
          'id': userInfo.id
        });

        if (userResponse && userResponse.status === 200) {
          const { username, email, address, phone } = userResponse.data;

          setUser(prevUser => ({
            ...prevUser,
            'username': username,
            'email': email,
            'address': address,
            'phone': phone
          }));

        } else {
          console.error('Failed to fetch user data:', userResponse.data.message);
        }
      } catch (userError) {
        console.error('Error fetching user data:', userError.message);
      }

      setLoginStatus(true)

      setMessage(response.data.message)
      console.info(message)

      navigate('/')
    } catch (error) {
      console.error(error.response.data.message)
    }
  }


  return (
    <main className='w-svw h-svh flex bg-gray-200 items-center justify-center poppins-regular'>
      <div className='w-3/4 h-4/6 bg-softWhite text-deepCharcoal flex items-center justify-center rounded-3xl p-5'>
        <section className="w-full h-max lg:full">
          <div className="container w-full px-6 py-12 mx-auto lg:py-32">
            <div className="lg:flex w-full gap-2">
              {/* image and some heading text */}
              <div className="lg:w-1/2">

                {/* image */}
                <div className='p-2 py-3 bg-fernGreen rounded-md w-32'>
                  <img className="object-cover" src={logo} alt="Native" onClick={() => { navigate('/') }} />
                </div>

                <h1 className="mt-4 text-gray-600 md:text-lg">Welcome back</h1>

                <h1 className="hidden lg:block mt-4 text-2xl font-medium text-gray-800 capitalize lg:text-3xl">
                  login to your account
                </h1>
                <div className='poppins-regular mt-3 text-mutedBlue'>Dont have an account?
                  <Link to='/register' className='hover:underline'> Create new account here.</Link>
                </div>
              </div>

              <div className="mt-8 lg:w-1/2 lg:mt-0">
                <form
                  className="w-full lg:max-w-xl"
                  onSubmit={handleFormSubmit}
                >
                  <div className="relative flex items-center mt-8">
                    <span className="absolute">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-coolGray" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </span>

                    {/* username input field */}
                    <input
                      type="text"
                      className="block w-full py-3 text-deepCharcoal bg-white border rounded-lg px-11 focus:border-fernGreen_400 focus:ring-fernGreen_300 focus:outline-none focus:ring focus:ring-opacity-40"
                      placeholder="Username"
                      name='username'
                      onChange={handleInputUserData}
                      value={userData.username}
                    />
                  </div>

                  <div className="relative flex items-center mt-4">
                    <span className="absolute">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-coolGray" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </span>

                    {/* password input field */}
                    <input
                      type="password"
                      className="block w-full py-3 text-deepCharcoal bg-white border rounded-lg px-11 focus:border-fernGreen_400 focus:ring-fernGreen_300 focus:outline-none focus:ring focus:ring-opacity-40"
                      placeholder="Password"
                      name='password'
                      onChange={handleInputUserData}
                      value={userData.password}
                    />
                  </div>

                  <div className="mt-2 md:flex md:items-center flex-col">
                    <Link to="/forgot_password" className="w-full inline-block mb-2 text-right text-mutedBlue md:mt-0 md:mx-6 hover:underline">
                      Forgot password?
                    </Link>
                    <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-100 transform bg-fernGreen rounded-lg md:w-full hover:bg-gray-500 focus:outline-none focus:ring focus:ring-fernGreen focus:ring-opacity-50">
                      Sign in
                    </button>
                  </div>
                </form>
                {message && <p>{message}</p>}
              </div>
            </div>
            <div className="mt-8 md:mt-24 sm:flex sm:items-center">
            </div>
          </div>
        </section>
      </div >
    </main >
  )
}

export default Login