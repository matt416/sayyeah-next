import { useGetStaticPaths, useGetStaticProps } from 'helpers/fetchData'
import ReactMarkdown from 'react-markdown'

import LeftQuote from "ui/svg/LeftQuote"
import RightQuote from "ui/svg/RightQuote"
import LinkButton from "ui/components/LinkButton"
import Heading from "ui/components/Heading"
import Quote from 'ui/components/Quote'
import Layout from 'ui/layout/Layout'
import Section from 'ui/layout/Section'
import Grid from 'ui/layout/Grid'
import Flex from 'ui/layout/Flex'
import Main from 'ui/layout/Main'

import Hero from "ui/templates/Hero"
import CallToAction from "ui/templates/CallToAction"
import RelatedServiceCards from 'ui/templates/RelatedServiceCards'

export default function Solutions({ data }){

  if (!data) return null;

  return <Layout>
    <Main>
      <Hero { ...data.hero }/>

      { (({ title, questions, callToAction }) => {
      return <Section bgColor="bg-sy-earth" textColor="white">
        <Grid>
          <h2 className="max-w-readable text-32 text-sy-yellow font-bold col-span-full">{ title }</h2>
          { questions.map((item, key) =>
            <Quote key={ key }>{ item }</Quote>
          )}
          <div className="max-w-readable col-span-full text-20 text-sy-mocha space-y-4">
            <p>{ callToAction.text }</p>
            <LinkButton href={ callToAction.action.href } bgColor="bg-sy-yellow" textColor="text-black">{ callToAction.action.label }</LinkButton>
          </div>
        </Grid>
      </Section>

      })(data.solutions) }



      <Section bgColor="yellow" textColor="black" divide={ true }>
        <Flex>

          <div className="max-w-[40rem] space-y-4 text-18">

          <Heading level="2">
            { data.description.title }
          </Heading>
          <ReactMarkdown>{ data.description.text }</ReactMarkdown>
          </div>
        </Flex>
      </Section>

      <Section bgColor="yellow" textColor="black" divide={ true }>
        <Flex>
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
        </Flex>
      </Section>


      {/* <CaseStudies></CaseStudies> */}

      <RelatedServiceCards { ...data.related } />

      <CallToAction>
        { data.callToAction }
      </CallToAction>
    </Main>
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