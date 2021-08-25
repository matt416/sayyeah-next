import clsx from 'clsx'
import { traits } from "helpers/traits"
const BUTTON_TRAITS = traits({
  default: "inline-flex min-h-[2rem] font-bold items-center justify-center px-6 py-2 rounded",
  bgColor: {
    cola: "bg-yeah-cola",
    gold: "bg-yeah-gold",
  },
  textColor: {
    white: "text-white",
    black: "text-black"
  }
})

export default function Button({ children, bgColor, textColor, className }){
  return <a href="#" className={ BUTTON_TRAITS.apply({ bgColor, textColor },  className) }>{ children }</a>
}
