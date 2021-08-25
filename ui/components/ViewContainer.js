import { traits } from 'helpers/traits'

const TRAITS = traits({
  default : "w-full flex justify-center px-4",
  gutter: {
    default: 'py-16',
  },
  divide: {
    true: "border-b border-black border-opacity-5"
  },
  bgColor: {
    yellow: 'bg-yeah-yellow',
    black: "bg-black",
    cola: "bg-yeah-cola",
    white: "bg-white",
  },
  textColor: {
    black: "text-black",
    white: "text-white"
    // default: 'bg-yeah-yellow text-black',
    // black: 'bg-black text-white',
    // cola: 'bg-yeah-cola text-white'
  }
})

export default function ViewContainer({ children, divide, theme, bgColor, textColor, className, ...props }){

  return (
    <div className={ TRAITS.apply({ theme, divide, bgColor, textColor }, className) } { ...props }>
      { children }
    </div>
  )
}