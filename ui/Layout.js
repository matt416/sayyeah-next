import React from 'react'
import Head from 'next/head'
import Header from 'ui/components/Header'
import { useHideMenuOnRouteChange } from "ui/components/MobileMenu"
import { SSRProvider } from 'react-aria'
import { NextSeo } from 'next-seo'

const Layout = ({ children, includeHeader = true, includeNav = true, mode = "dark", className }) => {
  useHideMenuOnRouteChange()

  return <SSRProvider>
    <div className={ className }>
    { includeHeader && <Header includeNav={ includeNav } mode={ mode }></Header> }

    { children }
    </div>
    {/** <Footer></Footer> */}
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