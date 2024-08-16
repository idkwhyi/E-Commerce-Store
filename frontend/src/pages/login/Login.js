import React from 'react'
import logo from '../../assets/image/Logo.png'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <main className='w-svw h-svh flex bg-gray-300 items-center justify-center poppins-regular'>
      <div className='w-3/4 h-4/6 bg-softWhite text-deepCharcoal flex items-center justify-center rounded-3xl p-5'>
        <section class="w-full h-full">
          <div class="container px-6 py-24 mx-auto lg:py-32">
            <div class="lg:flex">
              <div class="lg:w-1/2">
                <div className='p-2 py-3 bg-fernGreen rounded-md w-32'>
                  <img class="object-cover" src={logo} alt="Native" />
                </div>

                <h1 class="mt-4 text-gray-600 md:text-lg">Welcome back</h1>

                <h1 class="mt-4 text-2xl font-medium text-gray-800 capitalize lg:text-3xl">
                  login to your account
                </h1>
                <div className='poppins-regular mt-3 text-mutedBlue'>Dont have an account? <Link to='/register' className='hover:underline'>Create new account here.</Link></div>
              </div>

              <div class="mt-8 lg:w-1/2 lg:mt-0">
                <form class="w-full lg:max-w-xl">
                  <div class="relative flex items-center">
                    <span class="absolute">
                      <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-3 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </span>

                    <input type="email" class="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 focus:border-coolGray focus:ring-fernGreen focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Email address" />
                  </div>

                  <div class="relative flex items-center mt-4">
                    <span class="absolute">
                      <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-3 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </span>

                    <input type="password" class="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 focus:border-coolGray focus:ring-fernGreen focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Password" />
                  </div>

                  <div class="mt-8 md:flex md:items-center">
                    <button class="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-100 transform bg-fernGreen rounded-lg md:w-1/2 hover:bg-gray-500 focus:outline-none focus:ring focus:ring-fernGreen focus:ring-opacity-50">
                      Sign in
                    </button>

                    <Link to="#" class="inline-block mt-4 text-center text-mutedBlue md:mt-0 md:mx-6 hover:underline">
                      Forgot your password?
                    </Link>
                  </div>
                </form>
              </div>
            </div>

            <div class="mt-8 md:mt-24 sm:flex sm:items-center">


            </div>
          </div>
        </section>
      </div >
    </main >
  )
}

export default Login