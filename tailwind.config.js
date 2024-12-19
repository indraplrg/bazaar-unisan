/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: { custom: { Primary: "#6ea4bf", Seconday: "#D3756E" } },
      fontFamily: {
        Poppins: ["Poppins", "serif"],
      },
    },
  },
  plugins: [],
};
