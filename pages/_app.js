import 'tailwindcss/tailwind.css'
import '../global.css'
import { DefaultSeo } from 'next-seo';
import { useRouter } from 'next/router'
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
      titleTemplate="%s | Say Yeah!"
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
    <Component {...pageProps} />
    </>
  )
}

export default MyApp
