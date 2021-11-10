import Header from 'ui/templates/Header'
import Footer from 'ui/templates/Footer'
import Head from "next/head"
import { useHideMenuOnRouteChange } from "ui/templates/MobileMenu"
import { SSRProvider } from '@react-aria/ssr'

export default function Layout({ children, includeHeader = true, includeNav = true, mode = "dark" }) {
  useHideMenuOnRouteChange()
  // useUpdateFocusOnRouteChange()

  return <SSRProvider>
    <Head>
      <link href="/fonts.css" rel="stylesheet"/>
    </Head>
    { includeHeader && <Header includeNav={ includeNav } mode={ mode } ></Header> }
    { children }
    <Footer />
  </SSRProvider>
}