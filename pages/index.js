import React from 'react'
import ReactMarkdown from "react-markdown"
import Image from "next/image"

import Layout from 'ui/layout/Layout'
import Card from "ui/components/Card"
import LinkButton from "ui/components/LinkButton"
import LinkArrow from "ui/components/LinkArrow"
import Testimonial from 'ui/templates/Testimonial'
import Video from "ui/components/Video"
import Hero from 'ui/templates/Hero'
import CallToAction from 'ui/templates/CallToAction'
import LeftQuote from 'ui/svg/LeftQuote'
import RightQuote from 'ui/svg/RightQuote'
import ClientCards from 'ui/templates/ClientCards'
import PublicationCards from 'ui/templates/PublicationCards'
import Grid from "ui/layout/Grid"
import Flex from "ui/layout/Flex"
import Section from "ui/layout/Section"
import { NextSeo } from "next-seo"
import Quote from 'ui/components/Quote'
export default function Home() {
  return (
    <Layout>
      <main tabIndex="-1" id="main-content" className="stack-header-and-main-using-grid">

      <NextSeo
      title="Inclusive design, service design, and digital excellence from Say Yeah!"
      description="We help organizations deliver inclusive products and services that increase access to diverse markets. Learn more about Say Yeah!"
      openGraph={{
        images: [
          {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/heroes/homepage.png`,
            width: 1200,
            height: 627,
            alt: 'Inclusive design, service design, and digital excellence from Say Yeah!',
          },
        ],
      }}
    />


        <Hero {...{
          image: { src: "/heroes/homepage.png" },
          name: "Say Yeah",
          title: "Deliver products and services that win diverse markets",
          catchline: "As markets continue to evolve, leading organizations must adapt to shifting consumer expectations.",
          actions: [{
            href: "/digital-insights/roi-inclusive-design/",
            label: "Why designing for the average person hurts your bottom line",
          },{
            href: "/digital-insights/technology-builds-market-leading-organizations/",
            label: "The role of technolgy in building market leaders",
          }]
        }}
        />

        <Section textColor="black" bgColor="yellow">
          <Grid>
            <h2 className="text-32 font-bold col-span-full">Bring clarity to decision-making</h2>
              {
                [{
                  img: { src: "/img/icons/devices.svg", alt: "" },
                  text: "**Modernize your organization** towards more efficient service delivery and improved customer experience.",
                  actions: [{ label: "Service design", href: "/solutions/service-design/" }]
                },{
                  img: { src: "/img/icons/strategy.svg", alt: "" },
                  text: "**Define, deliver, and maintain digital products** that reduce costs and increase adoption.",
                  actions: [{ label: "Product strategy", href: "/solutions/product-strategy/"}]
                }].map((item, key) => (
                <Card key={key}>
                  <Card.Content className="flex flex-col items-start h-full">
                  { item.img ? <Image src={ item.img.src } alt={ item.img.alt } width="56" height="56" /> : null }
                    <ReactMarkdown className="text-20 leading-normal mb-4">{ item.text }</ReactMarkdown>

                    { item.actions.map( action => (
                      <LinkButton
                        key={ action.href }
                        className="mt-auto mb-0 bg-sy-gold text-black"
                        href={ action.href }
                        textSize="18"
                      >
                        { action.label }
                      </LinkButton>
                    ) ) }
                  </Card.Content>
                </Card>
              ))}
            </Grid>
        </Section>


        {/* <Section textColor="text-yellow" bgColor="bg-sy-earth">
          <Grid>

            <h2 className="text-32 font-bold text-sy-yellow col-span-full">
              Achieve exceptional outcomes
            </h2>

            { // Iterate outcomes
              [{
                photo: { src: "" },
                tags: ["Service design"],
                text: "Reshaping experience to support and retain users through a multi-step sales funnel.",
                logo: ""
              },{
                photo: { src: "" },
                tags: ["Service design"],
                text: "Reshaping experience to support and retain users through a multi-step sales funnel.",
                logo: ""
              }].map((card, key) => (
                <Card className="text-black" key={ key }>
                  <Card.Photo src='https://source.unsplash.com/random/401x225' />
                  <Card.Content className="space-y-4">
                    { card?.tags?.map((tag, key) => <Badge key={ key }>{ tag }</Badge>) }
                    <ReactMarkdown className="text-20 font-bold">
                      Reshaping experience to support and retain users through a multi-step sales funnel.
                    </ReactMarkdown>
                    <LinkArrow href="#">Link</LinkArrow>
                  </Card.Content>
                </Card>
              ))
            }
          </Grid>
        </Section> */}

        <Section bgColor="bg-sy-yellow" className="border-t border-black border-opacity-5">
          <Grid>
            <h2 className="text-28 font-bold max-w-[40rem] col-span-full">
              Evolving markets create new opportunities
            </h2>

            {
              [
                {
                  img: { src: "/img/icons/glasses.svg", alt: "" },
                  fact: "75% of people require accommodations for eyesight",
                  action: {
                    label:"Accommodate for different eyesight across your products and services",
                    href:"/digital-insights/accomodating-vision-needs/"
                  }
                },{
                  img: { src: "/img/icons/brain.svg", alt: "" },
                  fact: "40% of people have brains that work in neurodiverse ways",
                  action: {
                    label:"Improve products and services by planning for different ways of thinking",
                    href:"/digital-insights/improving-products-services-neurodiversity/"
                  }
                },{
                  img: { src: "/img/icons/diversity.svg", alt: "" },
                  fact: "Diversity of markets and communities continues to grow",
                  action: {
                    label:"Follow the trends that lead to increasing market diversity",
                    href:"/digital-insights/growing-community-diversity/"
                  }
                },{
                  img: { src: "/img/icons/fish.svg", alt: "" },
                  fact: "Individualism has overtaken conformance as a way of being",
                  action: {
                    label:"Explore how technology has accellerated humanity’s path to self-discovery",
                    href:"/digital-insights/individualism-shapes-product-service/"
                  }
                },
              ].map((item, key) => (
                <Card key={key} href={ item.action.href }>
                  <div className="bg-sy-sunshine p-4">
                  { item.img ? <Image src={ item.img.src } alt={ item.img.alt } width="56" height="56" /> : null }
                    <p className="text-20 font-bold">{ item?.fact }</p>
                  </div>
                  <div className="p-4 block">
                    { item?.action?.label }
                  </div>
                </Card>
              ))
            }

          <div className="col-span-full max-w-readable space-y-4">
            <p className="text-24 font-bold">Contact us today to more effectively deliver products and services that win diverse markets</p>
            <LinkButton href="/contact-us/" bgColor="black" textColor="white">Get in touch</LinkButton>
          </div>
          </Grid>
        </Section>

        {/** Featured Testimonial */}
        <Section bgColor="bg-sy-yellow" textColor="text-black" className="border-t border-black border-opacity-5">
          <Flex>
            <h2 className="sr-only">Testimonial</h2>
            <Testimonial cite="Aran Hamilton, CEO, Vantage Analytics">
              Working with Say Yeah is a major step towards not wasting hundreds of thousands of dollars building the wrong thing because of poor planning.
            </Testimonial>
          </Flex>
        </Section>

        {/** Impactful Challenges */}
        <Section bgColor="bg-sy-earth" textColor="text-white">
          <Grid gap="gap-12">
            <h2 className="text-32 font-bold text-sy-yellow col-span-full">
              Solve your most impactful organizational challenges
            </h2>

            { // Iterate Impactful Challenges
            [{
              text: "How do we deliver service more effectively by increasing online adoption?",
              actions: [{ href: "/solutions/service-design/", label :"Service design" }]
            },{
              text: "Can our products and services better serve our market?",
              actions: [{ href: "/solutions/market-research/", label :"Market & user research" }]
            },{
              text: "Are we making the best technology choices for our organization?",
              actions: [{ href: "/services/organizational-maturity-assessment/", label :"Assessing your organization" }]
            },{
              text: "Can we more effectively design and deliver digital products?",
              actions: [{ href: "/solutions/product-strategy/", label :"Product strategy" }]
            },{
              text: "Can we do a better job of using our website as a tool for driving engagement and retention?",
              actions: [{ href: "/solutions/inclusive-website-design/", label :"Inclusive website design" }]
            },{
              text: "Are there unintended ways we may be limiting access to our content, products, and services?",
              actions: [{ href: "/solutions/inclusive-design/", label :"Inclusive design" }]
            }].map((item, key) => (
              <div key={ key }>
                  <Quote key={ key }>{ item.text }</Quote>
                { item.actions.map((action, key) => <LinkArrow
                  key={ key }
                  href={ action.href }
                  textSize="text-18"
                  textColor="text-sy-mocha"
                >
                  <a key={ key }>{ action.label }</a>
                </LinkArrow> )}
              </div>
            ))}
          </Grid>
        </Section>

        <Section bgColor="bg-sy-yellow" textColor="text-black">

          <ClientCards cols="5" bgColor="white" title="Our client roster" items={[
            "torontoPublicLibrary",
            "theScore",
            "aon",
            "virginMobile",
            "webFoundation",
            "tourismToronto",
            "ontario",
            "rogers",
            "microsoft",
            "ratesDotCa",
          ]} />

          <Flex className="mt-8">
          <LinkArrow href="/work/">Additional clients and industries served</LinkArrow>
          </Flex>
        </Section>

        {/* <Section bgColor="bg-sy-yellow" textColor="text-black" className="border-t border-black border-opacity-5">
          <Flex>
            <h2 className="text-32 font-bold mb-4">The client experience</h2>
            <Video data={{
              url: "https://sayyeah.com/wp-content/uploads/2020/02/mark_testimonial.mp4",
              poster: "https://sayyeah.com/wp-content/uploads/2020/02/mark_testimonial-1.jpg",
              tracks: [
                {
                  kind: "subtitles",
                  label: "English",
                  src: "/captions/markdowds_testimonial.vtt",
                  srcLang: "en",
                  default: true
                }
              ]
            }} />
          </Flex>
        </Section>
         */}
        <Section textColor="white" bgColor="earth">
          <Grid gap="gap-4 gap-y-12 md:gap-x-16 md:gap-y-8" className="text-18">
          {/* <StackContent className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 md:gap-y-8 gap-4"> */}

            <div className="col-span-full">
              <h2 className="text-32 font-bold text-sy-yellow max-w-[40rem]">
                Our commitments to diversity, equity, and inclusion
              </h2>
            </div>

            <div className="flex flex-col items-start justify-items-end">
              <h3 className="text-24 font-bold text-sy-mocha mb-3">
                Our commitments
              </h3>
              <p className="mb-4">
                We’re committed to inclusive, anti-racist practices in our work, hiring processes, and collaborations. As part of this commitment, we’ve signed pledges like BlackNorth’s CEO pledge and The Contract for the Web, as well as creating our own call to action for design agency leaders.
                </p>
              <LinkButton bgColor="bg-sy-yellow" textColor="text-black" margin="mt-auto mb-0" href="/digital-insights/call-to-action-design-agency-leaders/">
                Our anti-racism call to action
              </LinkButton>
            </div>

            <div className="flex flex-col items-start justify-items-end">
              <h3 className="text-24 font-bold text-sy-mocha mb-3">
                Supplier diversity
              </h3>
              <p className="mb-4">
                We intentionally seek out diverse and inclusive suppliers and service providers and continue to demand more of the suppliers and clients we work with.
              </p>
              <LinkButton bgColor="bg-sy-yellow" textColor="text-black" margin="mt-auto mb-0" href="/about-us/supplier-diversity/">
                Our supplier diversity practices
              </LinkButton>
            </div>
          </Grid>
        </Section>

        {/* <Section bgColor="bg-sy-yellow" textColor="text-black">
        <div className="max-w-screen-xs md:max-w-screen-md mx-auto">
            <div className="max-w-[40rem] mb-8">

              <h2 className="text-40 font-bold text-black max-w-[40rem] mb-8">
                Digital insights
              </h2>
              <p className="text-24">
                Essential inclusive design and digital transformation resources, research, case studies, and references
              </p>
            </div>
          </div>
        </Section> */}

        <Section bgColor="bg-sy-yellow" textColor="text-black">

        <PublicationCards cols="5" bgColor="white" title="We’ve been featured by" items={[
            "sxsw",
            "fitc",
            "digitalJournal",
            "uxMagazine",
            "ctvNewsChannel",
          ]} />
        </Section>

      <Section bgColor="white" divide="true">
        <Flex>
          <div className="max-w-readable space-y-4">
          <p className="text-24 font-bold">
            Let’s explore how delivering more inclusive products and services can help you win markets
          </p>
          <LinkButton href="/contact-us/" bgColor="yellow" textColor="black" textSize="18">Get in touch</LinkButton>
          </div>
        </Flex>
      </Section>
      </main>
    </Layout>
  )
}


