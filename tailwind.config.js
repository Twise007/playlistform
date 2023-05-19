/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        btn: "var(--color-btn)",
        primary: "var(--color-primary)",
        sec: "var(--color-sec)",
      },
    },
  },
  plugins: [require("daisyui")],
};
