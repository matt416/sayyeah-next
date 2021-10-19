import Link from "next/link"
import { splitClassesAndAttributes } from "helpers/tw"
import clsx from "clsx"
import AccessibleLabel from "./AccessibleLabel"

const LinkButton = ({ children, className, href, ...props }) => {

  const [classes, attributes] = splitClassesAndAttributes(props, {
    textSize: "text-16",
    bgColor: "bg-black",
    textColor: "text-white",
    margin: false,
    height: "min-h-2.5rem",
    padding: "pt-1.5 pb-1 px-3"
  })


  return <Link href={ href }><a { ...attributes } className={ clsx(
    'inline-flex font-bold items-center justify-center rounded-md',
    classes,
    className
  ) }>
    <AccessibleLabel>{ children }</AccessibleLabel>
  </a></Link>

}
export default LinkButton
