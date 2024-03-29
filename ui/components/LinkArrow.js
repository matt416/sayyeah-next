import Link from "next/link"
import { splitClassesAndAttributes } from "helpers/tw"
import clsx from "clsx"
import Arrow from "ui/svg/Arrow"
import AccessibleLabel from "./AccessibleLabel"
const LinkArrow = ({ children, className, href, ...props }) => {

  const [classes, attributes] = splitClassesAndAttributes(props, {
    textSize: "text-18",
    fontWeight: "font-bold",
    textColor: false,
  })

  return <Link href={ href } { ...attributes } className={ clsx(
    classes,
    className
  ) }>
    <AccessibleLabel>{ children }</AccessibleLabel><Arrow/>
  </Link>

}
export default LinkArrow
