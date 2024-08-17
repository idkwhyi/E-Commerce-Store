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
        deepCharcoal: '#343A40', // main text and strong contras element
        
        fernGreen_900: '#223224',
        fernGreen_800: '#293c2b',
        fernGreen_700: '#3d5e3f',
        fernGreen_600: '#3d5e3f',
        fernGreen: '#527853', // second accent color
        fernGreen_400: '#729572',
        fernGreen_300: '#9eb89d',
        fernGreen_200: '#c6d6c4',
        fernGreen_100: '#e3eae1'
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

