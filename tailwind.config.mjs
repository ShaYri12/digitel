/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: "#4A199A",
      },
      fontFamily: {
        future: ["Futura Maxi CG Bold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
