/*** From https://github.com/tailwindlabs/tailwindcss.com/blob/master/src/components/Widont.js */

export default function Widont({ children }) {
  return children.replace(/ ([^ ]+)$/, '\u00A0$1')
}