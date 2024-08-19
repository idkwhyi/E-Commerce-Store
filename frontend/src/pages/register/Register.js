import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Register = () => {

  const navigate = useNavigate()
  const [message, setMessage] = useState('')
  const [userData, setUserData] = useState({
    'username': '',
    'email': '',
    'password': '',
    'address': '',
    'phone': ''
  })
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleInputUserData = (e) => {
    const {name, value} = e.target
    setUserData(prevUserData => ({
      ...prevUserData,
      [name]: value
    }))
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    if(confirmPassword === userData.password){
      try { 
        const response = await axios.post('http://127.0.0.1:5000/auth/register', {
          'username': userData.username,
          'email': userData.email,
          'password': userData.password,
          'address': userData.address,
          'phone': userData.phone
        });
        setMessage(response.data.message)
        console.log('Message:', message)
        navigate('/login')
      } catch (error) {
        console.error(error.response.data.message)
      }
    } else {
      setMessage("Password doesn't match")
    }
  }

  return (
    <main className='poppins-regular'>
      <section className="bg-softWhite">
        <div className="flex justify-center min-h-screen">
          <div className="hidden bg-cover lg:block lg:w-2/5 bg-fernGreen object-cover ">
            <img src='https://images.pexels.com/photos/7728321/pexels-photo-7728321.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='Images' className='h-full object-cover' />
          </div>

          <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
            <div className="w-full">
              <h1 className="text-2xl font-semibold tracking-wider text-gray-800 capitalize ">
                Register your account here!
              </h1>

              <p className="mt-4 text-gray-500">
                Let’s get you all set up so you can verify your personal account and begin setting up your profile.
              </p>


              <form className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2" onSubmit={handleFormSubmit}>

                {/* input username */}
                <div>
                  <label className="block mb-2 text-sm text-gray-600">Username</label>
                  <input 
                    type="text" 
                    placeholder="Your username" 
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-fernGreen focus:ring-fernGreen focus:outline-none focus:ring focus:ring-opacity-40" 
                    name='username'
                    onChange={handleInputUserData}
                    value={userData.username}
                  />
                </div>

                {/* input phone number */}
                <div>
                  <label className="block mb-2 text-sm text-gray-600">Phone number</label>
                  <input 
                    type="text" 
                    placeholder="080000000000" 
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-fernGreen focus:ring-fernGreen focus:outline-none focus:ring focus:ring-opacity-40" 
                    name='phone'
                    onChange={handleInputUserData}
                    value={userData.phone}
                  />
                </div>

                {/* input address */}
                <div>
                  <label className="block mb-2 text-sm text-gray-600">Address</label>
                  <input 
                    type="text" 
                    placeholder="Your address" 
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-fernGreen focus:ring-fernGreen focus:outline-none focus:ring focus:ring-opacity-40" 
                    name='address'
                    onChange={handleInputUserData}
                    value={userData.address}
                  />
                </div>

                {/* input email */}
                <div>
                  <label className="block mb-2 text-sm text-gray-600">Email address</label>
                  <input 
                    type="text" 
                    placeholder="example@gmail.com" 
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-fernGreen focus:ring-fernGreen focus:outline-none focus:ring focus:ring-opacity-40" 
                    name='email'
                    onChange={handleInputUserData}
                    value={userData.email}
                  />
                </div>

                {/* input password */}
                <div>
                  <label className="block mb-2 text-sm text-gray-600">Password</label>
                  <input 
                    type="text" 
                    placeholder="Enter a password" 
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-fernGreen focus:ring-fernGreen focus:outline-none focus:ring focus:ring-opacity-40" 
                    name='password'
                    onChange={handleInputUserData}
                    value={userData.password}
                  />
                </div>

                {/* input confirm password */}
                <div>
                  <label className="block mb-2 text-sm text-gray-600">Confirm password</label>
                  <input 
                    type="text" 
                    placeholder="Confirm your password" 
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-fernGreen focus:ring-fernGreen focus:outline-none focus:ring focus:ring-opacity-40" 
                    name='confirm_password'
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>

                <button
                  className="flex items-center justify-between w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-fernGreen rounded-lg hover:bg-coolGray focus:outline-none focus:ring focus:ring-fernGreen focus:ring-opacity-50">
                  <span>Sign Up </span>

                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 rtl:-scale-x-100" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd" />
                  </svg>
                </button>
              </form>
              {message && <p>{message}</p>}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Register