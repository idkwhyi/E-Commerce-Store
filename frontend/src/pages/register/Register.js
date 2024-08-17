import React from 'react'

const Register = () => {
  return (
    <main className='poppins-regular'>
      <section class="bg-softWhite">
        <div class="flex justify-center min-h-screen">
          <div class="hidden bg-cover lg:block lg:w-2/5 bg-fernGreen object-cover ">
            <img src='https://images.pexels.com/photos/7728321/pexels-photo-7728321.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='Images' className='h-full object-cover' />
          </div>

          <div class="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
            <div class="w-full">
              <h1 class="text-2xl font-semibold tracking-wider text-gray-800 capitalize ">
                Register your account here!
              </h1>

              <p class="mt-4 text-gray-500">
                Let’s get you all set up so you can verify your personal account and begin setting up your profile.
              </p>


              <form class="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
                <div>
                  <label class="block mb-2 text-sm text-gray-600">Username</label>
                  <input type="text" placeholder="John" class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-fernGreen focus:ring-fernGreen focus:outline-none focus:ring focus:ring-opacity-40" />
                </div>

                <div>
                  <label class="block mb-2 text-sm text-gray-600">Phone number</label>
                  <input type="text" placeholder="John" class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-fernGreen focus:ring-fernGreen focus:outline-none focus:ring focus:ring-opacity-40" />
                </div>

                <div>
                  <label class="block mb-2 text-sm text-gray-600">Address</label>
                  <input type="text" placeholder="John" class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-fernGreen focus:ring-fernGreen focus:outline-none focus:ring focus:ring-opacity-40" />
                </div>

                <div>
                  <label class="block mb-2 text-sm text-gray-600">Email address</label>
                  <input type="text" placeholder="John" class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-fernGreen focus:ring-fernGreen focus:outline-none focus:ring focus:ring-opacity-40" />
                </div>

                <div>
                  <label class="block mb-2 text-sm text-gray-600">Password</label>
                  <input type="text" placeholder="John" class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-fernGreen focus:ring-fernGreen focus:outline-none focus:ring focus:ring-opacity-40" />
                </div>

                <div>
                  <label class="block mb-2 text-sm text-gray-600">Confirm password</label>
                  <input type="text" placeholder="John" class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-fernGreen focus:ring-fernGreen focus:outline-none focus:ring focus:ring-opacity-40" />
                </div>

                <button
                  class="flex items-center justify-between w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-fernGreen rounded-lg hover:bg-coolGray focus:outline-none focus:ring focus:ring-fernGreen focus:ring-opacity-50">
                  <span>Sign Up </span>

                  <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 rtl:-scale-x-100" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clip-rule="evenodd" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Register