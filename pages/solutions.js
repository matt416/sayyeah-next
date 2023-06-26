import React from 'react'
import Image from 'next/image'
import ReactMarkdown from "react-markdown"
import { NextSeo } from "next-seo"
import Layout from 'ui/layout/Layout'
import Flex from 'ui/layout/Flex'
import Section from 'ui/layout/Section'
import Main from 'ui/layout/Main'

import Card from "ui/components/Card"
import LinkButton from "ui/components/LinkButton"
import Quote from 'ui/components/Quote'

import Hero from 'ui/templates/Hero'

export default function Solutions(){
  return <Layout>
    <Main>
      <NextSeo
          title="Say Yeah’s product and service solutions"
          description="We have a series of product and service solutions to solve complex organizational challenges and better serve increasingly diverse markets."
          openGraph={{
            images: [
              {
                url: `${process.env.NEXT_PUBLIC_BASE_URL}/heroes/inclusive-design.png`,
                width: 1200,
                height: 627,
                alt: 'Say Yeah’s product and service solutions',
              },
            ],
          }}
        />
      <Hero {...{
        name: "Solutions",
        title: "Delive transformational tech + education experiences",
        catchline: `Leading organizations require thoughtful digital solutions that better serve increasingly diverse markets.\n\n Let’s take a look at the most common client challenges we can help you solve.`,
        image: { src: "/heroes/solutions.png" },

      }} />

      <Section className="bg-sy-yellow text-black flex-col space-y-24">
        <Flex>


          { [
{
  title:"eLearning Services",
  questions:[
    "How do we transform learning material into more effective online courses?",
    "Can we deliver a course and interactions that are accessible to all learners?"
  ],
  answer:{
    img:{ src: "/img/icons/elearning.svg", alt: "" },
    body:"**Combine education and technology best practices** to deliver improved learning outcomes for all.",
    actions:[
      {
        label:"eLearning and training services",
        href:"/solutions/elearning-services/"
      }
    ]
  }
},
            {
              title:"Product Strategy",
              questions:[
                "Can we improve product engagement and retention?",
                "Does our product’s purpose and roadmap align with our organization’s and our user’s objectives?"
              ],
              answer:{
                img:{ src: "/img/icons/devices.svg", alt: "" },
                body:"**Define, design, and deliver digital products** that reduce costs and increase adoption.",
                actions:[
                  {
                    label:"Product strategy",
                    href:"/solutions/product-strategy/"
                  }
                ]
              }
            },



            {
              title:"Inclusive Design",
              questions:[
                "Can we grow our market share by delivering more inclusive products and services?",
                "Are there unintended ways we may be limiting access to our content, products, or services?"
              ],
              answer:{
                img:{ src: "/img/icons/inclusive.svg", alt: "" },
                body:"**Open up access to markets** with more usable, accessible, and inclusive products and services.",
                actions:[
                  {
                    label:"Inclusive design",
                    href:"/solutions/inclusive-design/"
                  }
                ]
              }
            },
            {
              title:"Support for custom solutions",
              questions:[
                "For support with other digital transformation or product and service needs."
              ],
              answer:{
                img:{ src: "/img/icons/award.svg", alt: "" },
                body:"**Connect with our globally recognized team** so we can help you find your most efficient path to success.",
                actions:[
                  {
                    label:"Get in touch",
                    href:"/contact-us/"
                  }
                ]
              }
            }
          ].map((item, key) => (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 gap-x-12 py-16" key={ key }>
              <h3 className="sr-only">{ item.title }</h3>
              <div className="flex flex-col">
                <p className="mb-2">If you’re asking...</p>
                <ul className="space-y-8 flex-1 flex flex-col">
                  { item?.questions?.map((question, index) => (
                    <Quote nodeType="li" key={ index } quoteColor="bronze">{ question }</Quote>
                    ))}
                </ul>
              </div>

              <div className="flex flex-col items-stretch justify-items-stretch">
                <p className="mb-2">You’ll want to...</p>
                <Card className="flex flex-col flex-1">
                  <Card.Content className="flex flex-col items-start flex-1 h-full">


                    { item.answer?.img?.src ? <Image src={ item.answer.img.src } alt={ item.answer.img.alt } width="56" height="56" /> : null }

                    <ReactMarkdown className="text-20 leading-normal mb-4">{ item?.answer?.body }</ReactMarkdown>

                    { item?.answer?.actions.map( action => (
                      <LinkButton
                        key={ action.href }
                        className="bg-sy-gold text-black mt-auto mb-0"
                        href={ action.href }
                      >
                        { action.label }
                      </LinkButton>
                    ) ) }
                  </Card.Content>
                </Card>
              </div>
            </div>
          )) }
        </Flex>
      </Section>
    </Main>
  </Layout>
}