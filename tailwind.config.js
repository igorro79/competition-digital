/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./pages/**/*.html",
    "./index.html",
    "./**/*.html",
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "20px",
    },
    screens: {
      // sm: "360px",
      // //=> @media (min-width: 360px) { ... }

      sm: "570px",
      //=> @media (min-width: 360px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "820px",
      // => @media (min-width: 820px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "1xl": "1366px",
      // => @media (min-width: 1366px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }

      "3xl": "1920px",
      // => @media (min-width: 1920px) { ... }
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
      scale: {
        79: ".79",
        121: "1.21",
        126: "1.26",
        130: "1.30",
        175: "1.75",
      },
      padding: {
        "1/3": "33.33333%",
        "2/3": "66.66666%",
      },
      // aspectRatio: {
      //   '4/3': '4 / 3',
      // },
      backgroundSize: {
        "size-200": "200% 200%",
        "size-300": "300% 300%",
      },
      backgroundPosition: {
        "pos-0": "0% 100%",
        "pos-100": "100% 200%",
        "pos-200": "200% 300%",
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
        lightDarkGrey: "#909090",
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

        bgColorBtnForm: "#535353",
        mainTextBlue: "#6355ff",
        mainTextBlueHover: "#86A1FF",

        // ===colors-02=====
        bgColor: "#171717", //?
        // bgColorGrey: "#f8f8f8",
        // bgColorMenuTablet: "#ff304d",
        bgColorMain: "#ff304d", //?
        // bgColorBtnForm: "#535353",
        // bgDarkMode: '#3E3E3E',

        // ====== text ======
        mainTextWhite: "#ffffff",
        // mainTextLight: "#f8f8f8",
        mainTextLightGrey: "#919191",
        mainTextBlack: "#000000",
        mainTextDark: "#171717", //?
        mainTextRed: "#ff304d",
        // mainTextBlue: "#6355ff",
        mainTextBlueHeader: "#4B73FF",
        // mainTextBlueHover: "#86A1FF",

        // // ====== btn ======
        bgButtonMain: "#ff304d",
        bgButtonDarkGrey: "#474747",
        bgButtonGrey: "#f8f8f8",

        // ====== slider btn ======
        sliderButtonGrey: "#919191",
        sliderButtonActive: "#FF304D",

        // ====== border ======
        borderBottom: "#919191",
        borderBtn: "#ff304d",
        underlineRed: "#ff304d",
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
