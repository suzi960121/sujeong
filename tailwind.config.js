/** @type {import('tailwindcss').Config} tailwind.config /module.exports */
// const plugin = require('tailwindcss/plugin')

module.exports = {
  //important: true,
  content: ["**/*.{html,css}" ,"**/*.js"],// "./**/*.{css,js}" ,"*/*.{css,js}"

  corePlugins: {
   preflight: false,
  },

  theme: {
    // fontSize: {
    //   sm: ['14px', '20px'], //14px 폰트, 20px line-height
    //   base: ['16px', '24px'],
    //   lg: ['20px', '28px'],
    //   xl: ['24px', '32px'],
      // },

// fontSize: {
//       '2xl': ['1.5rem', {
//         lineHeight: '2rem',
//         letterSpacing: '-0.01em',
//         fontWeight: '500',
//       }],
//       '3xl': ['1.875rem', {
//         lineHeight: '2.25rem',
//         letterSpacing: '-0.02em',
//         fontWeight: '700',
//       }],
//     },
    screens: {
      sm: "768px",

      md: "960px",

      lg: "1000px",

      xl: "1640px",

    //  "2xl": "1600px",


      // '2xl': {'max': '1000px'},
      // // => @media (max-width: 1535px) { ... }

      // 'xl': {'max': '1279px'},
      // // => @media (max-width: 1279px) { ... }

      // 'lg': {'max': '1023px'},
      // // => @media (max-width: 1023px) { ... }

      // 'md': {'max': '767px'},
      // // => @media (max-width: 767px) { ... }

      // 'sm': {'max': '359px'},
      // // => @media (max-width: 639px) { ... }
      
    },
    
    container: {
      center: true,
      padding: "16px",
      margin: "0 auto",
      // padding: {
      //   DEFAULT: '1rem',
      //   sm: '2rem',
      //   lg: '50px',
      //   xl: '50px',
      //   '2xl': '1rem',
      // },
     
    },
    
    extend: {
      important: true,
      colors: {
        //primary
        primary50: "#FB543A",
        primary100: "#FDD2CF",
        primary200: "#FC9A92",
        primary300: "#FB543A",
        primary400: "#C53414",
        primary500: "#89210A",
        primary600: "#89210A",
        primary700: "#89210A",
        primary800: "#89210A",
        primary900: "#89210A",

        //secondary
        secondary50: "#3AE1FB",
        secondary100: "#D8F6FE",
        secondary200: "#3AE1FB",
        secondary300: "#2DB7CC",
        secondary400: "#218E9F",
        secondary500: "#156774",
        secondary600: "#D8F6FE",
        secondary700: "#3AE1FB",
        secondary800: "#2DB7CC",
        secondary900: "#218E9F",
      
        //grey
        grey:"#988C8B",
        grey0:"#F3F2F2",
        grey100:"#DEDCDB",
        grey200:"#BAB3B3",
        grey300:"#988C8B",
        grey400:"#726867",
        grey500:"#4E4746",
        grey600:"#2C2827",
        grey700:"#131010",

        //bg
        surfaceLow:"#E7FAF3",
        surfaceMid:"#f1fcf8",
        surfaceHigh:"#FCFEFE",
        surfacegreen:"#046f61",

        // "body-color": "#637381",
        // warning: "#FBBF24",
      },
      boxShadow: {
        'small':"0px 2px 20px 17px rgba(4, 185, 117, 0.04)",
        'medium':"0px 12px 30px 17px rgba(4, 185, 117, 0.04)",
        'large':"0px 4px 12px rgba(4, 185, 117, 0.1)",
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        '4xl': [
          '0 35px 35px rgba(0, 0, 0, 0.25)',
          '0 45px 65px rgba(0, 0, 0, 0.15)'
        ],
        'button':'0px 12px 30px rgba(4, 185, 117, 0.18)',
        'default-button':'0px 12px 30px rgba(19, 26, 21, 0.18)',
        'default3':"0px 4px 12px rgba(19, 26, 21, 0.18)",
        'dropdown':'rgba(19, 26, 21, 0.15), 0px 1px 2px rgba(4, 185, 117, 0.3)',

      },
      dropShadow: {
        '1': " 0px 2px 20px 17px rgba(24, 92, 255, 0.04)",
        '2':"0px 12px 30px 17px rgba(24, 92, 255, 0.04)",
        '3':"0px 4px 12px rgba(12, 68, 204, 0.1)",
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        'button':'0px 12px 30px rgba(4, 185, 117, 0.18)',
        'default-button':'0px 12px 30px rgba(19, 26, 21, 0.18)',
        'dropdown':'rgba(19, 26, 21, 0.15), 0px 1px 2px rgba(4, 185, 117, 0.3)',
        'sm': "0px 4px 10px rgba(0, 0, 0, 0.05)",
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)'
        ],
      },
      animation: {
        'moveforever': 'moveforever 15s linear infinite',
      },
      keyframes: {
        moveforever: {
          'from': { transform: 'translateX(0%)' },
          'to': { transform: 'translateX(-50%)' },
        }
      },
    },
  },
  
  plugins: [
    (function({ addBase, theme }) {
      addBase({
        '@media (min-width: 1920px)': {
          '.container': { 'min-width': '1640px' }
        },
        '@media (min-width: 960px)': {
          '.container': { 'min-width': '960px' }
        },
        '@media (min-width: 768px)': {
          '.container': { 'min-width': '768px' }
        },
        '@media (min-width: 480px)': {
          '.container': { 'min-width': '480px' }
        },
      })
    }),
    // plugin(function({ addBase, theme }) {
    //   addBase({
    //     'h1': { fontSize: theme('fontSize.2xl') },
    //     '@media (min-width: 500px)': {
    //       'h1': { fontSize: theme('fontSize.2xl') }
  
    //       // ...
    //     },
    //     'h2': { fontSize: theme('fontSize.xl') },
    //     'h3': { fontSize: theme('fontSize.lg') },
    //   })
    // })
    
  ],
 
 
};
