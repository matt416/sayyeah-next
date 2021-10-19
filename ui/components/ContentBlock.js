import clsx from "clsx"
import { splitClassesAndAttributes } from "helpers/tw"

export default function ContentBlock( {
  children,
  className,
  tag : Tag = 'div',
  ...props }){

  const [classes, attributes] = splitClassesAndAttributes(props, {
    maxW: "max-w-screen-xs md:max-w-screen-md",
    bgColor: null,
    textColor: null,
    margin: "mx-auto",
  })



  return <Tag className={ clsx(classes, className) } { ...attributes }>{ children }</Tag>
}