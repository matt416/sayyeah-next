import SkipBlock from 'ui/components/SkipBlock'
import { MobileMenu, useMobileMenuStore } from './MobileMenu'
import Link from "next/link"
import SayYeahLogo from 'ui/svg/SayYeahLogo.svg.js'
import AccessibleSvg from 'ui/svg/AccessibleSvg'


const mainMenu = [
  { "label": "Solutions", "href": "/solutions/" },
  { "label": "Work", "href": "/work/" },
  { "label": "Insights", "href": "/digital-insights/" },
  { "label": "About", "href": "/about-us/" }
]

export function Navigation({ name, mode = "dark" }){
  return <nav aria-label={ name } className="sm:flex items-center hidden">
    <ul className="flex space-x-8 text-lg py-4">
      { mainMenu.map((item, key) =>
          <li key={ key }>
              <Link href={ item.href }><a className={` px-4 py-2 rounded ${ mode == 'dark' ? "hover:bg-white hover:text-black" : "hover:bg-black hover:text-white"}`}>
                { item.label }
              </a></Link>
          </li>
        )}
    </ul>
  </nav>
}

export default function Header({ mode = "dark", children, className, includeNav = true, style }){
  const toggleMobileMenu = useMobileMenuStore(state => state.toggle)

return <>
    <header className={ `h-[0] relative px-10 z-40 ${className} ${ mode == "dark" ? "text-white bg-black" : "text-black bg-white"}` } style={ style }>

    <SkipBlock target="#main-content" className="z-50"/>

    {/* <header className={`h-[0] px-6 z-50 relative ${ mode == 'dark' ? 'text-white' : 'text-black'}`}> */}
    {/* <header className="max-w-[60rem] mx-auto flex justify-between items-center"> */}
    {/* <div className="bg-black text-white w-full px-4"> */}
    <div className="max-w-screen-xs sm:max-w-screen-md mx-auto px-4 pt-4 flex items-start justify-between pb-12">

    <span className="md:hidden">
      <SayYeahLogo href="/" className="ml-[-21px]" alt="Say Yeah! Home" width="36" height="78"/>
    </span>
    <span className="hidden md:block">
      <SayYeahLogo href="/" className="ml-[-28px]" alt="Say Yeah! Home" width="48" height="104" />
    </span>

      { includeNav && <>
        <Navigation name="Main menu" mode={ mode } />

        <div className="sm:hidden py-4">
          <button
            className="px-4 py-2 rounded hover:bg-black hover:text-white"
            onClick={ () => toggleMobileMenu() }
            >
            Menu
          </button>
        </div>
      </>}
    </div>

    { includeNav && <MobileMenu>
        <ul className="flex flex-col text-lg p-2">
          { mainMenu.map((item, key) =>
            <li key={ key }>
                <Link href={ item.href }><a className={` px-4 py-2 rounded flex min-h-[3rem] items-center hover:bg-black hover:text-white text-black` }>
                  { item.label }
                </a></Link>
            </li>
          )}
        </ul>
      </MobileMenu> }

      { children }
    </header>



  </>
}
