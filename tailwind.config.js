/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        in: "in 0.2s ease-in-out",
        out: "out 0.2s ease-in-out",
      },
      keyframes: {
        in: {
          "0%": { opacity: 0, transform: "translateY(-50%)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        out: {
          "0%": { opacity: 1, transform: "translateY(0)" },
          "100%": { opacity: 0, transform: "translateY(-50%)" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animation-delay")],
};
