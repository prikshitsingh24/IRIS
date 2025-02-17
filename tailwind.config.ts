import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
      colors: {
        primary: "#007FFF",
        secondary: "#662d91",
        textColorBlue: "#3498DB",
        textColorWhite:"#FFFFFF",
        textColorGray:"#2C3E50",
        bgColor1:"#171717",
        bgColor2:'#FFFFFF',
        bgColor3:"#262626",
        btnColorBlue:"#3498DB"
      },
    },
  },
  plugins: [],
} satisfies Config;
