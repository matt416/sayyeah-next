import { useEffect, useRef } from "react"
import styles from "./Carousel.module.css"
import clsx from 'clsx'
import { cssVariable } from 'helpers/cssVariable'
import { isClient } from 'helpers/isClient'

export default function Carousel({ children, className }){
  const carousel = useRef(null)
  const style = { /* "--variable" : "value" */} // Modify css variables here

  // useEffect(() => {
  //   if (isClient) {
  //     cssVariable(carousel.current, '--card-size', '300px')
  //   }
  // })

  return <div className={ clsx(styles.carousel, className) } ref={ carousel } style={ style }>
    <div className={ styles.content }>
      { children }
    </div>
  </div>
}