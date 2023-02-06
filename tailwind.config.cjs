/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.vue"],
  theme: {
    extend: {
      colors: {
        skyTeal: "#8AC8C4",
        oceanBlue: "#05768E",
        hoverBlue: "#3691a4",
      },
    },
  },
  plugins: [],
};
