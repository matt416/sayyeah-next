import Checkout from "ui/components/Checkout"
import Layout from "ui/Layout"
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
    />

    {/* <Header includeNav={ false } mode="light" /> */}
    <main id="main-content">
      <Checkout />
    </main>
  </Layout>
}