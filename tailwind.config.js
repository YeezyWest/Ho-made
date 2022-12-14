/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","index.html","product.html","about.html","contact.html"],
  theme: {
    extend: {},
    fontFamily: {
      Raleway: ["Raleway, sans-serif"]
    },
    container: {
      center: true,
      padding: "1rem",
      screens:{
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      },
    },
  },
  plugins: [],
}