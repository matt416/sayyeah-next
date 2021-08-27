import style from "./Quoted.module.css"
export default function Quoted({ className, children }){

  return <span className={ `${style.quoted} ${className}` }>{ children }</span>

}