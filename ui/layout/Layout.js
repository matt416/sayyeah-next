import Header from 'ui/components/Header'
import Footer from 'ui/components/Footer'

import { useHideMenuOnRouteChange } from "ui/components/MobileMenu"
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