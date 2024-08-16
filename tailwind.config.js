/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  screens: {
    'sm': '640px',  /* Small screens (Mobile) */
    'md': '768px',  /* Medium screens (Tablets) */
    'lg': '1024px', /* Large screens (Desktops) */
    'xl': '1280px', /* Extra large screens */
    '2xl': '1536px',/* 2x extra large screens */
  }, 
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

