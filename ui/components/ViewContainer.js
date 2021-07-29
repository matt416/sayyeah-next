import { traits } from 'helpers/traits'

const TRAITS = traits({
  default : "w-screen flex justify-center px-4",
  gutter: {
    default: 'py-16',
  },
  theme: {
    default: 'bg-yeah-yellow text-black',
    yellow: 'bg-yeah-yellow text-black',
    black: 'bg-black text-white',
    cola: 'bg-yeah-cola text-white'
  }
})

export default function ViewContainer({ children, theme, className, ...props }){

  return (
    <div className={ TRAITS.apply({ theme }, className) } { ...props }>
      { children }
    </div>
  )
}