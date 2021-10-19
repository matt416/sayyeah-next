
import clsx from "clsx"
import { splitClassesAndAttributes } from "helpers/tw"


export default function Grid( {
  children,
  className,
  tag : Tag = 'div', ...props }){

  const accepts = splitClassesAndAttributes(props, {
    maxW : "max-w-screen-xs md:max-w-screen-md",
    gap: "gap-4",
    gridCols: "grid-cols-1 md:grid-cols-2",
    // margin: "mx-auto"
  })

  return <Tag className={ clsx("grid", accepts, className) }>{ children }</Tag>
}