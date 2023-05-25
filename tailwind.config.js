/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#000",
      white: "#fff",
      'primary-900': "#e23540",
      'primary-100': "#ffe9df",
      'secondary-900': "#355d63",
      'secondary-100': "#d5eaec",
      'secondary-500': "#71bfd6",
      'grey-20': "#f1f1f1",
    },
    extend: {
      colors: {
        "prop-turquoise": "#D5EAEC",
        "prop-teal": "#355D63",
        "prop-red": "#E23540"
      },
      maxWidth: {
        wrapper: "1248px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["var(--font-archia)", "sans-serif"],
      },
    },
    future: {
      hoverOnlyWhenSupported: true,
    },
  },
  plugins: [],
};
