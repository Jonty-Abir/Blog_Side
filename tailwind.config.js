/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "mob-sm": "350px",
        "mob-md": "420px",
        "mob-lg": "500px",
      },
      fontFamily: {
        signature: ["Great Vibes"],
      },
    },
  },
  plugins: [],
};
