import { traits } from 'helpers/traits'
import { twMerge } from 'tailwind-merge'

const TRAIT = traits({
  default: "px-2.5 py-0.5 rounded-full",
  color: {
    default: "px-2.5 py-0.5 rounded-full",
    black: "bg-black text-yeah-yellow"
  }
})

export default function Badge({ children, color, className, ...props }){

  const appearance = twMerge("px-2.5 py-0.5 rounded-full bg-yeah-yellow text-black", className)
// TRAIT.apply({ color }, className)
  return <span className={ appearance }>{ children }</span>

}