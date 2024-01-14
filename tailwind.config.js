/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        appleNavColor: '#424244',
        171616:"#171616"
        // Configure your color palette here
      }
    },
  },
  plugins: [],
}