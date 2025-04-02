/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],  // Add Poppins as a font family
        righteous: ['Righteous', 'sans-serif'],
      },
      boxShadow: {
        'custom1': '4px 2px 0px rgba(15, 198, 215, 0.7)',
        'custom2': '-4px 2px 0px rgba(15, 198, 215, 0.7)', 

        'custom3': '4px 2px 2px rgba(15, 198, 215, 0.7), -4px -2px 2px rgba(15, 198, 215, 0.7)',
        'custom4': '4px 2px 0px rgba(215, 15, 15, 0.7)',
        'custom5': '4px 2px 0px rgba(235, 110, 14, 0.7)',
        'custom6': '4px 2px 0px rgba( 3,102,132, 0.7)',
        'custom7': '4px 2px 0px rgba(  9,44,72, 0.7)', 
      },
      animation: {
        fadeIn: 'fadeIn 5s ease-in forwards',
        slideUp: 'slideUp 0.5s ease-in',
        reveal: 'reveal 3s ease-in forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '25%': { transform: 'translateY(75%)', opacity: '0.25' },
          '50%': { transform: 'translateY(50%)', opacity: '0.5' },
          '75%': { transform: 'translateY(25%)', opacity: '0.75' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        reveal: {
          '0%': {
            opacity: '0',
            transform: 'translateX(10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
      },  
     
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}

