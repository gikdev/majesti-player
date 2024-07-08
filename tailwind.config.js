/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      textColor: {
        skin: {
          base: "var(--clr-text-base)",
          muted: "var(--clr-text-muted)",
        },
      },
      backgroundColor: {
        skin: {
          base: "var(--clr-bg-base)",
          muted: "var(--clr-bg-muted)",
        },
      },
      colors: {
        skin: {
          primary: "var(--clr-primary)",
        },
      },
    },
  },
}
