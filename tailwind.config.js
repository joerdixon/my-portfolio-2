/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      // Colors
      'main-bg': '#222',
      'alt-bg': '#444',
      // Fonts
      'main': 'sans-serif',
      'alt': 'serif',
      'display': 'Papyrus',
    },
  },
  plugins: [],
}
