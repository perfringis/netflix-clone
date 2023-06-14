/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontSize: {
      '32px': ['32px', '38px'],
    },
    extend: {
      colors: {
        "mine-shaft": "#333333",
        gray: "#8c8c8c",
      },
    },
  },
  plugins: [],
};
