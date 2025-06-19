 /** @type {import('tailwindcss').Config} */
export default {
   content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      borderWidth: {
        1: "1px",
      },
      
      colors: {
      
        "orange/500": "#FD7E14",
        "white/60": "#ffffff99",
        "black/60": "#00000099",
        "gray/600": "#6C757D",
      },
      screens: {
        // Desktop Screen :
        "custom-2xl": "1440px",
        // Laptop Screen :
        "custom-xl": "1024px",
        //Tap Screen :
        "custom-tap":"768px",
        // Mobile Screen :
        "custom-mobile": "390px",
      },
      fontFamily: {
        vietnam: ['"Be Vietnam Pro"', "sans-serif"],
      },
      boxShadow: {
        custom: "0px 0px 0px 4px #FFF4E5",
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        // Add custom-container Class :
        ".custom-container": {
          maxWidth: "100%",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "10px",
          paddingRight: "10px",
          "@media (min-width: 390px)": {
            paddingLeft: "16px",
            paddingRight: "16px",
          },
          "@media (min-width: 640px)": {
            paddingLeft: "25px",
            paddingRight: "25px",
          },
          "@media (min-width: 768px)": {
            paddingLeft: "40px",
            paddingRight: "40px",
          },
          "@media (min-width: 1024px)": {
            paddingLeft: "50px",
            paddingRight: "50px",
          },
          "@media (min-width: 1440px)": {
            paddingLeft: "80px",
            paddingRight: "80px",
          },
          "@media (min-width: 1920px)": {
            paddingLeft: "0",
            paddingRight: "0",
            maxWidth: "1597px",
          },
        },
      });
    },
  ],
};
