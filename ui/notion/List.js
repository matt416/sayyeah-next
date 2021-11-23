import RenderBlock from "ui/notion/RenderBlock"

export default function List({ value, block }) {

  const types = {
    bulleted_list: 'ul',
    numbered_list: 'ol',
  }

  const ListType = types[block.type]

  return <ListType>{
    value.children?.map((block) => (
      <RenderBlock key={ block.id } block={ block }/>
      ))}
  </ListType>
}