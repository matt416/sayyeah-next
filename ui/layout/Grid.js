import { baseClasses as flexClasses } from "./Flex"
import { traits, splitStyleAndAttributes } from "helpers/traits"

const classes = traits({ ...flexClasses,
  cols: {
    2: "grid-cols-1 sm:grid-cols-2",
  },
  gap: {
    12: "gap-4 sm:gap-12"
  }
})

export default function Grid( { children, style = null, className, tag : Tag = 'div', ...props }){

  classes.defaults({
    size: "md",
    cols: 2,
    gap: 12
  })

  return <Tag className={ classes.apply(props, "grid px-4") } style={ style }>{ children }</Tag>
}