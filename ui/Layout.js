import React from 'react'
import Header from 'ui/components/Header'
import Footer from 'ui/components/Footer'

import { useHideMenuOnRouteChange } from "ui/components/MobileMenu"
import { SSRProvider } from 'react-aria'

const Layout = ({ children, includeHeader = true, includeNav = true, mode = "dark", className }) => {
  useHideMenuOnRouteChange()

  return <SSRProvider>
    <div className={`grid grid-cols-1 ${className}`}>
    { includeHeader && <Header includeNav={ includeNav } mode={ mode } className="stack-header-and-main-using-grid z-50" ></Header> }

    { children }
    </div>
    <Footer />
  </SSRProvider>

}
export default Layout


// useUpdateFocusOnRouteChange()

// return (
//   <SSRProvider>
//     <ClipPaths />
//     {/* { preview && <PreviewNotice /> } */}
//     <div id="top" tabIndex={-1}></div>
//     <Header />
//       { children }
//     <Footer />

//     {/* <Overlay/> */}
//   </SSRProvider>
// )