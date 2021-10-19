import { useEffect, useRef, useState, Children, Fragment } from "react"
import styles from "./Carousel.module.css"
// import clsx from 'clsx'
import Arrow from "ui/svg/Arrow"

import smoothscroll from 'smoothscroll-polyfill';

const nextClosest = (array, goal) =>
  array.find(item => item <= goal  ? false : true);

const prevClosest = (array, goal) => array.slice().reverse().find(item => item >= goal  ? false : true); // .slice ensures we don't mutate and reverse the original array

const closest = (direction = 'next', array, goal) => {
  // Direction = next or prev
  return direction === 'next' ? nextClosest(array, goal) : prevClosest(array, goal)
}

/*** Determine if navigation button is enabled or not */
const useNavButtons = () => {
  const [next, setNext] = useState(false)
  const [prev, setPrev] = useState(false)

  const setNavButtons = (slides, target) => {
    // if (!slides || !target) { return }
    setNext(slides.indexOf(target) === slides.length - 1)
    setPrev(slides.indexOf(target) <= 0)
  }

  return [{ next, prev }, setNavButtons]
}

const useSmoothScroll = () => {
  useEffect(() => {
    // Fix for smooth scrolling in Safari.
    smoothscroll.polyfill();
  }, [])
}

export default function Carousel({ children, className, size }){
  useSmoothScroll()

  const [navButtons, setNavButtons] = useNavButtons()

  const refs = {
    carousel: useRef(null),
    slides: useRef([]), // Array of refs for child nodes
  }

  const style = size ? { "--card-size" : size } : {} // Modify css variables here

  const scrollToSlide = (direction) => {
    if (!refs.carousel.current) { return }

    const getSlidePositions = () => {
      // We check this with every interaction, as the exact positions can change when the screen is resized.
      if (refs.slides.current.length < 1) { return [] }

      // We check the offset of the first slide to see if there is any padding, and remove it from the scroll value
      const firstSlideOffset = refs.slides.current?.[0].offsetLeft || 0
      return refs.slides.current.map(
        (slide , i) => Math.round(slide.offsetLeft - firstSlideOffset)
      )
    }

    const getNextSlide = (direction) => {
      // Find the scroll position of the container
      const currentScrollPosition = refs.carousel.current.scrollLeft
      // Get the current left offset of all the slides (this can change when the screen is resized)
      const slidePositions = getSlidePositions()
      // Figure out which slide we should scroll to by looking for the closest slide to the current scroll poisiton
      const closestSlide = closest(direction, slidePositions, currentScrollPosition)

      // Update the state to toggle enabled/disable of the navigation buttons
      setNavButtons(slidePositions, closestSlide)
      return closestSlide
    }

    // Use SmoothScroll polyfill to ensure Safari scrolls nicely
    refs.carousel.current.scrollTo({
      left: getNextSlide(direction),
      behavior: "smooth"
    })
  }

  // Add a ref to each slide so we can measure it
  const slides = Children.map(children, (Child, index) =>
    <Child.type
      { ...Child.props }
      key={index}
      ref={ el => refs.slides.current[index] = el  }
    />
  )

  return <Fragment>
  <div
    className={ `${styles.carousel} ${className} focus:ring-4 focus:ring-blue-500` }
    tabIndex="-1"
    ref={ refs.carousel }
    style={ style }
  >
    <div className={ styles.content }>
      { slides }
    </div>
  </div>
    <div className="flex space-x-4 justify-center items-center h-12">
      <NavButton
        onClick={ () => { scrollToSlide("prev") } }
        disabled={ navButtons.prev }
      />
      <NavButton
        direction="next"
        onClick={ () => { scrollToSlide("next") } }
        disabled={ navButtons.next }
      />
    </div>
  </Fragment>
}

const NavButton = ({ direction, onClick, className, disabled }) => {
  const disabledClass = disabled ? "opacity-50" : ''
  const directionClass = direction === "next" ? 'transform scale-x-[-1]' : ''

  return <button
    onClick={ onClick }
    disabled={ disabled }
    className={ `focus:ring-4 focus:ring-blue-500 p-1 rounded-full ${className}` }
  >
    <Arrow
      className={ `${directionClass} ${disabledClass}` }
      width="24"
      height="24"
    />
  </button>
}