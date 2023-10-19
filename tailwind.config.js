/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        clash: ["Clash Display", "sans-serif"],
      },
      colors: {
        primary: "#030081",
        dark: "#181818",
        text: "#DDDDDD",
        link: "#2622FF",
      },
      backgroundImage: {
        author: "url('./src/assets/images/Cornerstone.jpg')",
      },
    },
  },
  plugins: [],
};
