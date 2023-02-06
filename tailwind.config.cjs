/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.vue"],
  theme: {
    extend: {
      colors: {
        white: "slate-200",
        skyTeal: "#8AC8C4",
        oceanBlue: "#05768E",
      },
    },
  },
  plugins: [],
};
