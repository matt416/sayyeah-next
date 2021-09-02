import { useEffect, useRef, useState, Children } from "react"
import styles from "./Carousel.module.css"
// import clsx from 'clsx'
import Arrow from "ui/svg/Arrow.svg"


import smoothscroll from 'smoothscroll-polyfill';

const nextClosest = (array, goal) =>
  array.find(item => item <= goal  ? false : true);

const prevClosest = (array, goal) => array.slice().reverse().find(item => item >= goal  ? false : true);

const closest = (direction = 'next', array, goal) =>
  direction === 'prev' ? prevClosest(array, goal) : nextClosest(array, goal)


export default function Carousel({ children, className, size }){
  const $carousel = useRef(null)
  const $items = useRef([]) // Array of refs for child nodes
  // const [currentItem, setCurrentItem] = useState(0)
  const style = size ? { "--card-size" : size } : {} // Modify css variables here
  const [navigationInactive, setNavigationInactive] = useState({ next: false, prev: false })

  useEffect(() => {
    // Fix for smooth scrolling in Safari.
    smoothscroll.polyfill();

    // const target = closest('prev', items, currentScrollPosition)

    // console.log(target, items)
    // setCurrentItem(items.indexOf(target))
    const currentScrollPosition = $carousel.current.scrollLeft

    const items = getItemPositions()
    // const target = closest(direction, items, currentItem ? currentItem : currentScrollPosition)
    const target = closest("next", items, currentScrollPosition)
    console.log(target)
    setNavigationInactive({
      next: items.indexOf(target) === $items.current.length - 1,
      prev: items.indexOf(target) === 0
    })
    // setCurrentItem(items.indexOf(target))
  }, [])

  const childrenWithRef = Children.map(children, (Child, index) => {
    return <Child.type { ...Child.props } key={index} ref={ el => $items.current[index] = el  }/>
  })

  const getItemPositions = () => {
    if ($items.current.length < 1) { return [] }

    const firstItemOffset = $items.current[0].offsetLeft
    return $items.current.map((item , i) => Math.round(item.offsetLeft - firstItemOffset))

  }

  const updateNavigationState = (items, target) {
    setNavigationInactive({
      next: items.indexOf(target) === $items.current.length - 1,
      prev: items.indexOf(target) === 0
    })
  }

  const getNavigationTarget = (direction) => {
    const currentScrollPosition = $carousel.current.scrollLeft

    const items = getItemPositions()
    const target = closest(direction, items, currentScrollPosition)

    updateNavigationState(items, target)

  }

  const scrollToItem = (e) => {
    if (!$items?.current || !$carousel.current) { return }

    const direction = e.currentTarget.getAttribute('data-direction')
    getNavigationTarget(direction)


    // setCurrentItem(target)
    $carousel.current.scrollTo({
      left: target,
      behavior: "smooth"
    })

    // setTimeout(()=>{
    //   setCurrentItem(null)
    // }, 300)

  }

  // const clearTarget = () => {
  //   if (currentItem) setCurrentItem(null)
  // }


return <>
  <div
    className={ `${styles.carousel} ${className} focus:ring-4 focus:ring-blue-500` }
    tabIndex="-1"
    ref={ $carousel }
    style={ style }
  >
    <div className={ styles.content }>
      { childrenWithRef }
    </div>
  </div>
    <div className="flex space-x-4 justify-center items-center h-12">
      <ArrowButton direction="prev" onClick={ scrollToItem } disabled={ navigationInactive.prev }></ArrowButton>
      <ArrowButton direction="next" onClick={ scrollToItem } disabled={ navigationInactive.next }></ArrowButton>
    </div>

  </>
}

const ArrowButton = ({ direction, onClick, className, disabled }) => {
  const disabledClass = disabled ? "opacity-50" : ''
  const directionClass = direction === "next" ? 'transform scale-x-[-1]' : ''

  return <button
    onClick={ onClick }
    data-direction={ direction }
    disabled={ disabled }
    className="focus:ring-4 focus:ring-blue-500 p-1 rounded-full"
    >
      <Arrow
        className={ `${directionClass} ${className} ${disabledClass}` }
        width="24"
        height="24"
      ></Arrow>
  </button>
}