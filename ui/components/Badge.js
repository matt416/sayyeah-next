import { splitClassesAndAttributes } from "helpers/tw"
import clsx from "clsx"

const Badge = ({ children, className, href, ...props }) => {

  const [classes, attributes] = splitClassesAndAttributes(props, {
    textSize: "text-16",
    fontWeight: "font-normal",
    textColor: "",
    bgColor: "bg-sy-yellow"
  })

  return <span
      className={ clsx("px-3 pt-1.5 pb-1 rounded-full", classes, className) } { ...attributes }
    >
      { children }
    </span>

}
export default Badge
