import { Text } from "./Text"
import RenderBlock from "ui/notion/RenderBlock"

export default function Toggle({ value }) {
  return <details>
    <summary>
      <Text text={value.text} />
    </summary>
    {value.children?.map((block) => (
      <RenderBlock key={ block.id } block={ block }/>
    ))}
  </details>
}