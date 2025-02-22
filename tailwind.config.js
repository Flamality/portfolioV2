/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        in: "in 0.2s ease-in-out",
        growIn: "growIn 0.6s ease",
        growOut: "growOut 0.6s ease",
        out: "out 0.2s ease-in-out",
        arrow: "arrow 2s ease-in-out infinite",
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
        growIn: {
          "0%": { opacity: 0, width: "0" },
          "100%": { opacity: 1, width: "100%" },
        },
        growOut: {
          "0%": { opacity: 1, width: "100%" },
          "100%": { opacity: 0, width: "0" },
        },
        arrow: {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
          "100%": { transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animation-delay")],
};
