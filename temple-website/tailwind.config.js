/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        maroon: {
          950: "#2B0A0C",
          900: "#450F12",
          800: "#5C1A1B",
          700: "#7A2426",
        },
        gold: {
          400: "#E4C468",
          500: "#C9A227",
          600: "#A9821A",
        },
        turmeric: "#E8A33D",
        sandal: "#F6EEDD",
        ink: "#231409",
        "dev-blue": "#1b355a",
        "dev-orange": "#f27224",
        "dev-light": "#f3f4f6",
      },
      fontFamily: {
        display: ["'Tiro Devanagari Hindi'", "serif"],
        body: ["'Mukta'", "sans-serif"],
      },
    },
  },
  plugins: [],
}

