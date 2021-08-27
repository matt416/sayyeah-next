import cssModule from "./Heading.module.css"
import clsx from 'clsx'

export default function Heading({
  level = 2,
  tag, // Make a non-heading appear visually as a heading (eg, paragraph)
  className,
  children,
  ...props
}) {

  const Component = tag || `h${level}`
  if (level > 6){
    level = 6
  }

  return <Component className={ clsx(className, cssModule[`h${level}`]) } { ...props }>
    { children }
  </Component>
}