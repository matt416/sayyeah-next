export function getItemsFromList(items, list) {

  return items.map(item => {
    if (list.hasOwnProperty(item)) {
      return list[item]
    }
    return false

  }).filter(item=>item)

}