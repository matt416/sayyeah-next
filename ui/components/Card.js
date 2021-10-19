import clsx from "clsx";
import { traits, splitStyleAndAttributes } from "helpers/traits";
import { useEffect, useRef, useState, forwardRef } from "react";

const TRAIT = traits({
  bg: {
    white: "bg-white",
  }
})

const Card = forwardRef(({ bg, children, className }, ref) => {

  const [defaults, attributes] = splitStyleAndAttributes({ ...bg }, {
    bg: "white"
  })


  // const ref = useRef()
  // const [state, setState] = useState({})
  // useEffect(() => {
  //   // console.log(ref.current.getBoundingClientRect())

  //   // setState(ref.current.getBoundingClientRect())
  // })
//ref={ ref }
  return (
    <div data-type="card" className={ TRAIT.apply(defaults, `rounded-lg overflow-hidden ${className}` )} ref={ ref }>
      { children }
    </div>
  )
})

const TRAIT_PHOTO = traits({
  default: "flex items-stretch relative",
  aspect: {
    default: 'pb-[56.25%]',
    "4/3": 'pb-[75%]',
    "16/9": 'pb-[56.25%]'
  }
})

Card.Photo = function({ aspect, src = 'https://source.unsplash.com/random/400x225' }){
  return <div className={ TRAIT_PHOTO.apply({ aspect }) }>
    <img src={ src } className="object-cover w-full h-full absolute inset-0" />
  </div>
}

Card.Content = function({ children, className }){
  return <div className={ clsx("p-4", className)}>
    { children }
  </div>
}

export default Card