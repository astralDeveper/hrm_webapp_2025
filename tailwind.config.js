/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      poppins: "Barlow",
    },
    extend: {
      // backgroundImage: {
      //   "hero-pattern": "url('../src/assets/images/herosec.png')",
      // },

      // darkMode: "class",

      colors: {
        secondaryColor: "#3E3E3E",
        placeHolder: "#A0A4AC",
      },
      boxShadow: { 
        shadow2: "0 6px 20px -4px #e1c45b",
        shadow3: "0 8px 40px -2px #000000",
      },
      fontWeight: {
        normal: "400", // Normal weight
        semiBold: "600", // Semi-bold weight
        bold: "700", // Bold weight
      },
      animation: {
        "infinite-scroll": "infinite-scroll 55s linear infinite",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translatex(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
    },

    // screens: {
    //   ms: "320px",
    //   mm: "375px",
    //   ml: "425px",
    //   sm: "640px",
    //   md: "768px",
    //   xmd1: "813px",
    //   xmd2: "884px",
    //   lg: "1024px",
    //   xs: "300px",
    //   sm: "640px",
    //   md: "768px",
    //   lg: "1024px",
    //   xl: "1280px",
    //   xxl: "1140px",
    //   "2xl": "1536px",
    // },
    
  },
  plugins: [],
};
