/** @type {import('tailwindcss').Config} */

// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#7E5BEF', // example “purple” brand color
          600: '#6A4CE0',
          700: '#5B3BCB',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};


// module.exports = {
//   content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
//   theme: { extend: {} },
//   plugins: [],
// };
