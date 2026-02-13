/** @type {import('tailwindcss').Config} */
// import lineClamp from '@tailwindcss/line-clamp';
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1f78c1",
        secondary: "#0f4c81",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
      animation: {
        float: "float 4s ease-in-out infinite",
      },
      fontFamily: {
        merri: ["Merriweather", "serif"],
        changa: ["Changa One", "cursive"],
        dmserif: ["DM Serif Text", "serif"],
      },
    },
  },
//  plugins: [lineClamp],
};
