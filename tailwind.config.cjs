/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        title: ["Clash Display", "sans-serif"],
        sans: ["Poppins", "sans-serif"],
      },
      lineHeight: {
        title: "100%",
        text: "180%",
      },
      transitionDuration: {
        400: "0.4s",
      },
    },
  },
  plugins: [],
};
