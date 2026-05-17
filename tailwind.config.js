/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-bg': '#13110E',
        'brand-card': '#171311',
        'brand-primary': '#E7DFD2',
        'brand-secondary': '#A79E93',
        'brand-accent': '#B79A6A',
        'brand-mineral': '#CFC2B1',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'serif'],
      },
    },
  },
  plugins: [],
}
