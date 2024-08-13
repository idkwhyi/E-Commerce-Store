/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        softWhite: '#F8F9FA', // background color
        coolGray: '#ADB5BD', // suble text and border element
        mutedBlue: '#6C757D', // accent color for button and link
        freshMint: '#20C997', // pop color for CTA elements
        fernGreen: '#527853', // second accent color
        deepCharcoal: '#343A40', // main text and strong contras element
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

