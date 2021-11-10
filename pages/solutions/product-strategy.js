
import { NextSeo } from 'next-seo'
import Layout from 'ui/layout/Layout'

import LinkButton from "ui/components/LinkButton"
import Image from "next/image"

import Hero from "ui/templates/Hero"
import RelatedServiceCards from 'ui/templates/RelatedServiceCards'
import ClientCards from 'ui/templates/ClientCards'

import Section from 'ui/layout/Section'
import Flex from 'ui/layout/Flex'
import Grid from 'ui/layout/Grid'
import Quote from 'ui/components/Quote'

export default function InclusiveWebsiteDesign(){

  return <Layout>
    <NextSeo
          title="Product strategy: bringing an effective product to market."
          description="The key to bringing an effective product to market is to align organizational goals and user needs to deliver a market-leading experience."
          openGraph={{
            images: [
              {
                url: `${process.env.NEXT_PUBLIC_BASE_URL}/heroes/product-strategy.png`,
                width: 1200,
                height: 627,
                alt: 'Product strategy: bringing an effective product to market.',
              },
            ],
          }}
        />
    <main tabIndex="-1" id="main-content">
      <Hero {...{
        image:{
          "src":"/heroes/product-strategy.png"
        },
        title:"Product strategy",
        catchline:"The product strategy, scoping, and implementation expertise necessary to excel in the connected age."
        }}
      />

      <Section bgColor="bg-sy-earth" textColor="white">
        <Grid>
          <h2 className="max-w-readable text-32 text-sy-yellow font-bold col-span-full">
            Product strategy accellerate key organizational objectives
          </h2>
          { [
            "Can we improve product engagement and retention?",
            "Does our product’s purpose and roadmap best support our organization’s and our user’s objectives?",
            "Can we deliver new products to market faster and more effectively?",
            "Can we optimize our decision-making and design processes to de-risk product development?"
          ].map((item, key) =>
            <Quote>{ item }</Quote>
          )}
          <div className="max-w-readable col-span-full text-20 text-sy-mocha space-y-4">
            <p className="font-bold text-20">
              We’re here to help you answer these and other questions that will help your organization deliver more effective products.
            </p>
            <LinkButton href="/contact-us/" bgColor="yellow" textColor="black" textSize="18">Get in touch</LinkButton>
          </div>
        </Grid>
      </Section>

      <Section bgColor="yellow">
        <Flex>
          <div className="max-w-readable space-y-4 text-18">
            <h2 className="text-32 font-bold">Take your digital product further</h2>
            <p>It’s easy to identify a comprehensive wish list of scope requests and technical requirements that on their own check off a feature list, but these requirements won’t drive users to actions that deliver effective results for your organization.</p>
            <p>An effective product strategy hones in on those key user behaviors that lead to positive action, serving both your organization as well as user needs, emotions, and motivations. It’s meeting these criteria that helps you bring an effective digital product to market as quickly as possible, or to shape your existing product in more immediate and effective ways. All with the analytics and behavioral tracking in place to validate, measure, and improve our collective efforts on an ongoing basis.</p>
          </div>
        </Flex>
      </Section>

      <Section bgColor="yellow" divide="true">
        <Flex>
          <div className="max-w-readable space-y-4 text-18 mb-4">
            <h2 className="text-32 font-bold">Getting to market as effectively as possible</h2>
            <p>Defining experience is a prerequisite to understanding effective product feature requirements. Part of the experience design process is getting aligned on consumer expectations, goals, and your customer’s typical behaviour.</p>
            <p>Successful product strategy is driven by keeping a focus on core differentiators that help reduce cost, risk, and time to market.</p>
            <p>In order to get to market as effectively as possible, we need to reduce planning and development time without customer feedback, align the product to existing customer behaviour where possible, and keep the interface as focused as possible in order to keep the spotlight on the key benefits of the product.</p>
            <p className="font-bold">That’s effective product strategy.</p>
          </div>
          <div className="max-w-readable text-20 space-y-4">
            <p className="font-bold text-20">Bring exceptional product strategy insights to your team today.</p>
            <LinkButton href="/contact-us/" bgColor="gold" textColor="black" textSize="18">Get in touch</LinkButton>
          </div>
        </Flex>
      </Section>

      <Section bgColor="yellow" divide="true">
        <RelatedServiceCards
          title="Product strategy services and resources"
          items={ ["userExperienceDesign", "mobileAppDesign", "research", "marketDefinition" ,"inclusiveDesign", "continuousImprovement"] }
        />
      </Section>
      {/** accessibleDevelopmentGuide */}

      <Section bgColor="white">
        <ClientCards bgColor="white" title="Select service design clients" items={[
          "serviceOntario",
          "wsib",
          "torontoPublicLibrary",
          "cannect",
          "aon",
          "virginMobile",
          "tourismToronto",
          "stageTen",
        ]} />
      </Section>
      {/** Call to action */}
      <Section bgColor="white" divide="true">
        <Flex>
          <div className="max-w-readable space-y-4">
          <p className="text-24 font-bold">Discover how assessing and refocusing your organization can lead to improved operations, customer experience, and technology decision-making.</p>
          <LinkButton href="/contact-us/" bgColor="yellow" textColor="black" textSize="18">Get in touch</LinkButton>
          </div>
        </Flex>
      </Section>

    </main>
  </Layout>
}