/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontSize: {
      "32px": ["2rem", "2.375rem"],
    },
    extend: {
      colors: {
        "mine-shaft": "#333333",
        gray: "#8c8c8c",
        monza: "#e50914",
        nobel: "#b3b3b3",
      },
      width: {
        122: "28rem",
      },
    },
  },
  plugins: [],
};
