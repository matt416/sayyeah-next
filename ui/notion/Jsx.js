import dynamic from "next/dynamic"
import JsxParser from 'react-jsx-parser'

const components = {
  Meta: dynamic(() => import('/ui/notion/Meta')),
  Test: dynamic(() => import('/ui/notion/Test'))
}

export default function Jsx({ value }){

  const text = value.text.map(item => item.plain_text ).join(' ')

  return <JsxParser
      components={ components }
      jsx={ text }
  />
}