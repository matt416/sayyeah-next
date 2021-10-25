import ReactMarkdown from "react-markdown"
import LinkButton from "ui/components/LinkButton"
import Quote from 'ui/components/Quote'

import Hero from "ui/templates/Hero"
import RelatedServiceCards from 'ui/templates/RelatedServiceCards'
import ClientCards from 'ui/templates/ClientCards'

import Layout from 'ui/layout/Layout'
import Main from 'ui/layout/Main'
import Section from 'ui/layout/Section'
import Flex from 'ui/layout/Flex'
import Grid from 'ui/layout/Grid'

export default function InclusiveWebsiteDesign(){

  return <Layout>

    <Main>
      <Hero {...{
          image: { src: "/_public/heroes/user-research.png" },
          title: "Market & user research",
          catchline: "Learn how research can help your team accelerate decision-making and deliver exceptional products and services."
        }}
      />

      <Section bgColor="bg-sy-earth" textColor="white">
        <Grid>
          <h2 className="max-w-readable text-32 text-sy-yellow font-bold col-span-full">Research is the key to realizing untapped opportunities</h2>
          { [
            "How do we improve customer experience by better aligning to the needs of our target market?",
            "How can customer segmentation and journey mapping improve our products and services?",
            "Is there a low cost way we can materially improve our existing products and services?",
            "What market opportunities are we missing?"
          ].map((item, key) =>
            <Quote>{ item }</Quote>
          )}
          <div className="max-w-readable col-span-full text-20 text-sy-mocha space-y-4">
            <p>We’re here to help you answer these and other questions that improve engagement with your market.</p>
            <LinkButton href="/contact-us/" bgColor="bg-sy-yellow" textColor="text-black">Get in touch</LinkButton>
          </div>
        </Grid>
      </Section>

      <Section bgColor="yellow">
        <Flex space="4">
          <h2 className="text-32 font-bold col-span-full max-w-readable">Why research is key to any digital transformation strategy</h2>
            <p>One constant throughout all of our digital transformation work is the need for effective research, analysis, synthesis, and actionable next steps for the organizations we work with.</p>
            <p>Understanding how vital effective research practices are in shaping and meeting organizational outcomes, we have cultivated multi-disciplinary research expertise and built trusted supplier relationships that cover all facets of research.</p>
            <p>From internal organizational insights to broad market insights, qualitative to quantitative, in-person to remote, we pull from an extensive research toolkit to ensure exceptional organizational outcomes.</p>
        </Flex>
      </Section>

      <Section bgColor="yellow" divide={ true }>
        <Flex space="4">
          <h2 className="text-32 font-bold col-span-full max-w-readable">Research is a constant throughout an effective product and service development lifecycle</h2>
            <p>From identifying market opportunities ahead of making product or service decisions to making user and data-informed decisions based on ongoing engagement with customers as an organization’s offering continues to mature.</p>
            <p>Key to our approach is following a “show, learn, and iterate” process, where we conduct just enough research to move forward effectively, using an informative lean research process that enables organizational action.</p>
        </Flex>
      </Section>

      <Section bgColor="yellow" divide={ true }>
        <Flex space="space-y-8">
          <div className="max-w-readable space-y-4">

            <h2 className="text-32 font-bold">From research to roadmap</h2>

            <p>Market and user research considers a variety of factors that impact your organization. Our research, service design, and product strategy expertise, blends research practices, synthesis, analysis, and actionable next steps to define ideal and viable future states for your organization.</p>

          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8">
            <h3 className="text-24 font-bold leading-tight col-span-full max-w-readable">The factors that influence product and service opportunities</h3>
            <div>
              <span className="font-bold mb-2">Market factors</span>
              <ul className="list-outside pl-[0.875rem] list-disc">
                <li>Market opportunity</li>
                <li>Audience</li>
                <li>Competition and landscape</li>
                <li>Future tech, research, and processes</li>
                <li>Regulations</li>
                <li>Funding</li>
                <li>Macro-economic changes or shocks</li>
              </ul>
            </div>
            <div>
              <span className="font-bold mb-2">Organizational factors</span>
              <ul className="list-outside pl-[0.875rem] list-disc">
                <li>Products and services</li>
                <li>Resources</li>
                <li>Investments and required costs</li>
                <li>Marketing</li>
                <li>Distribution</li>
                <li>Operations</li>
              </ul>
            </div>
            <div>
              <span className="font-bold mb-2">Time horizon</span>
              <p>Considering current state and paths and lengths of time to reach any number of possible future states.</p>
            </div>
          </div>

          <div className="max-w-readable space-y-4">
            <p className="text-24 font-bold leading-tight">Find your path to an ideal and actionable future state today.</p>
            <LinkButton href="/contact-us/">Get in touch</LinkButton>
          </div>
        </Flex>
      </Section>

      <Section bgColor="yellow" textColor="black" divide={ true }>
        <Flex>
          <h2 className="text-32 font-bold max-w-readable">Pillars of an effective research practice</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            { [
              { title: 'Collaboration toward insight',
                body: 'We work closely with the client team throughout the project, collaborating on the planning and research, while targeting ideal insights and outcomes. As part of this process, we take the time to understand how we can work within the client’s strengths and capabilities to ensure actionable results.'
            },{
              title: 'Engaging in multiple perspectives',
              body: 'To get the broadest view possible of both current and future state objectives, we encourage all stakeholders to give their input through inclusive surveying, workshopping, interviewing, and other techniques.'
            },{
              title: 'Empowering others in the process',
              body: 'Iterative, ongoing research is a hallmark of exceptional organizations. Bringing research practices to an organization is a natural part of our engagements. We coach on human-centred processes, culture building, collaboration, and methodologies that support continuous insights, beyond our engagements.'
            },{
              title: 'Focusing on outcomes',
              body: 'Every research project has its constraints and desired outcomes. Different research methodologies are required to suit each goal. This stage is where an expansive research toolkit becomes critical. We define the most effective approach to gain meaninful insights that build toward impactful outcomes.'
            }].map(item => <div className="space-y-4">
              <h3 className="text-24 font-bold leading-tight">{ item.title }</h3>
              <ReactMarkdown>{ item.body }</ReactMarkdown>
            </div>
            )}
          </div>
        </Flex>
      </Section>

      <RelatedServiceCards items={ ["essentialWebsiteAudit", "accessibleWebsiteDesign", "usabilityTesting", "accessibleDevelopmentGuide"] }/>
      <ClientCards bgColor="white" />

      {/** Call to action */}
      <Section bgColor="white" divide="true">
        <Flex>
          <p className="text-24">Are you ready to improve the performance and outcomes of your website?</p>
          <LinkButton href="#" bgColor="bg-sy-yellow" textColor="text-black">Get in touch</LinkButton>
        </Flex>
      </Section>

    </Main>
  </Layout>
}