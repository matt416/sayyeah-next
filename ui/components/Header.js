import Link from 'next/link'
import SkipBlock from 'ui/components/SkipBlock'
import mainMenu from "data/en-ca/collections/mainmenu.json"
import { MobileMenu, useMobileMenuStore } from './MobileMenu'
import SayYeahLogo from 'ui/svg/sayyeah-logo'

export function Navigation({ name, mode = "dark" }){
  return <nav aria-label={ name } className="md:flex items-center hidden">
    <ul className="flex space-x-8 text-lg py-4">
      { mainMenu.map((item, key) =>
          <li key={ key }>
              <a  href={ item.href } className={` px-4 py-2 rounded ${ mode == 'dark' ? "hover:bg-white hover:text-black" : "hover:bg-black hover:text-white"}`}>
                { item.label }
              </a>
          </li>
        )}
    </ul>
  </nav>
}

export default function Header({ mode = "dark", children, className, includeNav = true }){
  const toggleMobileMenu = useMobileMenuStore(state => state.toggle)

  return <>
    <SkipBlock target="#main-content" />
    <header className={ className }>

    {/* <header className={`h-[0] px-6 z-50 relative ${ mode == 'dark' ? 'text-white' : 'text-black'}`}> */}
    {/* <header className="max-w-[60rem] mx-auto flex justify-between items-center"> */}
    {/* <div className="bg-black text-white w-full px-4"> */}
    <div className="max-w-screen-xs md:max-w-screen-md mx-auto pt-4 flex items-start justify-between pb-12">

      <a href="/"  className="ml-[-21px] md:hidden" aria-label="Say Yeah! Home" >
        <SayYeahLogo alt="Say Yeah! Home" width="36" height="78" />
      </a>

      <a href="/" className="ml-[-28px] hidden md:block" aria-label="Say Yeah! Home" >
        <SayYeahLogo alt="Say Yeah! Home" width="48" height="104" />
      </a>


      { includeNav && <>
        <Navigation name="Header" mode={ mode } />

        <div className="md:hidden py-4">
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
                <a href={ item.href } className={` px-4 py-2 rounded flex min-h-[3rem] items-center ${ mode == 'dark' ? "hover:bg-white hover:text-black" : "hover:bg-black hover:text-white"}`}>
                  { item.label }
                </a>
            </li>
          )}
        </ul>
      </MobileMenu> }

      { children }
    </header>



  </>
}
