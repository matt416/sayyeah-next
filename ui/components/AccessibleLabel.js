import { isString } from "helpers/isType"

export default function AccessibleLabel({ children }) {

  if (!isString(children)) return <>{ children }</>

  const [label, srLabel] = children.split("|")

  return <>{ label } { srLabel ? <span className="sr-only">{ srLabel }</span> : null }</>
}