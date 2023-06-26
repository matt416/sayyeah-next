
import { NextSeo } from 'next-seo'
import Layout from 'ui/layout/Layout'

import LinkButton from "ui/components/LinkButton"
import Image from "next/image"

import Hero from "ui/templates/Hero"
import RelatedServiceCards from 'ui/templates/RelatedServiceCards'
import ClientCards from 'ui/templates/ClientCards'

import Section from 'ui/layout/Section'
import Flex from 'ui/layout/Flex'
import Grid from 'ui/layout/Grid'
import Quote from 'ui/components/Quote'
import ReactMarkdown from 'react-markdown'

export default function InclusiveWebsiteDesign() {

  return <Layout>
    <NextSeo
      title="eLearning and training services"
      description=""
      openGraph={{
        images: [
          {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/heroes/elearning.png`,
            width: 1200,
            height: 627,
            alt: 'Inclusive design: a comprehensive methodology from Say Yeah!',
          },
        ],
      }}
    />
    <main tabIndex="-1" id="main-content">
      <Hero {...{
        image: {
          "src": "/heroes/elearning.png"
        },
        title: "eLearning and training services",
        catchline: "Turn training into your competitive advantage.\n\nA full-service solution to delivering engaging, impactful, and accessible digital-enabled learning programs."
      }}
      />

      <Section bgColor="bg-sy-earth" textColor="white">
        <Grid>
          <h2 className=" text-32 text-sy-yellow font-bold col-span-full">
          Common client challenges
          </h2>
          {[
            "How do we enhance professional development programs with highly effective online or hybrid courses?",
            "Can I entrust a single company to ensure seamless end-to-end course delivery and development?",
            "Can we deliver a course and interactions that are accessible to all learners?",
            "Is it possible to develop exceptional online courses using my preferred LMS?"
          ].map((item, key) =>
            <Quote>{item}</Quote>
          )}
          <div className=" col-span-full text-20 text-sy-mocha space-y-4">
            <p className="font-bold text-20">We're here to answer these and other questions, empowering you to construct powerful eLearning and training experiences.</p>
            <LinkButton href="/contact-us/" bgColor="yellow" textColor="black" textSize="18">Get in touch</LinkButton>
          </div>
        </Grid>
      </Section>

      <Section bgColor="yellow">
        <Flex>
          <div className=" space-y-4 text-18">
            <h2 className="text-32 font-bold">The path to turning training into your competitive advantage.</h2>

            <p>The digital transformation of learning has revolutionized the way we work, educate, and empower learners.</p>

            <p>We take a learner-centred approach that celebrates and prioritizes that we all learn in different ways — moving beyond a one-size-suits-everyone approach to learning and training to leverage the capability of technology to provide multiple modes of engaging with learning content.</p>

            <p>We help you unlock the potential of your learning and development programs and its many participants to enhance their everyday work, and grow their capabilities. <span className="font-bold">Ultimately, turning training into your competitive advantage.</span></p>
            <LinkButton href="/contact-us/" bgColor="black" textColor="white" textSize="18">Get in touch</LinkButton>

          </div>
        </Flex>
      </Section>

      <Section bgColor="yellow" divide="true">
        <Grid>
          <h2 className="text-32 font-bold max-w-readable col-span-full">Key differentiators</h2>

          <div className="text-20">
            <h3 className="font-bold inline">Full-service course development and delivery</h3>
            <p className="inline"> with reliable project management and quality assurance practices.</p>
          </div>
          <div className="text-20">
            <h3 className="font-bold inline">Extensive digital and UX expertise that lives alongside pedagogy, instructional design, and learning science</h3>
            <p className="inline"> to deliver accessible, personalized, and engaging courses that all learners can benefit from.</p>
          </div>
          <div className="text-20">
            <h3 className="font-bold inline">A Variable Learning Model</h3>
            <p className="inline"> that takes a learner-focused approach to shaping content, media, interactions, assessments to the unique needs of individual learners.</p>
          </div>
          <div className="text-20">
            <h3 className="font-bold inline">A foundational course working paired with an on-demand digital Resource Toolkit</h3>
            <p className="inline"> that enables learners to move from theory to practice to improve their day-to-day work.</p>
          </div>
          <div className="text-20">
            <h3 className="font-bold inline">Ongoing research and continuous improvement course feedback loops</h3>
            <p className="inline"> to measure outcomes and improve user experience.</p>
          </div>

          </Grid>
          </Section>
      <Section bgColor="bg-sy-earth" textColor="white">
      <Flex space="space-y-8">
        <blockquote>

        <Quote>
          Say Yeah’s approach expands the potential of eLearning, ensuring that diverse learners can thrive and succeed in their own distinctive ways and propelling online learning programs to new heights of success and effectiveness.
        </Quote>
        <cite className="not-italic text-20 text-sy-mocha"><span className="font-bold">Mandy Bonisteel</span>, George Brown College</cite>
        </blockquote>
        </Flex>
      </Section>
      <Section bgColor="yellow" divide={ true }>
        <Flex space="space-y-8">
          <div className=" space-y-4">

            <h2 className="text-32 font-bold">Your course-building toolkit</h2>

            <p>Our team of expert consultants is ready to work with you to simplify the process of translating your content into effective online courses. We offer end-to-end course design, development, and delivery backed by decades of research and experience.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2   gap-4 md:gap-8">
            <h3 className="text-24 font-bold leading-tight col-span-full">Our full-service support includes the combined benefits of our Education + Tech expertise:</h3>

            <div>
              <span className="font-bold mb-2">Education</span>
              <ul className="list-outside pl-[0.875rem] list-disc">
              <li>Curriculum design</li>
              <li>Instructional design</li>
              <li>Project management</li>
              <li>Content development</li>
              <li>Copyediting</li>
              <li>Translation services</li>
              </ul>
            </div>
            <div>
              <span className="font-bold mb-2">Tech</span>
              <ul className="list-outside pl-[0.875rem] list-disc">
                <li>Course setup and authoring</li>
                <li>Multimedia development (graphic design, videos, and more)</li>
                <li>Interactions, assessments, and performance tracking</li>
                <li>Web accessibility, user testing, and evaluation</li>
                <li>Open education support</li>
                <li>LMS integration & course portability</li>
                <li>Custom coding & advanced course enhancements</li>
              </ul>
            </div>

          </div>

          <div className=" space-y-4">
            <p className="text-24 font-bold leading-tight">Discover how you can turn training into your competitive advantage.</p>
            <LinkButton href="/contact-us/" bgColor="gold" textColor="black" textSize="18">Get in touch</LinkButton>
          </div>
        </Flex>
      </Section>

      <Section bgColor="yellow" divide="true">
      <Flex space="space-y-8">
          <div className=" space-y-4">
          <h2 className="text-32 font-bold  col-span-full">Accessibility for all as standard practice</h2>

            <p>As part of our inclusive design standards-of-practice, we work to deliver courses that go beyond accessibility standards to deliver exceptional experiences for all learners.</p>
            <p>Not only does this approach open up new market opportunities by removing barriers that would limit access  for learners with disabilities, but this approach helps improve engagement with all course participants.</p>
</div>
</Flex>
      </Section>


      <Section bgColor="white">
        <ClientCards bgColor="white" title="Select eLearning clients" items={[
          "webFoundation",
          "westernUniversity",
          "georgeBrown",
          "ontario",
          "insuranceInstitute",
          "canadaCouncilForTheArts",
          "lifeworks",
          "wsib",
        ]} />
      </Section>
      {/** Call to action */}
      <Section bgColor="white" divide="true">
        <Flex>
          <div className=" space-y-4">
            <p className="text-24 font-bold">Let's explore how combining technical expertise and best practices in education can benefit your course delivery and engagement.</p>
            <LinkButton href="/contact-us/" bgColor="yellow" textColor="black" textSize="18">Get in touch</LinkButton>
          </div>
        </Flex>
      </Section>

    </main>
  </Layout>
}