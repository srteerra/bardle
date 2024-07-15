/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        arena: "url('../../public/splash/bardleArena.jpg')",
      },
      cursor: {
        legacy: "url(/cursor.cur), default",
        legacyp: "url(/cursor.cur.png), pointer",
      },
      fontSize: {
        "2xs": "0.60rem",
      },
      colors: {
        primary: "#DBCC95",
        secondary: {
          DEFAULT: "#6A6C86",
          6: "#595A70",
          7: "#2B2A33",
        },
        accent: {
          1: "#F5E5D7", // Clear color
          2: "#CCBFB4", // Used on placeholders
          3: "#66605B",
          DEFAULT: "#4D4844", // Default
          5: "#A39890",
          6: "#7A726C",
          7: "#24221E", // Used on dark text
        },
        dark: {
          accent: "#2E2E2E",
          "accent-2": "#3B3B3B",
          DEFAULT: "#121212",
        },
        light: "#FFEEE8",
      },
      scale: {
        102: "1.02",
        175: "1.75",
        200: "2.00",
        225: "2.25",
        250: "2.50",
        275: "2.75",
        300: "3.00",
        325: "3.25",
        350: "3.50",
        375: "3.75",
        400: "4.00",
      },
      keyframes: {
        shaking: {
          "0%, 100%": { transform: "rotate(-10deg)" },
          "50%": { transform: "rotate(10deg)" },
        },
        "shaking-horizontal": {
          "0%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(5px)" },
          "50%": { transform: "translateX(-5px)" },
          "75%": { transform: "translateX(5px)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        shake: "shaking 1s ease-in-out infinite",
        "shake-h": "shaking-horizontal 0.10s 3s",
        "shake-h-s": "shaking-horizontal 0.10s 1s",
      },
    },
  },
  plugins: [require("daisyui")],
};
