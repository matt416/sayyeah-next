import { useId } from "react-aria"
export default function InlineSvg({ id, children, href, width, height, viewBox, alt, className, preserveAspectRatio = "xMinYMin" }){
  const svgID = useId(id)

  const _viewBox= viewBox ? viewBox : `0 0 ${width} ${height}`

  const _svg = ( <svg
    role="img"
    preserveAspectRatio={ preserveAspectRatio }
    aria-labelledby={ svgID }
    focusable="false"
    width={ width }
    height={ height }
    xmlns="http://www.w3.org/2000/svg"
    viewBox={ _viewBox }
    className={ className }
  >
    <title id={ svgID }>{ alt }</title>
    { children }
  </svg> )

  return href ? <a href={ href } aria-labelledby={ svgID }>{ _svg }</a> : _svg
}