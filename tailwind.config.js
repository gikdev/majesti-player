/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        skin: {
          "text-base": "var(--clr-text-base)",
          "text-muted": "var(--clr-text-muted)",
          "bg-base": "var(--clr-bg-base)",
          "bg-muted": "var(--clr-bg-muted)",
          primary: "var(--clr-primary)",
        },
      },
    },
  },
}
