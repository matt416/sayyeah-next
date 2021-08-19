import * as rows from "ui/rows"
const allRows = { ...rows }
export default function RowResolver({ data }){
  return Object.keys(data).map(item => {


    const Component = allRows.hasOwnProperty(item) ? allRows[item] : false

    if (Component){
      return <Component data={ data[item] } />
    }

    return null

  })
}
