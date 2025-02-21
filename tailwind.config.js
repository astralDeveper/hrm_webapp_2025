/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      poppins: "Barlow",
    },
    extend: {
      backgroundImage: { 
        darkGrad: 'linear-gradient(to bottom, #5454D4, #A0A0F0)',
      },
      colors: {
        secondaryColor: "#343434",
        placeHolder: "#A0A4AC",
        formbackground: "#F3F8FB",
        gray1: "#A6A6A6",
        borderColor1: "#5454D4",
        borderColor2: "#D0D0D0",

        // Attendence Report Colors
        pinkColor: "#F9E6EE",
        pinkTextColor:"#FD397A",
        greenColor: "#E0F3F0",
        greenTextColor: "#0ABB87",
        purpleColor: "#D5D9F6",
        purpleTextColor: "#5867DD",
        orangeColor: "#F9F3E5",
        orangeTextColor: "#FFB823",
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
