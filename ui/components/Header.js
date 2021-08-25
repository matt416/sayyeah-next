import Link from 'next/link'

import mainMenu from "data/en-ca/collections/mainmenu.json"

function Navigation({ name }){
  return <nav aria-label={ name } className="flex items-center">
    <ul className="flex space-x-8 text-lg py-6">
      { mainMenu.map(item => <Navigation.Item href={ item.href }>{ item.label }</Navigation.Item> )}
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
  return <div className="bg-black text-white w-full px-4">
    <header className="max-w-[60rem] mx-auto flex justify-between items-center">
      <span className="font-bold text-lg">Say Yeah</span>
      <Navigation name="Primary"/>
    </header>
  </div>
}
