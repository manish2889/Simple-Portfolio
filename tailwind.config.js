/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0a192f',
        secondary: '#112240',
        tertiary: '#233554',
        quaternary: '#112240',
        highlight: '#64ffda',
        textPrimary: '#ccd6f6',
        textSecondary: '#8892b0',
        muted: '#233554',
        card: '#112240',
      },
      boxShadow: {
        'card': '0 10px 30px -15px rgba(2,12,27,0.7)',
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
} 