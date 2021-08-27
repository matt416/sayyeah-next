import React from 'react'
import Head from 'next/head'
import Header from 'ui/components/Header'

const Layout = ({ children, title = "Say Yeah" }) =>
  <>
    <Head>
      <title>{ title }</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Header></Header>

    { children }

    {/** <Footer></Footer> */}
  </>

export default Layout