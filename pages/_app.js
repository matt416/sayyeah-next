import 'tailwindcss/tailwind.css'
import '../global.css'
import { DefaultSeo } from 'next-seo';
import { useRouter } from 'next/router'
import Head from "next/head"
function MyApp({ Component, pageProps }) {
  const router = useRouter()

  const defaultCanonical = `${process.env.NEXT_PUBLIC_BASE_URL}${router.asPath}`
  return (
    <>
    <DefaultSeo
      openGraph={{
        type: 'website',
        locale: 'en',
        url: defaultCanonical,
        site_name: 'Say Yeah!',
      }}
      twitter={{
        handle: '@sayyeahto',
        site: '@sayyeahto',
        cardType: 'summary_large_image',
      }}
      defaultTitle="Say Yeah!"
      canonical={ defaultCanonical }
      additionalLinkTags={[
        {
          rel: 'icon',
          href: '/favicon/favicon.ico',
        },
        {
          rel: 'apple-touch-icon',
          href: '/favicon/apple-touch-icon.png',
          sizes: '180x180'
        },
        {
          rel: 'manifest',
          href: '/favicon/manifest.webmanifest'
        }
      ]}
    />
    <Head>
      { process.env.NODE_ENV === 'production'
        ? <script async defer data-website-id="c6ced2e3-7833-4b82-80cf-aa02ea98fb5d" src="https://umami-lac.vercel.app/umami.js"></script>
        : null
      }
    </Head>
    <Component {...pageProps} />
    </>
  )
}

export default MyApp
