/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#8A2BE2",
        magenta: "#fc0865",
        purple: "#7e3ff2",
        "bg-dark": "#1a191e",
        "bg-card": "#32303a",
        "bg-card-hover": "#46454d",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
}
