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
      <a className="px-4 py-2 rounded hover:bg-yeah-yellow hover:text-black focus:outline-transparent focus:text-yeah-yellow focus:ring-4 focus:ring-yeah-yellow focus:text-black">
        { children }
      </a>
    </Link>
  </li>
)

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
        <View className="min-h-[60vh]" theme="black">

        {/* <div className="flex justify-center bg-black text-white min-h-[60vh] w-screen px-4"> */}
          <View.Content className="grid gap-6 grid-cols-1 md:grid-cols-2 max-w-[60rem] content-center" aria-label="Masthead">
            <div className="flex flex-col items-start space-y-6">
            <h1 className="text-40 text-yeah-yellow font-bold">Deliver products and services that win diverse markets</h1>
            <p className="text-24">As markets continue to evolve, leading organizations must adapt to shifting consumer expectations.</p>
            <ul className="space-y-2">
              <li><a href="#">Why designing for the average person hurts your bottom line →</a></li>
              <li><a href="#">The role of technolgy in building market leaders →</a></li>
            </ul>
            </div>
          </View.Content>
        {/* </div> */}
        </View>

        <View theme="yellow" className="">
          <View.Content className="space-y-8">
            <h2 className="text-32 font-bold">Bring clarity to decision-making</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card>
              <Card.Content className="flex flex-col items-start h-full">
                  <p className="text-20 leading-normal mb-4">
                    <strong>Modernize your organization</strong> towards more efficient service delivery and improved customer experience.
                  </p>
                  <Button>Get started</Button>
                </Card.Content>
              </Card>
              <Card>
                <Card.Content className="flex flex-col items-start h-full">
                  <p className="text-20 leading-normal mb-4">
                    <strong>Define, deliver, and maintain digital products</strong> that reduce costs and increase adoption.
                  </p>
                  <Button className="mt-auto mb-0">Get started</Button>

                </Card.Content>
              </Card>
            </div>
          </View.Content>


        </View>

        <View theme="cola" className="flex flex-col">
          <View.Content className="pb-4">
            <h2 className="text-32 font-bold text-yeah-yellow col-span-full">
              Achieve exceptional outcomes
            </h2>
          </View.Content>

          <Carousel className="-mx-4">
            <Card className="text-black">
              <Card.Photo src='https://source.unsplash.com/random/401x225' />
              <Card.Content className="space-y-4">
                <Badge>Service design</Badge>
                <p className="text-20 font-bold">Reshaping experience to support and retain users through a multi-step sales funnel.</p>
              </Card.Content>
            </Card>
            <Card className="text-black">
              <Card.Photo src='https://source.unsplash.com/random/402x225' />
              <Card.Content className="space-y-4">
                <Badge>Product design</Badge>
                <p className="text-20 font-bold">Reshaping experience to support and retain users through a multi-step sales  funnel.</p>
              </Card.Content>
            </Card>
            <Card className="text-black">
            <Card.Photo src='https://source.unsplash.com/random/403x225' />
              <Card.Content className="space-y-4">
                <Badge>Service design</Badge>
                <p className="text-20 font-bold">Reshaping experience to support and retain users through a multi-step sales  funnel.</p>
              </Card.Content>
            </Card>
            <Card className="text-black">
              <Card.Photo src='https://source.unsplash.com/random/400x225' />
              <Card.Content className="space-y-4">
                <Badge>Service design</Badge>
                <p className="text-20 font-bold">Reshaping experience to support and retain users through a multi-step sales  funnel.</p>
              </Card.Content>
            </Card>
          </Carousel>
        </View>

        <View theme="cola">
          <View.Content className="grid grid-cols-1 sm:grid-cols-2 gap-12">

            <h2 className="text-32 font-bold text-yeah-yellow col-span-full">
              Solve your most impactful organizational challenges
            </h2>



            <div>
              <p className="text-24 font-bold pb-2">How can technology improve how we work?</p>
              <Action href="#">Assessing your organization</Action>
            </div>
            <div>
              <p className="text-24 font-bold pb-2">Can our products and services better serve our market?</p>
              <Action href="#">Assessing your organization</Action>
            </div>
            <div>
              <p className="text-24 font-bold pb-2">Can we improve customer experience by working as a more cohesive team?</p>
              <Action href="#">Assessing your organization</Action>
            </div>
            <div>
              <p className="text-24 font-bold pb-2">Are we making the best technology choices for our organization?</p>
              <Action href="#">Assessing your organization</Action>
            </div>
            <div>
              <p className="text-24 font-bold pb-2">Can we more effeciently design and deliver a digital product?</p>
              <Action href="#">Assessing your organization</Action>
            </div>
            <div>
              <p className="text-24 font-bold pb-2">Are there unintended ways we may be limiting access to our content, products, and services?</p>
              <Action href="#">Assessing your organization</Action>
            </div>
          </View.Content>

        </View>

        <View name="Client Roster" divide={ true }>
          <View.Content className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            <h2 className="text-28 font-bold col-span-full">Our client roster</h2>

            <div className="bg-black bg-opacity-5 rounded min-h-[6rem] flex items-center justify-center">Client</div>
            <div className="bg-black bg-opacity-5 rounded min-h-[6rem] flex items-center justify-center">Client</div>
            <div className="bg-black bg-opacity-5 rounded min-h-[6rem] flex items-center justify-center">Client</div>
            <div className="bg-black bg-opacity-5 rounded min-h-[6rem] flex items-center justify-center">Client</div>

            <div className="bg-black bg-opacity-5 rounded min-h-[6rem] flex items-center justify-center">Client</div>
            <div className="bg-black bg-opacity-5 rounded min-h-[6rem] flex items-center justify-center">Client</div>
            <div className="bg-black bg-opacity-5 rounded min-h-[6rem] flex items-center justify-center">Client</div>
            <div className="bg-black bg-opacity-5 rounded min-h-[6rem] flex items-center justify-center">Client</div>

            <div className="col-span-full">
              <Action>Additional clients and industries served</Action>
            </div>

          </View.Content>
        </View>
        <View name="Testimonial">
          <View.Content size="md">
            <Testimonial cite="Aran Hamilton, CEO, Vantage Analytics">
              <p>Working with Say Yeah is a major step towards not wasting hundreds of thousands of dollars building the wrong thing because of poor planning.</p>
            </Testimonial>
          </View.Content>
        </View>

        <View >
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
