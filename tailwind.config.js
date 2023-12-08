/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        xs: ['12px', '16px'],
        sm: ['14px', '20px'],
        base: ['16px', '19.5px'],
        lg: ['18px', '21.94px'],
        xl: ['20px', '24.38px'],
        '2xl': ['24px', '29.26px'],
        '3xl': ['28px', '50px'],
        '4xl': ['48px', '58px'],
        '8xl': ['96px', '106px']
      },
      screens: {
        "wide": "1440px"
      },
      fontFamily: {
        Righteous: ['Righteous', 'font-sans'],
        Outfit: ['Outfit', 'font-sans'],
        Recursive: ['Recursive', 'font-sans'],
      },
      colors: {
        'primary': "#FFFFFF",
        "pur-pule": "#7303c0",
        "pink-new": "#ec38bc",
        "slate-white": "#fdeff9",
        "end-sheet": "#03001e",
        "white-400": "rgba(255, 255, 255, 0.80)"
      },
    },
  },
  plugins: [
    
  ],
}

