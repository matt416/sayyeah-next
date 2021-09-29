import React from 'react'

import Layout from 'ui/Layout'
import { NextSeo } from "next-seo"
import Header from "ui/components/Header"

import Button from "ui/components/Button"


const EssentialAuditCard = ({ className }) => <div className={ `flex flex-col md:col-span-2 bg-gradient-to-b from-blue-50 to-blue-50-10% rounded-xl p-6 ${className}` }>
  <h3 className="text-24 font-bold mb-4">Get the essential website audit</h3>
  <p className="mb-4">Answer these two critical questions:</p>
  <ul className="text-18 font-bold space-y-2 mb-4 list-inside">
    <li>Is your website broken?</li>
    <li>How can you fix it?</li>
  </ul>
    <Button href="/" className="bg-black text-white col-span-2 text-18">Buy now for $499 <span className="sr-only">The essential website audit </span></Button>
</div>
//className={`h-[0] px-6 z-50 relative ${ mode == 'dark' ? 'text-white' : 'text-black'}`}
//pt-[128px] md:pt-[192px]
export default function EssentialAudit(){
  return <Layout includeHeader={ false }>
    <NextSeo
      title="The Essential Website Audit. 90% of websites are broken. Is yours?"
      description="The Essential Website Audit answers these two critical questions: Is your website broken? How can you fix it? Order today."
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


    <Header mode="light" className="bg-gradient-image-essential-heading ">
    <h1 className="sr-only">The Essential Website Audit</h1>
      <section className="pb-12  md:pb-16 flex px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-screen-xs md:max-w-screen-md mx-auto items-end">

          <div className="flex flex-col space-y-6">
            <h2 className="text-28 md:text-32 font-bold">Over 90% of websites are fundamentally broken</h2>
            <div>
            <p className="mb-2">This means over 90% of websites have issues that are a combination of:</p>
            <ol className="list-decimal list-outside space-y-2 pl-[1.1em]">
              <li>actively preventing people from accessing content</li>
              <li>poor performance that causes visitors to give up using the site</li>
              <li>not easily usable by many people</li>
              <li>difficult to manage and improve</li>
            </ol>
            </div>
            <p className="text-24 font-bold">What about your site?</p>
          </div>

          <div className="flex flex-col text-20 bg-white rounded-xl p-6">
            {/* <h3 className="text-24 font-bold mb-2">Get the essential website audit</h3> */}
            <p className="mb-4">The Essential Website Audit answers these two critical questions:</p>
            <ul className="font-bold space-y-2 mb-4 list-inside">
              <li>Is your website broken?</li>
              <li>How can you fix it?</li>
            </ul>
            <p className="mt-4 mb-6">Get the answers for just <span className="font-bold">$499</span></p>

            <Button href="/checkout/" className="bg-black text-white">Buy now  <span className="sr-only">Buy the essential website audit for $499</span></Button>
          </div>


        </div>
      </section>

    </Header>
    <main id="main-content">

      <section className="py-12 md:py-16 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12  max-w-screen-xs md:max-w-screen-md mx-auto min-h-full content-center">
          <h2 className="text-28 md:text-32 font-bold col-span-full">What you’ll learn from the audit</h2>


          <div className="flex flex-col space-y-4">
            <a href="/">
            <img src="/_public/audit/hurt-browser.svg" alt="Hurt" width="88" height="64"/>
            </a>
            <h3 className="text-24 font-bold">Is your website fundamentally broken?</h3>
            <p>The Inclusive Website essential website audit reviews your content, design, and code to consider performance, usability, accessibilty, inclusivity, and ongoing management.</p>
            <p>We’ll let you know if there are critical issues you can fix to improve website access and engagement.</p>
          </div>

          <div className="flex flex-col space-y-4">
            <img src="/_public/audit/healed-browser.svg" alt="" width="88" height="64"/>

            <h3 className="text-24 font-bold">What’s the best approach to fixing your website?</h3>
            <p>Your website is delivered by code that impacts performance, usability, accessibility, and management. If this code is not structured based on well established standards you may not be able to fix your website without incurring great expense.</p>
            <p>We’ll offer our expertise to let you know if working with your current website may be the way to go or if it may be more economical and rewarding to redo your website.</p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 px-6">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12  max-w-screen-xs md:max-w-screen-md mx-auto min-h-full items-start justify-items-center">
          <h2 className="sr-only">Our essential website audit approach</h2>


          <div className="flex flex-col space-y-12 md:col-span-3">
            <div className="space-y-4">
              <h3 className="text-24 font-bold">How do we assess your website for issues?</h3>
              <p>We leverage a combination of practice, experience, content, web, and code standards. Our experienced staff review your site across all of these measures in order to answer the questions above.</p>
              <p>In addition to our manual test process, we use automated testing and  accessible technology (including screen readers) to test your website.</p>
              <p>This ensures that we simulate how real users will interact with your website to create an accurate assessment.</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-24 font-bold">How can we recommend an approach to fixing it?</h3>
              <p>We are able to recommend an approach based on decades of experience developing accessible and inclusive websites. We have an  understanding of platform limitations as well as the requirements for having a usable, accessible and inclusive website. Additionally, all recommendations are informed by a discussion with you on your team, resources, and approach before making a recommendation.</p>
            </div>
          </div>

          <EssentialAuditCard />
        </div>

      </section>

      <section className="py-12 md:py-16 px-6 bg-gradient-to-b from-blue-50 to-blue-50-10%">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12  max-w-screen-xs md:max-w-screen-md mx-auto min-h-full items-start">
          <div className="col-span-full max-w-screen-sm space-y-4">
            <h2 className="text-28 md:text-32 font-bold">How does it impact my customers if my website is broken?</h2>
            <p>Your site can be used and loved by even more people, and you can avoid alienating or excluding potential customers, here’s how</p>
          </div>

          <div className="flex flex-col space-y-4">
            <img src="/_public/audit/prevent.svg" alt="" width="64" height="64"/>
            <h3 className="text-24 font-bold">
              Your site may be actively preventing people from accessing your website content, limiting market access and engagement
            </h3>
            <p>
              By not working to build out the accessibility, inclusivity, and multiple methods of accessing the content across your website, you may be preventing large groups of customers from being able to effectively engage with your content—and transact with your organization.
            </p>
          </div>

          <div className="flex flex-col space-y-4">
            <img src="/_public/audit/poor-performance.svg" alt="" width="64" height="64"/>

            <h3 className="text-24 font-bold">
              Poor performance that makes people give up using your site
            </h3>
            <p>
              The performance, or lack there of, of your website can greatly impact user retention. If people are frustrated with load times, or can’t complete their goals in a reasonable time span, they likely won’t come back to your website. Worse still, they may advocate for others to avoid your website and your organization.
            </p>
          </div>

          <div className="flex flex-col space-y-4">
            <img src="/_public/audit/not-usable.svg" alt="" width="64" height="64"/>

            <h3 className="text-24 font-bold">
              Not easily usable by many people
            </h3>
            <p>
              A website needs to be usable by your entire audience of customers if you want them to make purchases, complete their goals, or be loyal customers of your product or service. If your site isn’t responsive, fast, and easy to use for all, you won’t be able to meet these objectives.
            </p>
          </div>

          <div className="flex flex-col space-y-4">
            <img src="/_public/audit/difficult-improvement.svg" alt="" width="64" height="64"/>

            <h3 className="text-24 font-bold">
              Difficult to make changes and improve
            </h3>
            <p>
              Websites, depending on the platform they’re built on and how they are developed, can have exponential costs to maintain and to retrofit to be accessible and inclusive. If your site is built to be accessible and inclusive from the start, you can avoid these enormous costs.
            </p>
          </div>

        </div>
      </section>

      <section className="py-12 md:py-16 px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-4 max-w-screen-xs md:max-w-screen-md mx-auto min-h-full">
          <h2 className="text-28 md:text-32 font-bold col-span-full">Get started today</h2>

          <EssentialAuditCard />

          <div className="flex flex-col md:col-span-3 bg-gradient-to-b from-yellow-50 to-yellow-50-10% rounded-xl p-6">
            <h3 className="text-24 font-bold mb-4">Inclusive Website Design Service</h3>
            <p className="mb-4">Our inclusive website design service will guide your team through creating a comprehensive, accessible, and inclusive website design, and will also support your team in developing and making the site live.</p>
              <Button href="https://sayyeah.com/approach/inclusive-design/" className="bg-black text-white mt-auto mb-0">Learn more<span className="sr-only"> about Inclusive Web Design</span></Button>
          </div>
        </div>
      </section>

    </main>
    <footer></footer>
  </Layout>
}