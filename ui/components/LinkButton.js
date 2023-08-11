import Link from "next/link"
import { traits } from "helpers/traits"
import AccessibleLabel from "./AccessibleLabel"

const classes = traits({
  bgColor: {
    white: "bg-white",
    yellow: "bg-sy-yellow",
    black: "bg-black",
    gold: "bg-sy-gold"
  },
  textSize: {
    16: "text-16",
    18: "text-18",
  },
  textColor: {
    black: "text-black",
    white: "text-white"
  },
})

const LinkButton = ({ children, className, href, ...props }) => {

  classes.defaults({
    textSize: 16,
    textColor: "white",
    bgColor: "black",
  })

  return <Link href={ href } className={ classes.apply(props,
    'inline-flex font-bold items-center justify-center rounded-md',
    "min-h-2.5rem pt-1.5 pb-1 px-3",
    className
  ) }>
    <AccessibleLabel>{ children }</AccessibleLabel>

  </Link>

}
export default LinkButton
