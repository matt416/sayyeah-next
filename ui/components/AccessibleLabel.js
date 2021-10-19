export default function AccessibleLabel({ children }) {

  const [label, srLabel] = children.split("|")

  return <>{ label } { srLabel ? <span className="sr-only">{ srLabel }</span> : null }</>
}