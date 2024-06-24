/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        screens: {
            'xs': '300px', // Custom extra small breakpoint
          },
        backgroundImage: {
            'custom-gradient': 'linear-gradient(180deg, rgba(45, 112, 125, 0.73) 0%, #163e92 100%)',
            'light-gray': 'hsl(212, 45%, 89%)',
          },
    },
  },
  plugins: [],
}

