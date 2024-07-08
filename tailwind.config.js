/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/*.{js,jsx,ts,jsx}",
    "./src/**/*.{js,jsx,ts,jsx}",
    "./src/**/**/*.{js,jsx,ts,jsx}",
  ],
  plugins: [require("daisyui")],
}

