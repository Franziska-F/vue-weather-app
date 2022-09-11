/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: { passing: "2rem", center: true },
    },
    sreens: {
      sm: "640px",
      md: "768px",
    },
  },
  plugins: [],
};
