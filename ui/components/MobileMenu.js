import { useEffect, useRef } from 'react'
import Router from 'next/router'
import clsx from 'clsx' // ClassName assignment
import create from 'zustand' // State management
import styles from './MobileMenu.module.css'
import { FocusScope } from '@react-aria/focus' // Limit tab indexs to the modal

// import { Icon } from 'ui/components'

// Import this store anywhere you want to refer to the menu.
// These controls show and hide the menu, and return if it's currently visible
export const useMobileMenuStore = create(set => ({
  isVisible: false,
  show: () => set(state => ({ isVisible: true })),
  hide: () => set(state => ({ isVisible: false })),
  toggle: () => set(state => ({ isVisible: !state.isVisible }))
}))

// Import this hook into the layout to trigger a delay
// on closing the menu until the route changes so it feels like
// a true page load, rather than closing the menu, then pausing,
// then transitioning to the new route.
export const useHideMenuOnRouteChange =() => {
  const hideMenu = useMobileMenuStore(state => state.hide)

  const callHideMenu = () => { hideMenu() }
  useEffect(() => {
    Router.events.on('routeChangeComplete', callHideMenu)
    Router.events.on('hashChangeComplete', callHideMenu)

    return () => {
      Router.events.off('routeChangeComplete', callHideMenu)
      Router.events.off('hashChangeComplete', callHideMenu)
    }
  })
}

const handleKeyUp = (key, callback, e) => {
  e.preventDefault()
  e.stopPropagation()
  const keys = Array.isArray(key) ? key : [key]
  if (keys.includes(e.code)) callback()
}


function useDismissKeyEffect(isActive, callback){
  useEffect(() => {
    const listener = (e) => handleKeyUp('Escape', callback, e)

    if (isActive) { window.addEventListener('keyup', listener) }
    return () => {  window.removeEventListener('keyup', listener) }
  }, [isActive])
}

function useScrollEffect(isMenuVisible){

  const containerRef = useRef(null)

  useEffect(() => {
    let timeout
    if (isMenuVisible) {
      document.body.style.overflow = "hidden"; // Disable body scrolling
      document.body.style.position = "fixed";
      document.body.style.width = "100vw";
      containerRef.current.style.overflow = "hidden" // Fix overflow scroll issue from animation (and Safari bug)
      timeout = window.setTimeout(() => { containerRef.current.style.overflow = null }, 300)
    } else {
      document.body.style.overflow = null;
      document.body.style.width = null;
      document.body.style.position = null;
    }

    return () => {
      clearTimeout(timeout)
    }

  }, [isMenuVisible])

  return containerRef

}



const MenuTitle = ({ label = "Menu", onClose }) => (
  <div className="font-bold px-6 py-4 border-b border-black border-opacity-5 bg-opacity-95 flex justify-between items-center w-full sticky top-0 bg-white">
    { label }
    <button type="button" onClick={ onClose } onKeyUp={ (e) => handleKeyUp('Space', onClose, e) }>
      {/* <Icon src="Close" alt="Close menu" /> */}
    </button>
  </div>
)

const Overlay = ({ onClose }) => <div className={`fixed inset-0 bg-black z-[1] ${styles.overlay}`} onClick={ onClose }></div>

export function MobileMenu({ children }){

  const [isMenuVisible, toggleMenu] = useMobileMenuStore(state => [state.isVisible, state.toggle])

  const containerRef = useScrollEffect(isMenuVisible)
  useDismissKeyEffect(isMenuVisible, toggleMenu)

  return (<>
    <FocusScope contain restoreFocus autoFocus>
      <div className={
        clsx(
          "flex fixed z-[3] h-full w-screen top-0 left-0 justify-stretch items-end",
          !isMenuVisible ? 'md:hidden invisible' : `${styles.open} visible`
        )}
        id={styles.mobileMenuContainer}
        ref={containerRef}
      >
        <Overlay onClose={ toggleMenu } />

        <nav
          aria-label="Primary"
          className={`mt-auto w-full bg-white z-[2] ${styles.menu}`}
        >
          <MenuTitle title="Menu" onClose={ toggleMenu } />

          { children }

        </nav>
      </div>
    </FocusScope>
  </>)
}