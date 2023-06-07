/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        black: "#27374D",
        white: "#DDE6ED",
        "primary-400": "#9DB2BF",
        "primary-600": "#526D82",
        "primary-btn": "FF4C29",
        pink: "#ff49db",
        orange: "#ff7849",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [],
  },
};
