/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Indian flag colors
        saffron: '#FF9933',
        'green-india': '#138808',
        'navy-blue': '#000080',
        
        // Indian market specific colors
        'rupee-gold': '#FFD700',
        'festival-red': '#DC143C',
        'monsoon-blue': '#4682B4',
        'spice-orange': '#FF6347',
        'temple-yellow': '#FFFF00',
        
        // Brand colors for Indian market
        primary: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          900: '#9a3412',
        }
      },
      fontFamily: {
        'hindi': ['Noto Sans Devanagari', 'sans-serif'],
        'bengali': ['Noto Sans Bengali', 'sans-serif'],
        'tamil': ['Noto Sans Tamil', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s infinite',
      }
    },
  },
  plugins: [],
}