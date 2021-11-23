import { Text } from "./Text"

export default function Blockquote({ value, block }) {

  return <blockquote><Text text={ value.text }/></blockquote>
}