import { Text } from "./Text"
import RenderBlock from "ui/notion/RenderBlock"

export default function ListItem({ value }) {
  return <li>
    <Text text={value.text} />
    { value.children?.map((block) => (
    <RenderBlock key={ block.id } block={ block }/>
    ))}
  </li>
}