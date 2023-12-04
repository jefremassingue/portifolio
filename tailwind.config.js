/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  darkMode: "class",
  theme: {
    darkMode: "class",
    extend: {
      // colors: {

      //   black: '#000',
      //   white: '#fff',
      //   ...require("daisyui/src/theming/themes")["[data-theme=dark]"],
      //   primary: {
      //     DEFAULT: '#2D70F5', 50: '#EAF1FE',
      //     100: '#D5E2FD',
      //     200: '#ABC6FB',
      //     300: '#81A9F9',
      //     400: '#578DF7',
      //     500: '#2D70F5',
      //     600: '#245AC4',
      //     700: '#1B4393',
      //     800: '#122D62',
      //     900: '#091631',
      //   },
      //   secondary: { DEFAULT: '#3EA6E6', '50': '#E1F1FB', '100': '#CEE9F9', '200': '#AAD8F4', '300': '#86C7EF', '400': '#62B7EB', '500': '#3EA6E6', '600': '#1B8CD1', '700': '#156A9F', '800': '#0E496E', '900': '#08283C' },


      // },
    },
  },
  plugins: [require('daisyui')],
  // daisyui: {
  //   themes: ["light", "dark"],
  // },
  daisyui: {
    darkTheme: "dark",
    themes: false,
  },
  // daisyui: {
  // darkMode: "class",
  // themes: [
  //     {
  //       light: {
  //         ...require("daisyui/src/theming/themes")["[data-theme=dark]"],
  //         primary: "#3EA6E6",
  //         // "primary-focus": "#570df8",
  //         "primary-content": "#ffffff",
  //         "primary-focus": "mediumblue",
  //       },
  //       dark: {
  //         ...require("daisyui/src/theming/themes")["[data-theme=dark]"],
  //         primary: "#3EA6E6",
  //         "primary-content": "#ffffff",
  //         "primary-focus": "mediumblue",
  //       },
  //     },
  //   ],
  // },
}

