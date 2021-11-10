import Checkout from "ui/components/Checkout"
import Layout from "ui/layout/Layout"
import { NextSeo } from "next-seo"
// import Header from "ui/components/Header"
// export default function Meta(
//   {
//     noindex = undefined,
//     nofollow = undefined,
//     title,
//     description,


//   }
// ) {

//   <NextSeo
//   />

// }

export default function Form(){
  return <Layout includeNav={ false } mode="light" className="bg-gradient-to-b from-blue-50 min-h-full">

    <NextSeo
      noindex={ true }
      nofollow={ true }
      title="Order the Essential Website Audit service from Say Yeah!"
      description="Order the Essential Website Audit today for $499.00. Fill out this form and continue to confirm how you can improve your website."
      openGraph={{
        images: [
          {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/img/og-essential-website-audit.png`,
            width: 1200,
            height: 627,
            alt: 'The Essential Website Audit from Say Yeah!',
          },
        ],
      }}
    />

    {/* <Header includeNav={ false } mode="light" /> */}
    <main id="main-content">
      <section className="pb-12">
        <Checkout />
      </section>
    </main>
  </Layout>
}