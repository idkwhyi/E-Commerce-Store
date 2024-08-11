/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        softWhite: '#F8F9FA',
        coolGray: '#ADB5BD',
        mutedBlue: '#6C757D',
        freshMint: '#20C997',
        deepCharcoal: '#343A40',
      },
    },
  },
  plugins: [],
}

