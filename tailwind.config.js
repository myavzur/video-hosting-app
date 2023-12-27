const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      zIndex: {
        ['notifications']: 100,
        ['modal']: 90,
        ['search-panel']: 5,
        ['search-result']: 1
      },

      transitionDuration: {
        DEFAULT: '0.3s'
      },

      // Animations
      keyframes: {
        pulse: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: .5 }
        },
        spin: {
          to: {
            transform: "rotateZ(360deg)"
          }
        }
      },

      animation: {
        pulse:  'pulse 2s cubic-bezier(0.4, 0, 0.6, 1)',
      },

      
      // Font sizes
      fontSize: {
        "2xs": '0.75rem',
        xs:    '0.9rem',
        sm:    '1rem',
        tiny:  '1.2rem',
        base:  '1.4rem',
        lg:    '1.5rem',
        xl:    '1.6rem',
        "2xl": '1.75rem',
        "3xl": '1.9rem'
      }
    },
  },
  plugins: [
    plugin(({ addComponents, addUtilities, e, config }) => {
      addUtilities({
        '.inner-shadow': {
          boxShadow: '0px 0px 35px rgb(0, 0, 0, 0.5) inset'
        }
      })

    })
  ]
}
