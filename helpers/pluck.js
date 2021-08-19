export default function pluck (items, selections) {
  return selections.map(item => items.hasOwnProperty(item) ? items[item] : false).filter(item => item)
}