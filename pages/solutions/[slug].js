import { useGetStaticPaths, useGetStaticProps } from 'helpers/fetchData'

import { SERVICE_SUMMARIES } from 'data/en-ca/collections/service_summaries'

import Layout from 'ui/Layout'

import LeftQuote from "ui/svg/LeftQuote"
import RightQuote from "ui/svg/RightQuote"
import LinkButton from "ui/components/LinkButton"
import Card from "ui/components/Card"
import Heading from "ui/components/Heading"
import { Stack, StackItem, StackContent } from "ui/components/Stack"
import Hero from "ui/stackitems/Hero"
import CallToAction from "ui/stackitems/CallToAction"
import CaseStudies from "ui/stackitems/CaseStudies"
import ReactMarkdown from 'react-markdown'
import AccessibleLabel from "ui/components/AccessibleLabel"
export default function Solutions({ data }){

  if (!data) return null;


  return <Layout>

    <main tabIndex="-1" id="main-content" className="stack-header-and-main-using-grid">
      <Hero { ...data.hero }/>

      <StackItem className="bg-sy-earth text-white">
        <StackContent className="space-y-8">
          <Heading level="2" className="text-sy-yellow max-w-[40rem]">
            { data.solutions.title }
          </Heading>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            { data.solutions.questions.map((item, key) =>
              <div key={ key }>
                <p className="text-24 font-bold mb-4 inline-block">
                  <LeftQuote width="16" className="ml-[-1.5rem] text-sy-mocha"/>{ item }<RightQuote width="16" className="text-sy-mocha" />
                </p>
              </div>
            )}
          </div>

          { data.solutions.callToAction ?
            <>
              <p className="text-sy-mocha text-24 font-bold max-w-[40rem]">
                { data.solutions.callToAction.text }
              </p>
              <LinkButton href={ data.solutions.callToAction.action.href } textColor="text-black" bgColor="bg-sy-yellow">{ data.solutions.callToAction.action.label }</LinkButton>
            </>
          : null }
        </StackContent>
      </StackItem>

      <StackItem className="bg-sy-yellow text-black" divide={ true }>
        <StackContent>

          <div className="max-w-[40rem] space-y-4 text-18">

          <Heading level="2">
            { data.description.title }
          </Heading>
          <ReactMarkdown>{ data.description.text }</ReactMarkdown>
          </div>
        </StackContent>
      </StackItem>

      <StackItem className="bg-sy-yellow text-black">
        <StackContent className="grid grid-cols-1 gap-12">
          <Heading level="2" className="max-w-[40rem]">
            { data.toolkit.title }
          </Heading>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            { data.toolkit.items.map(item => <div className="space-y-4">
              <h3 className="text-24 font-bold ">{ item.title }</h3>
              <ReactMarkdown>{ item.text }</ReactMarkdown>
            </div>
            )}
          </div>
        </StackContent>
      </StackItem>


      {/* <CaseStudies></CaseStudies> */}

      <StackItem className="bg-sy-yellow text-black">
        <StackContent className="grid grid-cols-1 gap-12">
          <Heading level="2" className="max-w-[40rem]">
            { data.related.title }
          </Heading>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          { data.related.items.map(key => SERVICE_SUMMARIES[key]).map(({ title, text, action }) => <Card className="bg-sy-sunshine p-6 flex flex-col">
            <h3 className="text-24 font-bold mb-4">
              { title }
            </h3>
            <p className="mb-4">
              { text }
            </p>
            <LinkButton
              href={ action.href }
              className="text-black border border-sy-gold hover:bg-sy-gold mt-auto mb-0 bg-transparent"
            >
              <AccessibleLabel>{ action.label }</AccessibleLabel>
            </LinkButton>
          </Card>
          )}
          </div>
        </StackContent>
      </StackItem>

      <CallToAction>
        { data.callToAction }
      </CallToAction>
    </main>
  </Layout>
}

export async function getStaticProps({ params }) {

  const { slug } = params

  return {
    props: {
      data: await useGetStaticProps({ type: "solutions", slug })
    },
    revalidate: 1,
  }
}

export async function getStaticPaths(){
  return {
    paths: await useGetStaticPaths({ type: "solutions" }),
    fallback: true
  }
}