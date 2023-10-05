/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    theme: {
      fontFamily: {
        poppins: ["Poppins, sans-serif"],
      },
      colors: {
        // Primary COLORS
        Cyan: "#2acfcf",
        VioletDark: "#3b3054",
        //Secundary COLORS
        Red: "#f46262",
        //Neutral COLORS
        Gray: "#bfbfbf",
        GrayishViolet: "#9e9aa7",
        VeryDarkBlue: "#35323e",
        VeryDarkViolet: "#232127",
      },
      extend: {
        backgroundImage: {
          bgShortenMobile: "url('/bg-shorten-mobile.svg')",
          bgShortenDesktop: "url('/bg-shorten-desktop.svg')",
          bgBoostMobile: "url('/bg-boost-mobile.svg')",
          bgBoostDesktop: "url('/bg-boost-desktop.svg')",
        },
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        desktop: "1440px",
      },
    },
    extend: {
      backgroundImage: {
        mobile: "url('/pattern-bg-mobile.png')",
        desktop: "url('/pattern-bg-desktop.png')",
      },
    },
  },
  plugins: [],
};
