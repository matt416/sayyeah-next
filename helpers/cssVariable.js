export function cssVariable(node, property, set){
  try {

    if (node instanceof HTMLElement === false) {
      throw new Error('Not a valid HTMLElement');
    }

    if (set) {
      node.style.setProperty(property, set)
    } else {
      getComputedStyle(node).getPropertyValue(property)
    }
  } catch(e){
    console.log(e)
  }
}