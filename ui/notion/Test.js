const list = {
  one:  "1",
  two: "2",
  three: "3"
}


export default function Test({ items }){

  return <div class="grid grid-cols-2 gap-4">{ items.map(item => {
    return list.hasOwnProperty(item) ? <div>{ list[item] }</div> : null })
  }</div>

}