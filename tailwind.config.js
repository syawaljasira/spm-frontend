/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      transitionProperty: {
        hover: "all 150ms cubic-bezier(0, 0, 0.2, 1)",
      },
    },
  },
  plugins: [],
};
