
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
          title="Service design optimizes efforts to deliver superior customer experience"
          description="Learn how service design optimizes your team's efforts to deliver a consistent, connected customer experience that drives engagement and retention.
          "
          openGraph={{
            images: [
              {
                url: `${process.env.NEXT_PUBLIC_BASE_URL}/heroes/service-design.png`,
                width: 1200,
                height: 627,
                alt: 'Service design optimizes efforts to deliver superior customer experience',
              },
            ],
          }}
        />
    <main tabIndex="-1" id="main-content">
      <Hero {...{
        image:{
          "src":"/heroes/service-design.png"
        },
        title:"Service design",
        catchline:"Optimize your team’s efforts to deliver a consistent, connected customer experience that drives engagement and retention."
        }}
      />

      <Section bgColor="bg-sy-earth" textColor="white">
        <Grid>
          <h2 className="max-w-readable text-32 text-sy-yellow font-bold col-span-full">
            Service design answers important operational questions
          </h2>
          { [
            "How do we deliver services more effectively by increasing online adoption?",
            "Are we making the best technology choices for our organization?",
            "How do we improve collaboration across our organization in order to improve service delivery?",
            "How do we improve the omni-channel customer experience?"
          ].map((item, key) =>
            <Quote>{ item }</Quote>
          )}
          <div className="max-w-readable col-span-full text-20 text-sy-mocha space-y-4">
            <p className="font-bold text-20">We’re here to help you answer these and other questions that will help your organization operate more effectively.</p>
            <LinkButton href="/contact-us/" bgColor="yellow" textColor="black" textSize="18">Get in touch</LinkButton>
          </div>
        </Grid>
      </Section>

      <Section bgColor="yellow">
        <Flex>
          <div className="max-w-readable space-y-4 text-18">
            <h2 className="text-32 font-bold">
              Connected experiences, delivered
            </h2>
            <p>The essence of service design is to create new services–or transform existing ones-that more closely align market needs with organizational objectives and capabilities.</p>
            <p>Most traditional service design shops urge their clients to primarily affect cultural or organizational change.</p>
            <p className="font-bold">Our team focuses on a more pragmatic approach. It’s digital-centric and yields impressive results for our clients.</p>
            <p>We offer you service and related product recommendations that are immediately actionable, delivering improvements across key metrics such as customer growth, engagement, retention, satisfaction, revenue, team efficiency, and more.</p>
          </div>
        </Flex>
      </Section>

      <Section bgColor="yellow" divide="true">
        <Grid>
          <h2 className="text-32 font-bold max-w-readable col-span-full">Our service design toolkit</h2>
          {[
            {
              img: { src: "/img/icons/discovery.svg", alt: "" },
              title:"1. Discovery",
              body:"Using a variety of information gathering and research methods, we identify and map the holistic experience of your services, and how customers, staff and other players move through your service’s touchpoints."
            },{
              img: { src: "/img/icons/analysis.svg", alt: "" },
              title:"2. Analysis",
              body:"We do a deep-dive into identifying organizational gaps, market opportunities, and process improvements, with tactics including customer journey mapping, service blueprinting, and more."
            },{
              img: { src: "/img/icons/optimization.svg", alt: "" },
              title:"3. Optimization and implementation",
              body:"Our analysis and synthesis of findings will set the blueprint that guides your team in making strategic improvements to your services. You’ll have the tools you need to align internal teams and stakeholders, deliver services more efficiently, and apply the added lens of digital strategy consulting to uncover new automation, data, and digital product opportunities."
            },{
              img: { src: "/img/icons/continuous-improvement.svg", alt: "" },
              title:"4. Continuous improvement",
              body:"Our team will coach you through foundational objectives and key results (OKRs) and key performance indicators (KPIs), related data tracking, user testing, analysis, and methodologies to make your service delivery stronger on an ongoing basis."
          }].map(item => (
            <div>
              { item.img ? <Image src={ item.img.src } alt={ item.img.alt } width="48" height="48" /> : null }
              <h3 className="text-24 font-bold mb-3">{ item.title }</h3>
              <p>{ item.body }</p>
            </div>
          ))}
          <div className="max-w-readable text-20 space-y-4">
            <p className="font-bold text-20">Let’s explore how this toolkit can help your organization multiply your product and service successes.</p>
            <LinkButton href="/contact-us/" bgColor="black" textColor="white" textSize="18">Get in touch</LinkButton>
          </div>
        </Grid>
      </Section>

      <Section bgColor="yellow" divide="true">
        <RelatedServiceCards
          title="Our service design related processes"
          items={ ["research", "systemStrategy" ,"inclusiveDesign", "digitalExcellence"] }
        />
      </Section>
      {/** accessibleDevelopmentGuide */}

      <Section bgColor="white">
        <ClientCards bgColor="white" title="Select service design clients" items={[
          "ontario",
          "serviceOntario",
          "kanetix",
          "cannect",
          "wsib",
          "virginGaming",
          "torontoPublicLibrary",
          "tourismToronto",
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