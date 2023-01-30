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
        // Right Side Slide-in
        'slideX': 'slideX .3s ease-out',
        'slideX2': 'slideX .5s ease-out',
        'slideX3': 'slideX .7s ease-out',
        'slideX4': 'slideX .9s ease-out',
        'slideX5': 'slideX 1.1s ease-out',
        // Left Side Slide-in
        'slideXL': 'slideXL .3s ease-out',
        'slideXL2': 'slideXL .5s ease-out',
        'slideXL3': 'slideXL .7s ease-out',
        'slideXL4': 'slideXL .9s ease-out',
        'slideXL5': 'slideXL 1.1s ease-out',
      },
      keyframes: {
        // Slide in from the right
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
        },
        // Slide in from the left
        slideXL: {
          '0%': {
            transform: 'translateX(-80%)',
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
