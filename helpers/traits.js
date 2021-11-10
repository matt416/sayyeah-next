import clsx from 'clsx'

/***
Pass a object of traits, all keys of "default" will be applied if no corresponding key exists in props, or if the value in props is not present.
If a value is passed from props that does not exist, nothing will be applied, and no error thrown.

props {
  colour: "red",
  size: "lg"
}

traits {
  default : "no-underline py-2 px-4 rounded-lg",
  colour: {
    default: 'bg-red-500 text-white',
    "red": "bg-red-500 text-white",
    "white": "bg-white text-red-700",
  },
  size: {
    default: 'text-base',
    "lg" : 'text-lg'
  }
}

result will be ["no-underline py-2 px-4 rounded-lg", "bg-red-500 text-white", "text-lg"] as a clsx output

additionalClasses can be an array or string of classes that will always be applied

 */


const _Traits = function(traitsList = false) {

  this.traitsList = traitsList
  this.defaultTraits = {}


}

_Traits.prototype = {
  apply(_props = {}, ...additionalClasses) {
    const props = {...this.defaultTraits, ..._props }

    if (!this.traitsList) return undefined
    const result = Object.keys(this.traitsList).map(key => {
      // if (key == 'default') return this.traitsList[key]

      // const prop = props.hasOwnProperty(key) && props[key] !== undefined ? props[key] : false//'default' // If the passed in object has a property of

      const prop = props.hasOwnProperty(key) ? props[key] : false

      if (!prop) return null // If the passed key doesn't exist on the incoming props, return nothing

      // Allow arbitrary style overrides by returning the prop value when the traitslist has no matching property
      return this.traitsList[key].hasOwnProperty(prop) ? this.traitsList[key][prop] : prop

      // return this.traitsList[key][prop] : key


    }).filter(item=>item)

    return clsx(result, ...additionalClasses)
  },
  defaults(values = {}, props) {
    this.defaultTraits = values

    if (!props) { return; }

    return removeUsedProps(props, this.traitsList)

  }
}

export const traits = (traitsList = false) => {
  return new _Traits(traitsList)
}

const removeUsedProps = (props, list) => {
  const remaining = {...props}

  for (var key in remaining) {
      if (list.hasOwnProperty(key)) {
        delete remaining[key]
      }
    }
  return remaining
}

export const splitStyleAndAttributes = (props, defaults) => {

  const attributes = {...props}

  // Remove any style related props
  for (var key in defaults) {
    if (attributes.hasOwnProperty(key)) {
      delete attributes[key]
    }
  }

  return [{...defaults, ...props}, attributes]

}
