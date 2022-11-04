const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      ...defaultTheme.screens,
      // lg: "1050px",
    },
  },
  plugins: [],
};
