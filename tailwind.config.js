/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}",
    "./public/index.html",

  ],
  theme: {
    extend: {
      backgroundColor: {
        'main-100': '#E7ECEC',
        'main-200': '#DDE4E4',
        'main-300': '#CED9D9',
        'main-400': '#C0D8D8',
        'main-500': '#0E8080'
      },
      colors: {
        'main-100': '#E7ECEC',
        'main-200': '#DDE4E4',
        'main-300': '#CED9D9',
        'main-400': '#C0D8D8',
        'main-500': '#0E8080',
        'overlay-30': 'rgba(0,0,0,0.3)'
      },

      keyframes: {
        "slide-right": {
          "0%" : {
            "-webkit-transform": "translateX(-500px)",
                    transform: "translateX(-500px)"
          },
          "100%": {
            "-webkit-transform": "translateX(0)",
                    transform: "translateX(0)"
          }
        },

        'slide-left': {
          '0%': {
            '-webkit-transform': ' translateX(500px);',
            transform: 'translateX(500px);'
          },
          '100%': {
            '-webkit-transform': 'translateX(0);',
            transform: 'translateX(0);'
          }
        },
        
        'slide-left2': {
          '0%': {
            '-webkit-transform': ' translateX(500px);',
            transform: 'translateX(500px);'
          },
          '100%': {
            '-webkit-transform': 'translateX(0);',
            transform: 'translateX(0);'
          }
        },

        'rotate-center': {
          '0%': {
            '-webkit-transform': ' rotate(0);',
            transform: 'rotate(0);'
          },
          '100%': {
            '-webkit-transform': 'rotate(360deg);',
            transform: 'rotate(360deg);'
          }
        }
      },

      animation: {
        'slide-right': 'slide-right 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;',
        'slide-left': 'slide-left 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;',
        'slide-left2': 'slide-left2 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;',
        'rotate-center': 'rotate-center 8s linear infinite;',

      }

    },
    screens: {
      'tablet': '640px',
    

      'laptop': '1024px',
    

      'desktop': '1600px',
      
    },
  },
  plugins: [],
}