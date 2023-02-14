/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  darkMode: "class",
  theme: {
    screens: {
      md: "820px",
      xl: "1280px",
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
      gridTemplateColumns: {
        // Simple 16 column grid
        "3fr": "repeat(3, minmax(min-content, 1fr))",
      },
      content: {
        "arrow-content": "url('./images/up-right-dark.svg')",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "minus-icon": "url('./images/minus.svg')",
        "plus-icon": "url('./images/plus.svg')",
        showreel: "url('./images/cases/showreel.jpg')",
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
        middleGrey: "#919191",
        lightRed: "#ff445e",
        darkGrey: "#474747",
        activeRed: "#dc2d45",
        gradientMain: "#FF304D",
        link: "#4B73FF",
        linkActive: "#86A1FF",
        formBg: "#EEEEEE",
        formBgDark: "#202020",
        dynamicBg: "#FF304DB2",
        langBg: "#262626",
      },
    },
  },
  plugins: [],
};
