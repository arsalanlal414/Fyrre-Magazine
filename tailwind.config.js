/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', 
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#ffff', // Light mode primary
          dark: '#000000',  // Dark mode primary
        },
        secondary: {
          light: '#fbbf24', // Light mode secondary
          dark: '#f59e0b',  // Dark mode secondary
        },
        background: {
          light: '#ffffff', // Light mode background
          dark: '#1f2937',  // Dark mode background (Dark Gray)
        },
        text: {
          light: '#000000', // Light mode text (black)
          dark: '#f9fafb',  // Dark mode text (white)
        },
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'], // Add General Sans
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': {
            transform: 'translateX(100%)',
          },
          '100%': {
            transform: 'translateX(-100%)',
          },
        },
      },
      screens: {
        'extra-sm': '300px'
      },
      fontSize: {
        'x8xl': ['104px', {
            lineHeight: '7rem',
          }
        ],
        'x7xl': ['80px', {
            lineHeight: '88px',
          }
        ],
      },
      maxWidth: {
        '112': '28rem',
      }
    },
  },
  plugins: [],
}
