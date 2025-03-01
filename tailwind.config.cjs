/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0a192f',      // Dark navy blue
        secondary: '#112240',     // Slightly lighter navy
        tertiary: '#233554',      // Navy blue highlight
        quaternary: '#112240',     // Card background
        textPrimary: '#ccd6f6',   // Light slate
        textSecondary: '#8892b0',  // Slate
        background: '#0a192f',    // Dark navy blue
        highlight: '#64ffda',     // Mint highlight
        muted: '#233554',         // Muted navy
        card: '#112240',          // Card background
      },
      fontFamily: {
        'sans': ['Raleway', 'sans-serif'],
        'mono': ['Fira Code', 'monospace'],
      },
      boxShadow: {
        'card': '0 10px 30px -15px rgba(2,12,27,0.7)',
        'highlight': '0 0 25px rgba(100, 255, 218, 0.1)',
      },
      backgroundColor: {
        'navy-shadow': 'rgba(2,12,27,0.7)',
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'fade-in': 'fadeIn 0.5s ease-out',
        'bounce-slow': 'bounce 3s infinite',
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
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.6 },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        slideDown: {
          '0%': { transform: 'translateY(-100%)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      transitionTimingFunction: {
        'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
} 