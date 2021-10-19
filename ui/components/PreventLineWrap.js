import React from "react"
import clsx from "clsx"

export function PreventLineWrap({ children }) {

  const nospace = "\u200b" //"&#65279;" Zero width no break space
  const space = "\u00a0" //"&nbsp;"


  /**const count = React.Children.count(children)

  const childrenModified = (count === 1) ?
    React.Children.map(children, (node) => {

      return React.cloneElement(node, { className: clsx(node.props.className, "inline")})

    })
  : children**/


  return <span className="inline whitespace-nowrap">{ space }{ children }{ space }</span>
}