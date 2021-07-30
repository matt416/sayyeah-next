import clsx from 'clsx'

export default function Button({ children, className }){
  return <a href="#" className={ clsx("inline-flex min-h-[2rem] font-bold items-center justify-center bg-yeah-cola text-white px-6 py-2 rounded", className) }>{ children }</a>
}
