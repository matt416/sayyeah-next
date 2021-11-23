import RenderBlock from "ui/notion/RenderBlock"

export default function Column({ value, block }){
  return <div>{value.children?.map((block) => (
    <RenderBlock key={ block.id } block={ block }/>
  ))}</div>
}
