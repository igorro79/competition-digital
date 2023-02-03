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
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain",
      24: "24px",
      20: "20px",
      16: "16px",
    },
    extend: {
      transitionProperty: {
        height: "max-height",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "double-quotes": "url('./images/double-quote.svg')",
        "white-arrow": "url('./images/up-right-white.svg')",
        "dark-arrow": "url('./images/up-right-dark.svg')",
        "minus-icon": "url('./images/faq/minus.svg')",
        "plus-icon": "url('./images/faq/plus.svg')",
        "clip-icon": "url('./images/form/clip.svg')",
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
        link: "#6355FF",
      },
    },
  },
  plugins: [],
};
