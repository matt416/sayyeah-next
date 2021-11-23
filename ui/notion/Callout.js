import { Text } from "./Text"
import RenderBlock from "./RenderBlock"

function Do({ children }){
  return <div className="bg-green-100 p-4 rounded-lg">
  <span className="text-lg block mb-4 font-bold">✅ Do</span>
    { children }
  </div>
}

function Dont({ children }){
  return <div className="bg-red-100 p-4 rounded-lg">
  <span className="text-lg block mb-4 font-bold">⛔ Don't</span>
    { children }
  </div>
}

const variants = {
  "✅" : Do,
  "⛔" : Dont,
}

export default function Callout({ value, block }) {

  const variant = value.icon[value.icon.type]
  const Variant = variants.hasOwnProperty(variant) ? variants[variant] : 'div'

  return <Variant value={ value } block={ block }>
    <Text text={ value.text }/>
    {value.children?.map((block) => (
      <RenderBlock key={ block.id } block={ block }/>
    ))}
  </Variant>
}

