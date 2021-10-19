module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./ui/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or "media" or "class"
  theme: {
    fontSize:{
      12: "0.75rem",
      13: "0.8125rem",
      14: "0.875rem",
      15: "0.9375rem",
      16: "1.0rem",
      17: "1.0625rem",
      18: "1.125rem",
      20: "1.25rem", //["1.25rem", { lineHeight: "1.3em" } ],
      24: "1.5rem", //["1.5rem", { lineHeight: "1.5em" } ],
      28: "1.75rem",//["1.75rem", { lineHeight: "1.2em" } ],
      32: ["2.0rem", { lineHeight: "1.2em" } ],
      36: "2.25rem",
      40: ["2.5rem", { lineHeight: "1.2" } ],
      48: "3.0rem",
    },
    fontFamily: {
      'sans' : [
        'Aspira',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ]
    },
    extend: {
      colors: {
        "blue-50": "#D5E5FE",
        "blue-50-10\%": "rgba(214,230,254,0.1)",
        "yellow-50": "#FFF0A5",
        "yellow-50-10\%": "rgba(249,249,229,0.1)",
        sy: {
          sunshine: "#FFE64A",
          yellow: "#FCD400",
          gold: "#EEBD0F",
          bronze: "#976A27",
          earth: "#301F01",
          grey: "#EFEFEF",
          mocha: "#D6AA69",
        },
        black: "#0D0800",
      },
      maxWidth : {
        "screen-xs": "32rem",
        // "screen-sm": "40rem",
        // "screen-md": "48rem",
        // "screen-lg": "64rem",
        // "screen-xl": "80rem",
        // "screen-2xl": "96rem"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
