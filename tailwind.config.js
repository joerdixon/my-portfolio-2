/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      // Colors
      colors: {
        // Background
        'main-bg': '#111',
        'alt-bg': '#444',
        // Text
        'main-text': '#eee',
        'alt-text': '#bbb',
        'highlight': '#FFAAA5',
        // Logo Colors
        'li-blue': "#0A66C2",
        'gh-grey': "#444",
        'gm-red': '#C83A2D',
      },
      fontFamily: {
        // Fonts
        'main': '"Karla"',
        'heading': '"Inter Tight"',
        'display': '"Syne"',
      },
      borderColor: {
        'main-border': '#555',
      },
      // Test these being a touch faster.
      animation: {
        'slideX': 'slideX .3s ease-out',
        'slideX2': 'slideX .5s ease-out',
        'slideX3': 'slideX .7s ease-out',
      },
      keyframes: {
        slideX: {
          '0%': {
            transform: 'translateX(80%)',
            opacity: '0%'
          },
          '45%': {
            opacity: '0%'
          },
          '100%': {
            transform: 'translateX(0%)',
            opacity: '100%'
          }
        }
      }
    },
  },
  plugins: [],
}
