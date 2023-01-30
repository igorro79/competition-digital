/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  darkMode: "class",
  theme: {
    screens: {
      smOnly: { max: "819.98px" },
      sm: "360px",
      mdOnly: { min: "820px", max: "1919.98px" },
      md: "820px",
      xl: "1920px",
      notXl: { max: "1919.98px" },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "20px",
        md: "30px",
        xl: "135px",
      },
    },

    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "double-quotes": "url('../images/double-quote.svg')",
      },
      fontFamily: {
        montserrat: ["Montserrat"],
      },
      colors: {
        main: "#ff304d",
        light: "#f8f8f8",
        dark: "#171717",
        grey: "#323232",
        lightGrey: "#e0e0e0",
        middleGrey: "#909090",
        lightRed: "#ff445e",
        darkGrey: "#474747",
        activeRed: "#dc2d45",
        gradientMain: "#FF304D",
      },
    },
  },
  plugins: [],
};
