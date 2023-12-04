/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  darkMode: "class",
  theme: {
    darkMode: "class",
    extend: {},
  },
  plugins: [require('daisyui')],
  // daisyui: {
  //   themes: ["light", "dark"],
  // },

  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["[data-theme=light]"],
          primary: "blue",
          "primary-focus": "mediumblue",
        },
        dark: {
          ...require("daisyui/src/theming/themes")["[data-theme=dark]"],
          primary: "blue",
          "primary-focus": "mediumblue",
        },
      },
    ],
  },
}

