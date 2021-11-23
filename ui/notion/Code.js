import { Text } from "./Text"
export default function Code({ value, block }) {
  return <pre><code><Text text={value.text} /></code></pre>
}