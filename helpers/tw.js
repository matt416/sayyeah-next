
const isObject = (obj) => typeof obj === 'object' && !Array.isArray(obj) && obj !== null
const isArray = (obj) => Array.isArray(obj);
const isString = (obj) => typeof obj === "string" || obj instanceof String
const toKebabCase = (s) => s.replace(/\.?([A-Z]+)/g, function (x,y){return "-" + y.toLowerCase()}).replace(/^-/, "");

const utilityCustomPrefixMap = {
  cols: "grid-cols",
  gap: "gap",
  maxWidth: "max-w",
  width: "w",
  height: "h",
  textSize: "text",
  textColor:"text",
  bgColor:"bg"
}

const utilityWithoutPrefix = ['display']

const mapKeyToUtility = (key) => {

  // Custom mappings
  if (utilityCustomPrefixMap.hasOwnProperty(key)) return utilityCustomPrefixMap[key]

  // Un-prefixed utilties return false
  if (utilityWithoutPrefix.includes(key)) return false

  // Use prop key as the utility prefix as a fallback for any non-matching
  return toKebabCase(key)

}

const splitModifiers = (list) => {

}

const twAssembleUtilityClass = (screen, prefix, value) => {
  // TODO Add states and properties, focus, dark, motion, checked, etc.

  const classParts = []

  if (screen !== 'xs' && screen) { classParts.push(`${screen}:`) }
  if (prefix) { classParts.push(`${prefix}-`) }
  classParts.push(value)

  return classParts.join('') // Convert the parts array into a string

}


const twParse = (propKey, classes) => {
  if (!classes) { return }

  // Key is the prop name, it will get mapped to the utility prefix
  const utilityPrefix = mapKeyToUtility(propKey)


  /** Is a string */
  if (isString(classes)) {
    return twAssembleUtilityClass(false, utilityPrefix, classes)
  }

  if (isArray(classes)) {
    return splitModifiers(classes)
  }

  /** Is an object for responsive screen sizes */
  if (isObject(classes)) {
    return Object.keys(classes).map(screen => { return twAssembleUtilityClass(screen, utilityPrefix, classes[screen])})
  }

  return;

}


// Create an array of objects, then merge the array down to a single object of keys
// const getRelevantProps = (props, defaults) => Object.assign(...Object.keys(defaults).map(key => ({ [key]: props[key] })))

const getRelevantProps = (props, defaults) => {
  const relevantProps = {}

  const defaultsAndPresets = { ...utilityCustomPrefixMap, ...defaults }

  for (var key in defaultsAndPresets) {
    if (defaultsAndPresets.hasOwnProperty(key) && props.hasOwnProperty(key)) {

      relevantProps[key] = props[key]
    }
  }

  return relevantProps

}

export const splitClassesAndAttributes = (props, defaults) => {

  const classes = Object.keys(defaults).map(prop => props.hasOwnProperty(prop) ? props[prop] : defaults[prop]).filter(item=>item)

  const attributes = {...props}

  for (var key in defaults) {
    if (attributes.hasOwnProperty(key)) {
      delete attributes[key]
    }
  }

  return [classes, attributes]

}

export const twClasses = (props, defaults) => {

  /** Look at all props that were passed, but only use the ones that have a matching default key */

  const merged = { ...defaults, ...getRelevantProps(props,defaults) }

  return Object.keys(merged).map(key => {

    console.log(twParse(key, merged[key]))

  return twParse(key, merged[key])

}).filter(item => item) }
