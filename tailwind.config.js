/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slide: {
          "0%": {
            transform: "translateX(0)",
          },
          "25%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateX(-100vw)",
          },
        },
      },
      animation: {
        slide: "slide 5s ease-in-out infinite",
      },
      maxHeight: {
        1100: "1100px",
      },
      maxWidth: {
        1100: "1100px",
      },
      backgroundColor: {
        arrowbtn: "#000d1a",
      },
      fontSize: {
        clampsize: "clamp(1rem, 8vw, 2.5rem)",
      },
      zIndex: {
        1: "1",
      },
      transitionDuration: {
        3000: "3000",
      },
      lineHeight: {
        1.4: "1.4",
      },
    },
  },
  plugins: [],
};
