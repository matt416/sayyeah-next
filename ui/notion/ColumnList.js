import RenderBlock from "ui/notion/RenderBlock"

export default function ColumnList({ value, block }){
  const cols = value.children.length
  // TW JIT md:grid-cols-2 md:grid-cols-3 md:grid-cols-4

  return <div className={ `grid grid-cols-1 md:grid-cols-${ cols } w-full gap-8` }>
    {value.children?.map((block) => (
      <RenderBlock key={ block.id } block={ block }/>
      ))}
  </div>
}