import Head from 'next/head'
import Link from 'next/link'
import Layout from 'ui/Layout'
import Button from 'ui/components/Button'
import Card from 'ui/components/Card'
import View from 'ui/components/View'
import PhotoCard from 'ui/components/PhotoCard'
import Badge from 'ui/components/Badge'
import React from 'react'
import Testimonial from 'ui/components/Testimonial'
import Carousel from 'ui/components/Carousel'
import ReactPlayer from 'react-player'
import ReactMarkdown from 'react-markdown'

import JsonPreview from 'helpers/JsonPreview'


// Content
import data from "data/en-ca/homepage"
import meta from "data/en-ca/mainmenu"

function PageHeading({ data }) {
  return <View className="min-h-[60vh]" theme="black">
    <View.Content className="grid gap-6 grid-cols-1 md:grid-cols-2 max-w-[60rem] content-center" aria-label="Masthead">
      <div className="flex flex-col items-start space-y-6">
      <h1 className="text-40 text-yeah-yellow font-bold">{ data.title }</h1>
      <p className="text-24">{ data.catchline }</p>
      <ul className="space-y-2">
        { data?.actions.map(action =>
          <li><a href={ action.href } aria-label={ action.ariaLabel }>{ action.label }</a></li>
        )}
      </ul>
      </div>
    </View.Content>
  </View>
}

function DecisionCards({ data }) {
  return <View theme="yellow" className="">
  <View.Content className="space-y-8">
    <h2 className="text-32 font-bold">{ data.title }</h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      { data.cards.map(card => (
        <Card>
          <Card.Content className="flex flex-col items-start h-full">
            <ReactMarkdown className="text-20 leading-normal mb-4">{ card.blurb }</ReactMarkdown>

            { card.actions.map( action => (
              <Button
                key={ action.href }
                className="mt-auto mb-0"
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
  </View.Content>
</View>
}

function Action({ children, href }){
  return <a href={ href }>{ children }</a>
}

function Navigation({ children, name }){
  return <nav aria-label={ name } className="flex items-center">
    <ul className="flex space-x-8 text-lg py-6">
      { children }
    </ul>
  </nav>
}

Navigation.Item = ({ children, href = "#" }) => (
  <li>
    <Link href={ href }>
      <a className="px-4 py-2 rounded hover:bg-yeah-yellow hover:text-black focus:outline-transparent focus:ring-4 focus:ring-yeah-yellow focus:text-white">
        { children }
      </a>
    </Link>
  </li>
)

function OutcomeCards({ data }) {
  return (
    <View theme="cola" className="flex flex-col">
      <View.Content className="pb-4">
        <h2 className="text-32 font-bold text-yeah-yellow col-span-full">
          { data.title }
        </h2>
      </View.Content>

      <Carousel className="-mx-4">
        { data.cards.map(card => (
        <Card className="text-black">
          <Card.Photo src='https://source.unsplash.com/random/401x225' />
          <Card.Content className="space-y-4">
            { card.tags.map(tag => <Badge>{ tag }</Badge>)}
            <ReactMarkdown className="text-20 font-bold">Reshaping experience to support and retain users through a multi-step sales funnel.</ReactMarkdown>
          </Card.Content>
        </Card>
        ))}
      </Carousel>
    </View>
  )
}

function ImpactfulChallenges({ data }) {
  return <View theme="cola">
    <View.Content className="grid grid-cols-1 sm:grid-cols-2 gap-12">

      <h2 className="text-32 font-bold text-yeah-yellow col-span-full">
        { data.title }
      </h2>

      { data.items.map(item => (
        <div>
          <p className="text-24 font-bold pb-2">{ item.blurb }</p>
          { item.actions.map(action => <Action href={ action.href }>{ action.label }</Action> )}
        </div>
      ))}

    </View.Content>
  </View>
}

function ClientRoster({ data }){
  return <View divide={ true }>
    <View.Content className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      { data.title && <h2 className="text-28 font-bold col-span-full">{ data.title }</h2> }

      { data.clients.map(client =>
        <div className="bg-black bg-opacity-5 rounded min-h-[6rem] flex items-center justify-center">{ client.name }</div>
      )}

      <div className="col-span-full">
        <Action>Additional clients and industries served</Action>
      </div>

    </View.Content>
  </View>
}

function FeaturedTestimonial({ data }) {
  return <View>
    <View.Content size="md">
      <Testimonial cite={ data.cite }>
        <ReactMarkdown>{ data.blurb }</ReactMarkdown>
      </Testimonial>
    </View.Content>
  </View>
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Say Yeah</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-black text-white w-screen px-4">

      <header className="max-w-[60rem] mx-auto flex justify-between items-center">
        <span className="font-bold text-lg">Say Yeah</span>
        <Navigation name="Primary">
          <Navigation.Item href="#">Solutions</Navigation.Item>
          <Navigation.Item href="#">Work</Navigation.Item>
          <Navigation.Item href="#">Insights</Navigation.Item>
          <Navigation.Item href="#">About</Navigation.Item>
        </Navigation>
      </header>
      </div>

      <main className="flex flex-col items-center justify-center w-full flex-1">


        <PageHeading data={ data.PageHeading } />
        <DecisionCards data={ data.DecisionCards } />
        <OutcomeCards data={ data.OutcomeCards } />
        <ImpactfulChallenges data={ data.ImpactfulChallenges } />
        <ClientRoster data={ data.ClientRoster } />
        <FeaturedTestimonial data={ data.FeaturedTestimonial } />

        <View>
          <div className="w-[60rem] h-[60rem]">
          <ReactPlayer
            width="100%"
            height="100%"
            className="bg-red-400"
            url="https://sayyeah.com/wp-content/uploads/2020/02/mark_testimonial.mp4"
            controls={ true }
            config={{
              file: {
                attributes: {
                  poster: "https://sayyeah.com/wp-content/uploads/2020/02/mark_testimonial-1.jpg",
                  preload: 'metadata',
                },
                tracks: [{
                  kind: 'subtitles',
                  label: "English",
                  src: '/captions/markdowds_testimonial.vtt',
                  srcLang: 'en',
                  default: true
                }]
              }
            }}

            />
          </div>
        </View>
      </main>
    </>
  )
}
