// import clsx from 'clsx'
// import { traits } from "helpers/traits"
// const BUTTON_TRAITS = traits({
//   default: "",
//   bgColor: {
//     cola: "bg-yeah-cola",
//     gold: "bg-yeah-gold",
//   },
//   textColor: {
//     white: "text-white",
//     black: "text-black"
//   }
// })

const Button = ({ children, className, href, ariaLabel }) => {

  return <a
  href={ href }
  aria-label={ ariaLabel }
  className={ `inline-flex min-h-[3rem] font-bold items-center justify-center px-6 py-2 rounded-md ${className} ` }>
      { children }
  </a>

}
export default Button
