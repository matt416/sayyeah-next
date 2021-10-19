
import Layout from 'ui/layout/Layout'

import LinkButton from "ui/components/LinkButton"

import Hero from "ui/templates/Hero"
import RelatedServiceCards from 'ui/templates/RelatedServiceCards'
import ClientCards from 'ui/templates/ClientCards'

import Section from 'ui/layout/Section'
import Flex from 'ui/layout/Flex'
import Grid from 'ui/layout/Grid'
import Quote from 'ui/components/Quote'

export default function InclusiveWebsiteDesign(){

  return <Layout>

    <main tabIndex="-1" id="main-content">
      <Hero {...{
          image: { src: "/_public/heroes/inclusive-website-design.png" },
          title: "Inclusive website design",
          catchline: "Deliver a responsive, accessible, and delightful website that welcomes your entire market to engage with your content, products, and services."
        }}
      />

      <Section bgColor="bg-sy-earth" textColor="white">
        <Grid>
          <h2 className="max-w-readable text-32 text-sy-yellow font-bold col-span-full">Inclusive websites answer important organizational questions</h2>
          { [
            "Can we improve monetization of our website through new and optimized transactionals flows?",
            "How can our website help us grow customer engagement and retention?",
            "Can our website improve the efficiency of our marketing, sales, and support teams?",
            "Is our website accessible?"
          ].map((item, key) =>
            <Quote>{ item }</Quote>
          )}
          <div className="max-w-readable col-span-full text-20 text-sy-mocha space-y-4">
            <p>We’re here to help you answer these and other questions that help you realize the ROI of your website.</p>
            <LinkButton href="" bgColor="bg-sy-yellow" textColor="text-black">Get in touch</LinkButton>
          </div>
        </Grid>
      </Section>

      <Section bgColor="yellow">
        <Grid>
          <h2 className="text-32 font-bold col-span-full max-w-readable">The ROI of a well-crafted website</h2>

          <div className="space-y-4">
            <p>Websites are not just a marketing tool. It’s not enough to consider them as informational or storytelling for your brand.</p>
            <p>An effective website facilitates the efforts of many aspects of your business, from marketing to sales, product and service to support. There are aspects of pre and post-sales to be considered. And any number of audiences and individuals who make up the diverse market you serve.</p>
          </div>

          <div className="space-y-4">
            <p>Our comprehensive approach to website design helps you realize the ROI of your investment through:</p>

            <ul className="list-outside list-disc pl-[0.875rem]">
              <li>improved customer engagement</li>
              <li>more valuable transactional funnels</li>
              <li>streamlined content and content management</li>
              <li>standards-based processes that improve access to market and reduce mainenance costs over time, and</li>
              <li>analytics and other validation processes to prove value today while providing the data you need optimize your site over time</li>
            </ul>
          </div>
        </Grid>

      </Section>

      <Section bgColor="yellow" divide={ true }>
        <Flex>
          <div className="max-w-readable space-y-4">

            <h2 className="text-32 font-bold">The success of your website begins with content</h2>

            <p>In addition to our user-centred and inclusive website design and development processes, we’ll also support your team in the content strategy process for your next website.</p>

            <p>For an existing website, it’s important to conduct a content audit to determine how current content is serving organizational goals and how it’s ranking on search engines. We’ll assess what content should stay or go, what content might need to be re-written to improve its effectiveness, and what keywords are most effective to write content for in order to grow the impact of your website over time.</p>

            <p>If you’re starting with a new website, we guide your team through making a comprehensive content plan, which will help your new website accomplish your search engine, organic reach, transactional, and other on-site objectives for your website visitors.</p>

            <p>These efforts will help increase traffic to your website, increase conversions across your website, and ensure that when you do work on new content, you can maximize that investment.</p>
          </div>

        </Flex>
      </Section>

      <Section bgColor="yellow" divide="true">
        <Flex>
          <div className="max-w-readable space-y-4">

            <h2 className="text-32 font-bold">The success of your website begins with content</h2>

            <p>In addition to our user-centred and inclusive website design and development processes, we’ll also support your team in the content strategy process for your next website.</p>

            <p>For an existing website, it’s important to conduct a content audit to determine how current content is serving organizational goals and how it’s ranking on search engines. We’ll assess what content should stay or go, what content might need to be re-written to improve its effectiveness, and what keywords are most effective to write content for in order to grow the impact of your website over time.</p>

            <p>If you’re starting with a new website, we guide your team through making a comprehensive content plan, which will help your new website accomplish your search engine, organic reach, transactional, and other on-site objectives for your website visitors.</p>

            <p className="font-bold">These efforts will help increase traffic to your website, increase conversions across your website, and ensure that when you do work on new content, you can maximize that investment.</p>

            <p className="font-bold text-20">Are you ready to bring these content best practices to your website?</p>
            <LinkButton href="/contact-us/" bgColor="bg-sy-gold" textColor="text-black">Get in touch</LinkButton>
          </div>

        </Flex>
      </Section>

      <Section bgColor="yellow" divide="true">
        <Flex>
          <div className="max-w-readable space-y-4">

            <h2 className="text-32 font-bold">Three key areas to focus on for a successful website strategy</h2>

            <p>We work through a comprehensive process to understand the outcomes your website needs to facilitate in order to best serve your organization and audience.</p>

            <p>The three key factors to work through before taking next steps are:</p>

            <ol className="list-decimal list-outside pl-[0.875rem] space-y-4">
              <li>Understanding how your website will serve a variety of stakeholders from across your organization</li>
              <li>Understanding how your website visitors and target audience will shape your website</li>
              <li>Choosing the right website platform for your organization</li>
            </ol>

            <p className="font-bold text-20">Let’s talk through these steps together and help you improve the performance and outcomes of your website.</p>
            <LinkButton href="/contact-us/" bgColor="bg-sy-gold" textColor="text-black">Get in touch</LinkButton>

          </div>
        </Flex>
      </Section>


      <RelatedServiceCards items={ ["essentialWebsiteAudit", "accessibleWebsiteDesign", "usabilityTesting", "accessibleDevelopmentGuide"] }/>
      <ClientCards bgColor="white" />

      {/** Call to action */}
      <Section bgColor="white" divide="true">
        <Flex>
          <p className="text-24">Are you ready to improve the performance and outcomes of your website?</p>
          <LinkButton href="#" bgColor="bg-sy-yellow" textColor="text-black">Get in touch</LinkButton>
        </Flex>
      </Section>

    </main>
  </Layout>
}