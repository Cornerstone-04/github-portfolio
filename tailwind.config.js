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
        btn: "#030081",
        "btn-hover": "#171495"
      },
      backgroundImage: {
        author: "url('./src/assets/images/Cornerstone.jpg')",
        noise: "url('./src/assets/images/noise.jpg')"
      },
    },
  },
  plugins: [],
};
