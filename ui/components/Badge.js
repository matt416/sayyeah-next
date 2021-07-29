import { traits } from 'helpers/traits'

const TRAIT = traits({
  default: "px-2.5 py-0.5 rounded-full",
  color: {
    default: "bg-yeah-yellow text-black",
    black: "bg-black text-yeah-yellow"
  }
})

export default function Badge({ children, color, className }){

  return <span className={ TRAIT.apply({ color }, className) }>{ children }</span>

}