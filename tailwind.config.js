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

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",

        showreel: "url('./images/cases/showreel.jpg')",
      },
      fontFamily: {
        montserrat: ["Montserrat"],
      },
      colors: {
        main: "#FF304D",
        light: "#F8F8F8",
        dark: "#171717",
        grey: "#323232",
        lightGrey: "#E0E0E0",
        lightDarkGrey: "#909090",
        middleGrey: "#909090",
        lightRed: "#FF445E",
        darkGrey: "#474747",
        activeRed: "#DC2D45",

        link: "#4B73FF",
        linkActive: "#86A1FF",
        formBg: "#EEEEEE",
        formBgDark: "#202020",
        dynamicBg: "#FF304DB2",
        langBg: "#262626",

        bgColorBtnForm: "#535353",
        mainTextBlue: "#6355ff",
      },
      animation: {
        marquee: "marquee 25s linear infinite",
        marquee2: "marquee2 25s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
