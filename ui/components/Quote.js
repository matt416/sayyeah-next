import LeftQuote from "ui/svg/LeftQuote"
import RightQuote from "ui/svg/RightQuote"

import { traits } from "helpers/traits"

const classes = traits({
  textSize: {
    24: "text-24",
  },
  fontWeight: {
    bold: "font-bold"
  },
  margin: {
    default: "mb-4"
  },
})

const quoteClasses = traits({
  quoteColor: {
    mocha: "text-sy-mocha",
    bronze: "text-sy-bronze",
    gold: 'text-sy-gold',
  }
})


export default function Quote({ children, nodeType: Node = "p", quoteSize = 16, ...props}) {

  classes.defaults({
    textSize: 24,
    fontWeight: "bold",
    margin: "default"
  })

  quoteClasses.defaults({
    quoteColor: "mocha"
  })

  return (
    <Node className={ classes.apply(props, "inline-block") }>
      <LeftQuote width={ quoteSize } className={ quoteClasses.apply(props, "ml-[-1.5rem]") }/>{ children }<RightQuote width={ quoteSize } className={ quoteClasses.apply(props) } />
    </Node>
  )
}