/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        neutral: "#E7E7E7",
        neutralTwo: "#A1A1A1",
        textBlack: "#000F24",
        textBlueVariant: "#AAC4E6",
        primary: "#004DB3",
        secondary: "#F5F5F5",
        secondary_two: "#d9d9d9",
        bgWhite: "#FFFFF",
        bgNeutral: "#F8F9FC",
        bgLightBlue: "#CCDBF0",
        bgDark: "#000F24",
        bgInput: "#2A2A2B",
        borderColorOne: "#5588CC",
        bgBoxOne: "rgba(89, 120, 207, 0.2)",
        bgBoxTwo: "rgba(146, 105, 205, 0.2)",
        bgBoxThree: "rgba(247, 158, 142, 0.2)",
        bgBoxFour: "rgba(63, 169, 106, 0.2)",
        bgBoxFive: "#AECD5E",
        bgBoxSix: "#4C7FBD",
        bgBoxSeven: "#ED6BA6",
        bgBoxEight: "#EA6B45",
      },
    },
    fontFamily: {
      satoshi: ["Satoshi", "sans-serif"],
      clashDisplay: ["ClashDisplay", "sans-serif"],
    },
    container: {
      padding: "1rem",
      center: true,
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1400px",
      xxl: "1700px",
    },
  },
  plugins: [],
};
