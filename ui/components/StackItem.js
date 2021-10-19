import { traits } from 'helpers/traits'

const STACKITEM_TRAITS = traits({
  default : "w-full flex justify-center px-4 py-16",
// gutter: {
//   default: 'py-16',
// },
  divide: {
    true: "border-b border-black border-opacity-5"
  },
// bgColor: {
//   yellow: 'bg-sy-yellow',
//   black: "bg-black",
//   cola: "bg-sy-earth",
//   white: "bg-white",
// },
// textColor: {
//   black: "text-black",
//   white: "text-white"
    // default: 'bg-sy-yellow text-black',
    // black: 'bg-black text-white',
    // cola: 'bg-sy-earth text-white'
// }
})



export default function StackItem({ children, divide, className, image, ...props }){

  const style = {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "50% 50%",
    backgroundRepeat: "no-repeat",
  }

  return (
    <div className={ STACKITEM_TRAITS.apply({ divide }, className) } style={ image ? style : {} } { ...props }>
        { children }
    </div>
  )
}