
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
import ReactMarkdown from 'react-markdown'

export default function InclusiveWebsiteDesign(){

  return <Layout>
    <NextSeo
      title="Inclusive design: a comprehensive methodology from Say Yeah!"
      description="Learn how to design with intersectionality, usability, accessibility, and inclusion at the centre of your work."
      openGraph={{
        images: [
          {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/heroes/inclusive-design.png`,
            width: 1200,
            height: 627,
            alt: 'Inclusive design: a comprehensive methodology from Say Yeah!',
          },
        ],
      }}
    />
    <main tabIndex="-1" id="main-content">
      <Hero {...{
        image:{
          "src":"/heroes/inclusive-design.png"
        },
        title:"Inclusive design",
        catchline:"How to ensure products & services are embraced by your market."
        }}
      />

      <Section bgColor="bg-sy-earth" textColor="white">
        <Grid>
          <h2 className="max-w-readable text-32 text-sy-yellow font-bold col-span-full">
            Inclusive design answers important market engagement questions
          </h2>
          { [
              "Are there unintended ways we may be limiting access to our content, products, or services?",
              "How can we avoid making our users feel excluded by our products or services?",
              "Can we make our products or services easier to use for everyone?",
              "Can we grow our market share by delivering more inclusive products and services?"
            ].map((item, key) =>
            <Quote>{ item }</Quote>
          )}
          <div className="max-w-readable col-span-full text-20 text-sy-mocha space-y-4">
            <p className="font-bold text-20">We’re here to help you answer these and other questions that improve engagement with your market.</p>
            <LinkButton href="/contact-us/" bgColor="yellow" textColor="black" textSize="18">Get in touch</LinkButton>
          </div>
        </Grid>
      </Section>

      <Section bgColor="yellow">
        <Flex>
          <div className="max-w-readable space-y-4 text-18">
            <h2 className="text-32 font-bold">Today’s most successful products and services leverage inclusive approaches</h2>
            <p>Traditionally, products and services have been designed for a more generalized market, or an average person. It was thought that, by designing to general standards, you could serve about 80% of people in a market but this approach has a number of risks associated with it because there is no average person.</p>
            <p className="font-bold">There is no average person, so we must design for the needs of the individuals who make up the diverse markets we serve.</p>
            <p>The users of your products and services are individuals with ever changing needs, behaviour, and contexts of engagement. The most effective products and services are designed through a process of understanding how personal and intersectional attributes shape markets.</p>
          </div>
        </Flex>
      </Section>

      <Section bgColor="yellow" divide="true">
        <Grid>
          <h2 className="text-32 font-bold max-w-readable col-span-full">Our inclusive design toolkit</h2>
          {[
            {
              img: { src: "/img/icons/market-research.svg", alt: "" },
              title:"Market and organizational research",
              body:"Exploratory research includes interviews with users (to better understand their needs and goals when using your product or service), and interviews with stakeholders.\n\n Throughout this phase of a project, we ensure a diverse range of voices are heard. Part of this process is being intentional about engaging with the variety of community members who make up your market. Our existing relationships and community outreach efforts consider members of LGBTQ+, indigenous, and groups of people with different physical and cognitive abilities, alongside our practices of ensuring representation by gender, race, cultural, religious, and economic factors."
            },
            {
              img: { src: "/img/icons/strategic-planning.svg", alt: "" },
              title:"Strategic planning",
              body:"Based on research insights, we develop a roadmap for design, development, and production.\n\n  As part of an inclusive design process, we develop this strategy by mapping out user needs, contexts of use, and behaviours, rather than focusing on demographics or traditional marketing personas.\n\n When we consider the internal team, we look at individual work, digital maturity, team dynamics, and team makeup to understand where there may be process, resource, and capability gaps in order to develop a plan to overcome barriers of delivering rewarding inclusive experiences."
            },
            {
              img: { src: "/img/icons/gears.svg", alt: "" },
              title:"Designing inclusively, from concept to delivery",
              body:"Throughout the design process, we work through a series of inclusive design best practices to define experiences and outcomes that embrace users with a wide range of intersectional traits and behaviours, including considerations around identity, culture, and worldview.\n\n As a part of this approach, our inclusive design process includes co-designing and reviewing in-progress work and prototypes with diverse users. This way, your product or service can excel at delighting all your potential users by ensuring these perspectives and needs are baked into the service model and user experience.\n\n Better still, the inclusive design process reduces the total design, development, production, and support costs and risks when compared to a traditional product development process."
            },
            {
              img: { src: "/img/icons/bar-graph.svg", alt: "" },
              title:"Inclusive product or service validation and continuous improvement",
              body:"Throughout the planning and development process, we use ongoing user testing processes to improve the strategy, design, and experience, to ensure your products and services are serving the market in the most effective way.\n\n In the context of inclusive design, this means being intentional about who we are engaging with from the market. By continuing this process of speaking to and testing with diverse users, we can continue to validate choices that impact the full spectrum of the market.\n\n The series of user testing methodologies at our disposal allows us to effectively uncover the most practical insights at each stage of the development cycle. Whether we are facilitating workshops, conducting interviews, running a usability test, surveying, or analyzing data, our ability to sort and synthesize findings, alongside our decades of technology and human-centered design experience, de-risks and accelerates any product or service design effort. With an inclusive lens added to this mix, you’ll have access to the most extensive validation processes available for vetting your products and services."
            },
            {
              title: "Accessibility for all as standard practice",
              body: "As part of our inclusive design objectives, we work to design and develop your products and services with accessibility guidelines in mind. Not only does this approach open up new market opportunities by ensuring your products and services are functionally accessible for users with disabilities or other accommodation needs, but this approach helps improve access for all.",
              className: "bg-sy-sunshine p-4"
            }
          ].map(item => (
            <div className={ item.className ? item.className : null }>
              { item.img ? <Image src={ item.img.src } alt={ item.img.alt } width="56" height="56" /> : null }
              <h3 className="text-24 font-bold mb-3">{ item.title }</h3>
              <ReactMarkdown className="space-y-4">{ item.body }</ReactMarkdown>
            </div>
          ))}
          <div className="col-span-full max-w-readable space-y-4">
            <p className="text-24 font-bold">Let’s explore how this toolkit can help your organization multiply your product and service successes.</p>
            <LinkButton href="/contact-us/" bgColor="black" textColor="white">Get in touch</LinkButton>
          </div>
        </Grid>
      </Section>

      <Section bgColor="yellow" divide="true">
        <RelatedServiceCards
          items={ ["research", "systemStrategy", "inclusiveDesign", "digitalExcellence"] }
        />
      </Section>
      {/** accessibleDevelopmentGuide */}

      <Section bgColor="white">
        <ClientCards bgColor="white" title="Select inclusive design clients" items={[
          "ontario",
          "torontoPublicLibrary",
          "wsib",
          "webFoundation",
          "tourismToronto",
          "kanetix",
          "nymi",
          "serviceOntario",
        ]} />
      </Section>
      {/** Call to action */}
      <Section bgColor="white" divide="true">
        <Flex>
          <div className="max-w-readable space-y-4">
          <p className="text-24 font-bold">Let’s explore how delivering more inclusive products and services can help you win diverse markets.</p>
          <LinkButton href="/contact-us/" bgColor="yellow" textColor="black" textSize="18">Get in touch</LinkButton>
          </div>
        </Flex>
      </Section>

    </main>
  </Layout>
}