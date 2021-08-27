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
      20: ["1.25rem", { lineHeight: "1.3em" } ],
      24: ["1.5rem", { lineHeight: "1.2em" } ],
      28: ["1.75rem", { lineHeight: "1.2em" } ],
      32: ["2.0rem", { lineHeight: "1.2em" } ],
      36: "2.25rem",
      40: ["2.5rem", { lineHeight: "1.2em" } ],
      48: "3.0rem",
    },
    extend: {
      colors: {
        yeah: {
          sunshine: "#FFE64A",
          yellow: "#FCD400",
          gold: "#EEBD0F",
          bronze: "#976A27",
          tan: "#CB9340",
          cola: "#301F01",
          grey: "#EFEFEF"
        },
        black: "#0D0800",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
