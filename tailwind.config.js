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
        primary50: "#DEF5FF",
        primary100: "#AAE1FF",
        primary200: "#93C3FF",
        primary300: "#70A8FD",
        primary400: "#5895EC",
        primary500: "#3681D9",
        primary600: "#0073C7",
        primary700: "#005FAD",
        primary800: "#004B94",
        primary900: "#003779",

        //secondary
        secondary50: "#D9EFFF",
        secondary100: "#B3DAFF",
        secondary200: "#8BC7FF",
        secondary300: "#62B1FF",
        secondary400: "#499FFC",
        secondary500: "#3590F9",
        secondary600: "#3382E9",
        secondary700: "#3570D7",
        secondary800: "#305FC4",
        secondary900: "#2B40A4",
      
        //grey
        grey50:"#EFEFEF",
        grey100:"#D4D4D4",
        grey200:"#BBBBBB",
        grey300:"#A0A0A0",
        grey400:"#8C8C8C",
        grey500:"#747474",
        grey600:"#5A5A5A",
        grey700:"#4B4B4B",
        grey800:"#3D3D3D",
        grey900:"#2E2E2E",

        //grey2
        grey2_50:"#EAEAEA",
        grey2_100:"#D2D2D2",
        grey2_200:"#BBBBBB",
        grey2_300:"#A2A2A2",
        grey2_400:"#8F8F8F",
        grey2_500:"#808080",
        grey2_600:"#767676",
        grey2_700:"#6A6A6A",
        grey2_800:"#5C5C5C",
        grey2_900:"#454545",


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
