import React from 'react'
import ReactMarkdown from "react-markdown"

import Layout from 'ui/Layout'
import { Stack, StackItem, StackContent } from 'ui/components/Stack'

import Action from "ui/components/Action"
import Card from "ui/components/Card"
import Button from "ui/components/Button"
import Carousel from "ui/components/Carousel"

import Hero from 'ui/stackitems/Hero'
import CallToAction from 'ui/stackitems/CallToAction'



const HERO = {
  name: "Solutions",
  title: "Achieve impactful objectives",
  catchline: `Evolving organizations require thoughtful solutions that help them better serve diverse markets.\n
  Let’s take a look at the most common client challenges we can help you solve.`
}

const SOLUTIONS = [
  {
    "title":"Service Design",
    "questions":[
      "How do we deliver service more effectively by increasing online adoption?",
      "Are we making the best technology choices for our organization?"
    ],
    "answer":{
      "icon":"",
      "text":"**Modernize your organization** towards more efficient service delivery and improved customer experience.",
      "actions":[
        {
          "label":"Service Design",
          "ariaLabel":false,
          "href":"/solutions/service-design"
        }
      ]
    }
  },
  {
    "title":"Product Strategy",
    "questions":[
      "Can we improve product engagement and retention?",
      "Does our product’s purpose and roadmap align with our organization’s and our user’s objectives?"
    ],
    "answer":{
      "icon":"",
      "text":"**Define, deliver, and maintain digital products** that reduce costs and increase adoption.",
      "actions":[
        {
          "label":"Product strategy",
          "ariaLabel":false,
          "href":"/solutions/product-strategy"
        }
      ]
    }
  },
  {
    "title":"User Research",
    "questions":[
      "Do we understand how our market’s behaviour and decision-making journey impacts us?",
      "How do we better align our products and services to the needs of our target market?"
    ],
    "answer":{
      "icon":"",
      "text":"**Grow your market understanding** in order to uncover product and services gaps and opportunities.",
      "actions":[
        {
          "label":"User research",
          "ariaLabel":false,
          "href":"#"
        }
      ]
    }
  },
  {
    "title":"Inclusive Design",
    "questions":[
      "Can we grow our market share by delivering more inclusive products and services?",
      "Are there unintended ways we may be limiting access to our content, products, or services?"
    ],
    "answer":{
      "icon":"",
      "text":"**Open up access to markets** with a more usable, accessible, and inclusive products and services.",
      "actions":[
        {
          "label":"Inclusive design",
          "ariaLabel":false,
          "href":"#"
        }
      ]
    }
  },
  {
    "title":"Inclusive Website Design",
    "questions":[
      "Can we do a better job of using our website as a tool for driving engagement and retention?",
      "Does our website follow standards that improve usability, accessibility, and inclusivity?"
    ],
    "answer":{
      "icon":"",
      "text":"**Deliver a responsive, accessible, and delightful website** that grow content access, engagement, and transactions.",
      "actions":[
        {
          "label":"Inclusive website design",
          "ariaLabel":false,
          "href":"#"
        }
      ]
    }
  },
  {
    "title":"Support for custom solutions",
    "questions":[
      "For support with other digital transformation or product and service needs."
    ],
    "answer":{
      "icon":"",
      "text":"**Connect with our globally recognized team** so we can help you find your most efficient path to success.",
      "actions":[
        {
          "label":"Get in touch",
          "ariaLabel":false,
          "href":"#"
        }
      ]
    }
  }
]

export default function Solutions(){
  return <Layout>
    <Stack>

      <Hero data={ HERO } />

      <StackItem className="bg-yeah-yellow text-black flex-col space-y-24">
        <StackContent>
          <h2 className="text-40 font-bold w-full max-w-[40rem]">
            We offer a suite of solutions that help you achieve your most impactful objectives
          </h2>

          { SOLUTIONS.map(item => (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 gap-x-12 py-16">
              <h3 className="sr-only">{ item.title }</h3>
              <div className="flex flex-col">
                <p className="mb-2">If you’re asking...</p>
                <ul className="space-y-8 flex-1 flex flex-col justify-around">
                  { item?.questions?.map((question, index) => (
                    <li className="text-24 font-bold quoted" key={ index }>{ question }</li>
                    ))}
                </ul>
              </div>

              <div className="flex items-stretch flex-col justify-items-stretch">
                <p className="mb-2">You’ll want to...</p>
                <Card className="flex flex-col flex-1">
                  <Card.Content className="flex flex-col items-start flex-1 h-full">
                    <ReactMarkdown className="text-20 leading-normal mb-4">{ item?.answer?.text }</ReactMarkdown>

                    { item?.answer?.actions.map( action => (
                      <Button
                      key={ action.href }
                      className="bg-yeah-gold text-black mt-auto mb-0"
                      href={ action.href }
                      ariaLabel={ action.ariaLabel }
                      >
                        { action.label }
                      </Button>
                    ) ) }
                  </Card.Content>
                </Card>
              </div>
            </div>
          )) }
        </StackContent>
      </StackItem>

      <StackItem className="bg-black text-yeah-yellow">
        <StackContent className="space-y-4">
          <h2 className="text-40 font-bold w-full max-w-[40rem]">
            Related case studies
          </h2>

          <Carousel className="-m-4">
            Ain't nobody
          </Carousel>

          <Action type="forward-arrow">All case studies</Action>
        </StackContent>
      </StackItem>

      <CallToAction>Let us know your most pressing challenges and we’ll guide you towards your next phase of organizational success.</CallToAction>
    </Stack>
  </Layout>
}