import { useGetStaticPaths, useGetStaticProps } from 'helpers/fetchData'

import Layout from 'ui/Layout'

import Quoted from "ui/components/Quoted"
import Button from "ui/components/Button"
import Card from "ui/components/Card"
import Heading from "ui/components/Heading"
import { Stack, StackItem, StackContent } from "ui/components/Stack"
import Hero from "ui/stackitems/Hero"
import CallToAction from "ui/stackitems/CallToAction"
import CaseStudies from "ui/stackitems/CaseStudies"
import ReactMarkdown from 'react-markdown'

export default function Solutions({ data }){

  if (!data) return null;

  return <Layout>

    <Stack>
      <Hero data={ data.hero }/>

      <StackItem className="bg-yeah-cola text-white">
        <StackContent className="space-y-8">
          <Heading level="2" className="text-yeah-yellow max-w-[40rem]">
            { data.solutions.title }
          </Heading>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            { data.solutions.questions.map(item =>
              <Quoted className="text-28 font-bold">
                { item }
              </Quoted>
            )}
          </div>

          <p className="text-yeah-tan text-24 font-bold max-w-[40rem]">
          We’re here to help you answer these and other questions that improve engagement with your market.
          </p>

          <Button href="#" className="text-black bg-yeah-yellow">Get in touch</Button>

        </StackContent>
      </StackItem>

      <StackItem className="bg-yeah-yellow text-black" divide={ true }>
        <StackContent>

          <div className="max-w-[40rem] space-y-4 text-18">

          <Heading level="2">
            { data.description.title }
          </Heading>
          <ReactMarkdown>{ data.description.text }</ReactMarkdown>
          </div>
        </StackContent>
      </StackItem>

      <StackItem className="bg-yeah-yellow text-black">
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


      <CaseStudies></CaseStudies>

      <StackItem className="bg-yeah-yellow text-black">
        <StackContent className="grid grid-cols-1 gap-12">
          <Heading level="2" className="max-w-[40rem]">
            { data.related.title }
          </Heading>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          { data.related.items.map(({ title, text, action }) => <Card className="bg-yeah-sunshine p-6 flex flex-col">
            <h3 className="text-24 font-bold mb-4">
              { title }
            </h3>
            <p className="mb-4">
              { text }
            </p>
            <Button
              href={ action.href }
              className="text-black border border-yeah-gold hover:bg-yeah-gold mt-auto mb-0"
            >
              { action.label } { action.srLabel && <span className="sr-only">{ action.srLabel }</span> }
            </Button>
          </Card>
          )}
          </div>
        </StackContent>
      </StackItem>

      <CallToAction>
        { data.callToAction }
      </CallToAction>
    </Stack>
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