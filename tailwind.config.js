/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "background": "#FFFFFF",
        "foreground": "#323232",
        "selectable":  "#FF6F61",
        "non-selectable": "#A0A0A0",
        "drop-down-background":"#F5F5F5",
        "drop-down-foreground":"#323232"
      },
      screens: {
        'screen-1280': '1270px',  
        // => @media (min-width: 1280px ) { ... }
        'screen-1920': '1910px',  
        // => @media (min-width: 1920px) { ... }
        'screen-2560': '2550px',  
        // => @media (min-width: 2560px) { ... }
      },
    },
  },
  plugins: [],
};
