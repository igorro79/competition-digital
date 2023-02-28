/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [".src/**/*.{html,js}"],
  content: [".pages/**/*.html"],
  content: ["./index.html"],
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
      backgroundSize: {
        "size-200": "200% 200%",
      },
      backgroundPosition: {
        "pos-0": "0% 100%",
        "pos-100": "100% 200%",
      },
      transitionProperty: {
        height: "max-height",
      },
      gridTemplateColumns: {
        "3fr": "repeat(3, minmax(min-content, 1fr))",
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",

        showreel: "url('./images/cases/showreel.jpg')",
      },
      fontFamily: {
        montserrat: ["Montserrat"],
      },
      colors: {
        main: "#FF304D",
        light: "#f8f8f8",
        dark: "#171717",
        grey: "#323232",
        lightGrey: "#e0e0e0",
        middleGrey: "#919191",
        lightRed: "#ff445e",
        darkGrey: "#474747",
        activeRed: "#dc2d45",
        link: "#4B73FF",
        linkActive: "#86A1FF",
        formBg: "#EEEEEE",
        formBgDark: "#202020",
        dynamicBg: "#FF304DB2",
        langBg: "#262626",
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("tw-elements/dist/plugin"),
  ],
};
