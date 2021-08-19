import Head from 'next/head'
import Header from 'ui/components/Header'

import RowResolver from "ui/components/RowResolver"
import { useGetStaticPaths, useGetStaticProps } from 'helpers/fetchData'

export default function Home({ data }) {

  return (
    <>
      <Head>
        <title>Say Yeah</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header></Header>

      <main className="flex flex-col items-center justify-center w-full flex-1">
        <RowResolver data={ data } />
      </main>
    </>
  )
}

export async function getStaticProps({ params }) {
  return {
    props: {
      data: await useGetStaticProps({ type: "pages", slug: params.slug })
    },
    revalidate: 1,
  }
}

export async function getStaticPaths(){
  return {
    paths: await useGetStaticPaths({ type: "pages" }),
    fallback: false
  }
}