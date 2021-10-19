import React from 'react'
import ReactMarkdown from "react-markdown"
import Layout from 'ui/layout/Layout'
import Card from "ui/components/Card"
import LinkButton from "ui/components/LinkButton"
import LinkArrow from "ui/components/LinkArrow"
import Testimonial from 'ui/components/Testimonial'
import Video from "ui/components/Video"
import Hero from 'ui/templates/Hero'
import CallToAction from 'ui/templates/CallToAction'
import LeftQuote from 'ui/svg/LeftQuote'
import RightQuote from 'ui/svg/RightQuote'

import Grid from "ui/layout/Grid"
import Flex from "ui/layout/Flex"
import Section from "ui/layout/Section"

// import Tpl from "ui/svg/clients/Tpl"
// import Cannect from "ui/svg/clients/Cannect"

// import Sxsw from "ui/svg/media/Sxsw"
// import Fitc from "ui/svg/media/Fitc"
// import DigitalJournal from "ui/svg/media/DigitalJournal"
// import UxMagazine from 'ui/svg/media/UxMagazine'
// import CtvNewsChannel from 'ui/svg/media/CtvNewsChannel'



export default function Home() {
  return (
    <Layout>
      <main tabIndex="-1" id="main-content" className="stack-header-and-main-using-grid">

        <Hero {...{
          image: { src: "/_public/heroes/homepage.png" },
          name: "Say Yeah",
          title: "Deliver products and services that win diverse markets",
          catchline: "As markets continue to evolve, leading organizations must adapt to shifting consumer expectations.",
          actions: [{
            href: "#",
            label: "Why designing for the average person hurts your bottom line",
            ariaLabel: false,
          },{
            href: "#",
            label: "The role of technolgy in building market leaders",
            ariaLabel: false,
          }]
        }}
        />

        <Section textColor="text-black" bgColor="bg-sy-yellow">
          <Grid>
            <h2 className="text-32 font-bold col-span-full">Bring clarity to decision-making</h2>

              {
                [{
                  icon: "",
                  text: "**Modernize your organization** towards more efficient service delivery and improved customer experience.",
                  actions: [{ label: "Service design", ariaLabel: null, href: "/services/service-design/" }]
                },{
                  icon: "",
                  text: "**Define, deliver, and maintain digital products** that reduce costs and increase adoption.",
                  actions: [{ label: "Product strategy", ariaLabel: null, href: "/services/product-strategy/"}]
                }].map((item, key) => (
                <Card key={key}>
                  <Card.Content className="flex flex-col items-start h-full">
                    <ReactMarkdown className="text-20 leading-normal mb-4">{ item.text }</ReactMarkdown>

                    { item.actions.map( action => (
                      <LinkButton
                        key={ action.href }
                        className="mt-auto mb-0 bg-sy-gold text-black"
                        href={ action.href }
                        textSize="text-20"
                        aria-label={ action.ariaLabel }
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
                  icon: false,
                  fact: "75% of people require accommodations for eyesight",
                  action: {
                    label:"Accommodate for different eyesight across your products and services",
                    href:"#", ariaLabel: null,
                  }
                },{
                  icon: false,
                  fact: "40% of people have brains that work in neurodiverse ways",
                  action: {
                    label:"Improve products and services by planning for different ways of thinking",
                    href:"#", ariaLabel: null,
                  }
                },{
                  icon: false,
                  fact: "Diversity of markets and communities continues to grow",
                  action: {
                    label:"Follow the trends that lead to increasing market diversity",
                    href:"#", ariaLabel: null,
                  }
                },{
                  icon: false,
                  fact: "Individualism has overtaken conformance as a way of being",
                  action: {
                    label:"Explore how technology has accellerated humanity’s path to self-discovery",
                    href:"#", ariaLabel: null,
                  }
                },
              ].map((item, key) => (
                <Card key={key}>
                  <div className="bg-sy-sunshine p-4">
                    { item.icon && <></> }
                    <p className="text-20 font-bold">{ item?.fact }</p>
                  </div>
                  <a href={ item?.action?.href } aria-label={ item?.action?.ariaLabel } className="p-4 block">
                    { item?.action?.label }
                  </a>
                </Card>
              ))
            }

          <div className="mt-8 col-span-full">
            <p className="text-24 font-bold max-w-[40rem]">Contact us today to more effectively deliver products and services that win diverse markets</p>
          </div>
          </Grid>
        </Section>

        {/** Featured Testimonial */}
        <Section bgColor="bg-sy-yellow" textColor="text-black" className="border-t border-black border-opacity-5">
          <div className="max-w-screen-xs md:max-w-screen-md mx-auto">
            <h2 className="sr-only">Testimonail</h2>
            <Testimonial cite="Aran Hamilton, CEO, Vantage Analytics">
              <ReactMarkdown>Working with Say Yeah is a major step towards not wasting hundreds of thousands of dollars building the wrong thing because of poor planning.</ReactMarkdown>
            </Testimonial>
          </div>
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
              actions: [{ href: "#", label :"Service design", ariaLabel: false }]
            },{
              text: "Can our products and services better serve our market?",
              actions: [{ href: "#", label :"Market & user research", ariaLabel: false }]
            },{
              text: "Are we making the best technology choices for our organization?",
              actions: [{ href: "#", label :"Assessing your organization", ariaLabel: false }]
            },{
              text: "Can we more effectively design and deliver digital products?",
              actions: [{ href: "#", label :"Product strategy", ariaLabel: false }]
            },{
              text: "Can we do a better job of using our website as a tool for driving engagement and retention?",
              actions: [{ href: "#", label :"Inclusive website design", ariaLabel: false }]
            },{
              text: "Are there unintended ways we may be limiting access to our content, products, and services?",
              actions: [{ href: "#", label :"Inclusive design", ariaLabel: false }]
            }].map((item, key) => (
              <div key={ key }>
                <p className="text-20 mb-4 inline-block">
                  <LeftQuote width="12" className="ml-[-1.5rem] text-sy-mocha"/>{ item.text }<RightQuote width="12" className="text-sy-mocha" />
                </p>
                { item.actions.map((action, key) => <LinkArrow
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
          <Flex>
            <h2 className="text-40 font-bold mb-8">Client roster</h2>

            <Grid maxW={ false } margin={ false } gridCols="grid-cols-2 md:grid-cols-4">
              { [].map(( Client, key ) =>
                <div className="bg-black bg-opacity-5 rounded-lg flex items-center justify-center p-4" key={ key }>
                  { <Client width={ null } height={ null } className="w-full" /> }
                </div>

              )}
            </Grid>

            <LinkArrow href="/work/">Additional clients and industries served</LinkArrow>
          </Flex>
        </Section>

        <Section bgColor="bg-sy-yellow" textColor="text-black" className="border-t border-black border-opacity-5">
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
        <Section textColor="text-white" bgColor="bg-sy-earth">
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
              <LinkButton bgColor="bg-sy-yellow" textColor="text-black" margin="mt-auto mb-0" href="#">
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
              <LinkButton bgColor="bg-sy-yellow" textColor="text-black" margin="mt-auto mb-0" href="#">
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
          <Flex>
            <h2 className="text-32 font-bold mb-8">We’ve been featured by</h2>

            {/**<ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {
                [{
                  name: "SXSW",
                  src: <Sxsw/>
                },{
                  name: "FITC",
                  src: <Fitc/>
                },{
                  name: "Digital Journal",
                  src: <DigitalJournal/>
                },{
                  name: "UX Magazine",
                  src: <UxMagazine/>
                },{
                  name: "CTV News Channel",
                  src: <CtvNewsChannel />,
                }].map((client, key) =>
                  <li key={ key } className="border border-black border-opacity-5 rounded min-h-[6rem] flex items-center justify-center">
                    { client.src }
                  </li>
                )
              }
            </ul>
            */}
          </Flex>
        </Section>

        <CallToAction
          actions={[ {
            label: "Get in touch",
            href: "#",
            srLabel: null
          }]}
        >Let’s explore how delivering more inclusive products and services can help you win markets</CallToAction>
      </main>
    </Layout>
  )
}


