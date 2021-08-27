import React from 'react'
import Head from 'next/head'
import Header from 'ui/components/Header'

export default function Layout ({ children }) {
  return <div className="bg-yellow">
    <Head>
        <title>Say Yeah</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <Header></Header>

    { children }</div>
}