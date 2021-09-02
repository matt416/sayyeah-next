import { useId } from '@react-aria/utils'

export default function SVG({ alt, width, height, children, ...props }) {
  const htmlId = useId()
  const titleIsDefined = typeof alt !== 'undefined' // If set to empty string, set as if empty alt tag.

  return <svg width={width} height={height} fill="none" xmlns="http://www.w3.org/2000/svg" focusable="false" role="img" aria-labelledby={ titleIsDefined ? htmlId : null } {...props}>
    { titleIsDefined && <title id={htmlId}>{ alt }</title>}
    { children }
  </svg>

}