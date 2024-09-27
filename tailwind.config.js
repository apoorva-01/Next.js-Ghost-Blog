const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        customLightBg: '#ffffff', // Replace with your desired light background color
        customLightText: '#374151', // Replace with your desired light text color
        customDarkBg: '#272D3C', // Replace with your desired dark background color
        customDarkText: '#ffffff', // Replace with your desired dark text color
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
