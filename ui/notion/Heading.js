import { Text } from "./Text"

export default function Heading({ value, block }) {

  const types = {
    heading_1: 'h2',
    heading_2: 'h3',
    heading_3: 'h4'
  }

  const Htype = types[block.type]

  return <Htype><Text text={value.text} /></Htype>
}