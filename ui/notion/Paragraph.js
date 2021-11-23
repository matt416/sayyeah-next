import { Text } from "./Text"
export default function Paragraph({ value }) {
  return <p><Text text={value.text} /></p>
}