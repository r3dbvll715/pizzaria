/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pizza: {
          red: '#dc2626',
          darkred: '#991b1b',
          amber: '#f59e0b',
          gold: '#eab308',
          basil: '#15803d',
          cream: '#fffbeb',
          dark: '#0c0f17',
          charcoal: '#181e2b'
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'glow-red': '0 0 30px -5px rgba(220, 38, 38, 0.3)',
        'glow-amber': '0 0 30px -5px rgba(245, 158, 11, 0.25)',
      }
    },
  },
  plugins: [],
}
