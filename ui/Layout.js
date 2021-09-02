import React from 'react'
import Head from 'next/head'
import Header from 'ui/components/Header'
import { useHideMenuOnRouteChange } from "ui/components/MobileMenu"
import { SSRProvider } from 'react-aria'
const Layout = ({ children, title = "Say Yeah" }) => {
  useHideMenuOnRouteChange()

  return <SSRProvider>
    <Head>
      <title>{ title }</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Header></Header>

    { children }

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