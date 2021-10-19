import React from "react"
import { useId } from "react-aria"
import Link from "next/link"

const mapViewBox = viewBox => {

  if (!viewBox) return {}

  const [x, y, width, height] = viewBox?.split(" ")

  return { x, y, width, height }

}

export default function AccessibleSvg({ id, children, href, width, height, viewBox, alt, className, preserveAspectRatio = "xMinYMin" }){
  const svgID = useId(id)

  const svg = React.Children.map(children, (child) => {
    if (child.type !== 'svg') { return false; } // Drop any children that aren't svg

    const dimensions = mapViewBox(child?.props?.viewBox) // Map viewbox string into an object

    // Remove existing title
    const children = React.Children.toArray(child.props.children).filter(n => n.type !== "title")
    // Add title with alt and id
    const title = alt !== false ? <title id={ svgID }>{ alt }</title> : null
    children.unshift(title)

    return React.cloneElement(child, { ...child.props, ...{
        role: "img",
        preserveAspectRatio,
        "aria-labelledby" : alt !== false ? svgID : null,
        "aria-hidden": alt === false ? true : null,
        focusable: "false",
        width: width ? width : dimensions.width, // If there is no explicit width or height, use the viewbox
        height: height ? height : dimensions.height,
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: viewBox ? viewBox : child?.props?.viewBox,
        className,
      }
    }, children)
  }).filter(item=>item)

  return href ? React.createElement(Link, { href },
    React.createElement('a', { "aria-labelledby": svgID, children: svg })
  ) : svg




}