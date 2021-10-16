const plugin = require("tailwindcss/plugin");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      md: { max: "767px" },
      sm: { max: "576px" },
    },
    fontFamily: {
      sans: ["Lato", "sans-serif"],
    },
    extend: {
      colors: {
        darkGray: "hsl(0, 0%, 13%)",
        accent: "hsl(352, 82%, 69%)",
        lightPink: "hsl(351, 32%, 92%)",
        veryLightPink: "hsl(348, 26%, 96%)",
        lightGray: "hsl(0, 0%, 88%)",
        veryLightGray: "hsl(0, 0%, 97%)",
        grayText: "hsl(0, 0%, 36%)",
        lightGrayText: "hsl(0, 0%, 62%)",
        offerBg: "hsl(0, 20%, 11%)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(({ addUtilities }) => {
      const newUtilities = {
        ".no-scrollbar": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
      };
      addUtilities(newUtilities);
    }),
  ],
};
