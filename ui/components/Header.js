import Link from 'next/link'
import SkipBlock from 'ui/components/SkipBlock'
import mainMenu from "data/en-ca/collections/mainmenu.json"
import { MobileMenu, useMobileMenuStore } from './MobileMenu'

function Navigation({ name }){
  return <nav aria-label={ name } className="md:flex items-center hidden">
    <ul className="flex space-x-8 text-lg py-6">
      { mainMenu.map((item, key) => <Navigation.Item href={ item.href } key={key}>{ item.label }</Navigation.Item> )}
    </ul>
  </nav>
}

Navigation.Item = ({ children, href = "#" }) => (
  <li>
    <Link href={ href }>
      <a className="px-4 py-2 rounded hover:bg-yeah-yellow hover:text-black focus:outline-transparent focus:ring-4 focus:ring-yeah-yellow focus:text-white">
        { children }
      </a>
    </Link>
  </li>
)

export default function Header(){
  const toggleMobileMenu = useMobileMenuStore(state => state.toggle)

  return <>
    <SkipBlock target="#main-content" />
    <div className="bg-black text-white w-full px-4">
    <header className="max-w-[60rem] mx-auto flex justify-between items-center">
      <a href="/" className="font-bold text-lg">Say Yeah</a>
      <Navigation name="Primary" />

      <div className="md:hidden py-4">
        <button
          className="px-4 py-2 rounded hover:bg-yeah-yellow hover:text-black focus:outline-transparent focus:ring-4 focus:ring-yeah-yellow focus:text-white"
          onClick={ () => toggleMobileMenu() }
        >
          Menu
        </button>
      </div>
    </header>

  </div>

  <MobileMenu>
    <ul className="flex flex-col space-y-8 text-lg py-6">
      { mainMenu.map((item, key) => <Navigation.Item href={ item.href } key={key}>{ item.label }</Navigation.Item> )}
    </ul>
  </MobileMenu>
  </>
}
