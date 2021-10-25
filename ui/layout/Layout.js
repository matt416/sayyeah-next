import Header from 'ui/templates/Header'
import Footer from 'ui/templates/Footer'

import { useHideMenuOnRouteChange } from "ui/templates/MobileMenu"
import { SSRProvider } from 'react-aria'

export default function Layout({ children, includeHeader = true, includeNav = true, mode = "dark" }) {
  useHideMenuOnRouteChange()
  // useUpdateFocusOnRouteChange()

  return <SSRProvider>
    { includeHeader && <Header includeNav={ includeNav } mode={ mode } ></Header> }

    { children }
    <Footer />
  </SSRProvider>

}