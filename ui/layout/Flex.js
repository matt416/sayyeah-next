
import { traits, splitStyleAndAttributes } from "helpers/traits"

const classes = traits({
  size: {
    md: "max-w-screen-xs sm:max-w-screen-md",
    lg: "max-w-screen-xs sm:max-w-screen-lg"
  },
  space: {
    4: "space-y-4"
  }
})

export const baseClasses = classes.traitsList


export default function Flex({ children, style = null, className, tag: Tag = 'div', ...props }) {

  classes.defaults({
    size: "md",
    space: 4,
  })

  return <Tag className={classes.apply(props, "flex flex-col items-start w-full px-4", className)} style={style}>{children}</Tag>
}