/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['"PP Neue Montreal"', "Inter", "system-ui", "sans-serif"],
      },
      colors: {
        ink: "#090C21",
        muted: "#6B7280",
        line: "#D4E0ED",
        ronin: "#1261FC",
        paper: "#F7F7F6",
      },
      boxShadow: {
        soft: "0 24px 80px rgba(9, 12, 33, 0.08)",
      },
    },
  },
  plugins: [],
};
