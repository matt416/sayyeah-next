import { traits } from 'helpers/traits'

const TRAITS = traits({
  default : "w-full mx-auto",
  size: {
    default: 'max-w-[60rem]',
    md: 'max-w-[40rem]',
    lg: 'max-w-[60rem]',
    xl: 'max-w-[80rem]',
  }
})

export default function ViewContent({ children, size, className, ...props }){
  return (
    <div className={TRAITS.apply({ size }, className)} { ...props }>
      { children }
    </div>
  )
}