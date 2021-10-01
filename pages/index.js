import React from 'react'
import ReactMarkdown from "react-markdown"

import Layout from 'ui/Layout'
import Header from "ui/components/Header"
import Action from "ui/components/Action"
import Card from "ui/components/Card"
import Button from "ui/components/Button"
import Testimonial from 'ui/components/Testimonial'
import Carousel from "ui/components/Carousel"
import Badge from "ui/components/Badge"
import Video from "ui/components/Video"

import Hero from 'ui/stackitems/Hero'
import CallToAction from 'ui/stackitems/CallToAction'
import { Stack, StackItem, StackContent } from 'ui/components/Stack'

export default function Home() {
  return (
    <Layout>

      <main tabIndex="-1" id="main-content" className="stack-header-and-main-using-grid">

        <Hero data={{
          image: { src: "/heroes/homepage.png" },
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
        <section className="DEFAULT_SECTION bg-yeah-cola text-white">
          <div className="grid DEFAULT_GRID_COLS DEFAULT_CONTENT DEFAULT_GRID_GAP">

            <h2 className="text-32 font-bold text-yeah-yellow col-span-full">
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
                    <ReactMarkdown className="text-20 font-bold">Reshaping experience to support and retain users through a multi-step sales funnel.</ReactMarkdown>
                    <a href="#">Link</a>
                  </Card.Content>
                </Card>
              ))
            }
          </div>
        </section>


        <section className="DEFAULT_SECTION bg-yeah-yellow text-black">
          <div className="DEFAULT_CONTENT space-y-8">
            <h2 className="text-32 font-bold">Bring clarity to decision-making</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {
                [{
                  icon: "",
                  text: "**Modernize your organization** towards more efficient service delivery and improved customer experience.",
                  actions: [{ label: "Get started", ariaLabel: "Get started, modernize your organization", href: "#" }]
                },{
                  icon: "",
                  text: "**Define, deliver, and maintain digital products** that reduce costs and increase adoption.",
                  actions: [{ label: "Get started", ariaLabel: "Get started, define, deliver, and maintain digital products", href: "#"}]
                }].map((item, key) => (
                <Card key={key}>
                  <Card.Content className="flex flex-col items-start h-full">
                    <ReactMarkdown className="text-20 leading-normal mb-4">{ item.text }</ReactMarkdown>

                    { item.actions.map( action => (
                      <Button
                        key={ action.href }
                        className="mt-auto mb-0 bg-black text-yeah-yellow"
                        href={ action.href }
                        ariaLabel={ action.ariaLabe0l }
                      >
                        { action.label }
                      </Button>
                    ) ) }
                  </Card.Content>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="DEFAULT_SECTION bg-yeah-yellow w-full">
          <div className="grid DEFAULT_CONTENT DEFAULT_GRID_COLS gap-4 md:gap-8">

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
                    href:"#", ariaLabel: false,
                  }
                },{
                  icon: false,
                  fact: "40% of people have brains that work in neurodiverse ways",
                  action: {
                    label:"Improve products and services by planning for different ways of thinking",
                    href:"#", ariaLabel: false,
                  }
                },{
                  icon: false,
                  fact: "Diversity of markets and communities continues to grow",
                  action: {
                    label:"Follow the trends that lead to increasing market diversity",
                    href:"#", ariaLabel: false,
                  }
                },{
                  icon: false,
                  fact: "Individualism has overtaken conformance as a way of being",
                  action: {
                    label:"Explore how technology has accellerated humanity’s path to self-discovery",
                    href:"#", ariaLabel: false,
                  }
                },
              ].map((item, key) => (
                <Card key={key}>
                  <div className="bg-yeah-sunshine p-4">
                    { item.icon && <></> }
                    <p className="text-24 font-bold">{ item?.fact }</p>
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
          </div>
        </section>

        {/** Featured Testimonial */}
        <section className="DEFAULT_SECTION bg-yeah-yellow text-black" >
          <div className="DEFAULT_CONTENT">
            <Testimonial cite="Aran Hamilton, CEO, Vantage Analytics">
              <ReactMarkdown>Working with Say Yeah is a major step towards not wasting hundreds of thousands of dollars building the wrong thing because of poor planning.</ReactMarkdown>
            </Testimonial>
          </div>
        </section>

        {/** Impactful Challenges */}
        <StackItem className="bg-yeah-cola text-white">
          <StackContent className="grid grid-cols-1 sm:grid-cols-2 gap-12">
            <h2 className="text-32 font-bold text-yeah-yellow col-span-full">
              Solve your most impactful organizational challenges
            </h2>

            { // Iterate Impactful Challenges
            [{
              text: "How can technology improve how we work?",
              actions: [{ href: "#", label :"Assessing your organization", ariaLabel: false }]
            },{
              text: "Can our products and services better serve our market?",
              actions: [{ href: "#", label :"Assessing your organization", ariaLabel: false }]
            },{
              text: "Can we improve customer experience by working as a more cohesive team?",
              actions: [{ href: "#", label :"Assessing your organization", ariaLabel: false }]
            },{
              text: "Are we making the best technology choices for our organization?",
              actions: [{ href: "#", label :"Assessing your organization", ariaLabel: false }]
            },{
              text: "Can we more effeciently design and deliver a digital product?",
              actions: [{ href: "#", label :"Assessing your organization", ariaLabel: false }]
            },{
              text: "Are there unintended ways we may be limiting access to our content, products, and services?",
              actions: [{ href: "#", label :"Assessing your organization", ariaLabel: false }]
            }].map((item, key) => (
              <div key={ key }>
                <p className="text-24 font-bold pb-2">{ item.text }</p>
                { item.actions.map((action, key) => <Action key={key} href={ action.href }>{ action.label }</Action> )}
              </div>
            ))}
          </StackContent>
        </StackItem>



        <StackItem className="bg-yeah-yellow text-black" divide={ true }>
          <StackContent>
            <h2 className="text-40 font-bold mb-8">Client roster</h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              { [
                { "name": "Toronto Public Library" },
                { "name": "Boon" }
              ]?.map(( client, key ) =>
                <div className="bg-black bg-opacity-5 rounded min-h-[6rem] flex items-center justify-center" key={ key }>
                  { client.name }
                </div>
              )}
            </div>

            <Action>Additional clients and industries served</Action>
          </StackContent>
        </StackItem>

        <StackItem>
          <StackContent>
            <div className="col-span-full mb-3">
              <h2 className="text-40 font-bold">The client experience</h2>
            </div>
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
          </StackContent>
        </StackItem>

        <StackItem className="bg-yeah-cola text-white">
          <StackContent className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 md:gap-y-8 gap-4">

            <div className="col-span-full">
              <h2 className="text-40 font-bold text-yeah-yellow max-w-[40rem]">
                Our commitments to diversity, equity, and inclusion
              </h2>
            </div>

            <div className="flex flex-col items-start justify-items-end">
              <h3 className="text-24 font-bold text-yeah-tan mb-3">
                Our commitments
              </h3>
              <p className="mb-4">
                We’re committed to inclusive, anti-racist practices in our work, hiring processes, and collaborations. As part of this commitment, we’ve signed pledges like BlackNorth’s CEO pledge and The Contract for the Web, as well as creating our own call to action for design agency leaders.
                </p>
              <Button className="bg-yeah-yellow text-black mb-0 mt-auto" href="#">
                Our anti-racism call to action
              </Button>
            </div>

            <div className="flex flex-col items-start justify-items-end">
              <h3 className="text-24 font-bold text-yeah-tan mb-3">
                Supplier diversity
              </h3>
              <p>
                We intentionally seek out diverse and inclusive suppliers and service providers and continue to demand more of the suppliers and clients we work with.
              </p>
              <Button className="bg-yeah-yellow text-black mb-0 mt-auto"
                href="#">
                Our supplier diversity practices
              </Button>
            </div>
          </StackContent>
        </StackItem>

        <StackItem className="bg-yeah-yellow text-black">
          <StackContent>
            <div className="max-w-[40rem] mb-8">

              <h2 className="text-40 font-bold text-black max-w-[40rem] mb-8">
                Digital insights
              </h2>
              <p className="text-24">
                Essential inclusive design and digital transformation resources, research, case studies, and references
              </p>
            </div>

            <Action>All insights</Action>

          </StackContent>

        </StackItem>

        <StackItem className="bg-yeah-yellow text-black">
          <StackContent>
            <h2 className="text-40 font-bold mb-8">We’ve been featured by</h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              { /* Iterate Featured Outlets */
                [{
                  name: "SXSW"
                },{
                  name: "FITC"
                },{
                  name: "Digital Journal"
                },{
                  name: "UX Magazine"
                },{
                  name: "CTV News Channel"
                }].map((client, key) =>
                  <div key={ key } className="bg-black bg-opacity-5 rounded min-h-[6rem] flex items-center justify-center">
                    { client.name }
                  </div>
                )
              }
            </div>

          </StackContent>
        </StackItem>

        <CallToAction>Let’s explore how delivering more inclusive products and services can help you win markets</CallToAction>
      </main>
    </Layout>
  )
}


