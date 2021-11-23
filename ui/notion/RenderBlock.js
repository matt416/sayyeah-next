import dynamic from "next/dynamic"

const Paragraph = dynamic(() => import('/ui/notion/Paragraph'))
const Heading = dynamic(() => import('/ui/notion/Heading'))
const Jsx = dynamic(() => import('/ui/notion/Jsx'))
const Code = dynamic(() => import('/ui/notion/Code'))
const List = dynamic(() => import('/ui/notion/List'))
const ListItem = dynamic(() => import('/ui/notion/ListItem'))
const Image = dynamic(() => import('/ui/notion/Image'))
const ColumnList = dynamic(() => import('/ui/notion/ColumnList'))
const Column = dynamic(() => import('/ui/notion/Column'))
const Todo = dynamic(() => import('/ui/notion/Todo'))
const Toggle = dynamic(() => import('/ui/notion/Toggle'))
const ChildPage = dynamic(() => import('/ui/notion/ChildPage'))
const Callout = dynamic(() => import('/ui/notion/Callout'))
const Video = dynamic(() => import('/ui/notion/Video'))
const Blockquote = dynamic(() => import('/ui/notion/Blockquote'))
const Divider = () => <hr/>
const ChildDatabase = ({ value, block }) => { return null }

export const defaultComponents = {
  paragraph: Paragraph,
  heading_1: Heading,
  heading_2: Heading,
  heading_3: Heading,
  jsx: Jsx,
  code: Code,
  bulleted_list: List,
  numbered_list: List,
  bulleted_list_item: ListItem,
  numbered_list_item: ListItem,
  to_do: Todo,
  toggle: Toggle,
  child_page: ChildPage,
  image: Image,
  divider: Divider,
  column_list: ColumnList,
  column: Column,
  callout: Callout,
  video: Video,
  quote: Blockquote,
  child_database: ChildDatabase
}

// Export the default components list as a new object
export const components = { ...defaultComponents }

export default function RenderBlock({ block, components = defaultComponents }){

  const { type, id } = block;
  const value = block[type];

  const Component = (components.hasOwnProperty(type)) ? components[type] : null

  return Component
    ? <Component type={ type } value={ value } id={ id } block={ block } />
    : process.env.NODE_ENV === "production" ? null : <>❌ Unsupported block { block?.type && block.type }</>
}