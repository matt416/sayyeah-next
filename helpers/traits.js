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

}

_Traits.prototype = {
  apply(values = {}, additionalClasses = false) {
    if (!this.traitsList) return undefined
    const result = Object.keys(this.traitsList).map(key => {
      if (key == 'default') return this.traitsList[key]
      const prop = values.hasOwnProperty(key) && values[key] !== undefined ? values[key] : 'default' // If the passed in object has a property of the key name, that isn't undefined, otherwise use default
      return this.traitsList[key][prop]
    }).filter(item=>item)


    return clsx(result, additionalClasses)
  }
}


export const traits = (traitsList = false) => {
  return new _Traits(traitsList)
}
