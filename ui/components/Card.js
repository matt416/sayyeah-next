import clsx from "clsx";
import { traits } from "helpers/traits";

const TRAIT = traits({
  default: "rounded-lg overflow-hidden",
  bg: {
    default: "bg-white"
  }
})

function Card({ children, className }){
  return (
    <div className={ TRAIT.apply({}, className )}>
      { children }
    </div>
  )
}

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