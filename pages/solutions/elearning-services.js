
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
      title="eLearning services"
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
        title: "eLearning services",
        catchline: "A full-service solution to delivering engaging, effective, and accessible online courses."
      }}
      />

      <Section bgColor="bg-sy-earth" textColor="white">
        <Grid>
          <h2 className="max-w-readable text-32 text-sy-yellow font-bold col-span-full">
          Common client challenges
          </h2>
          {[
            "How do we transform learning material into effective online courses?",
            "Can I rely on a company to manage end-to-end course development so I don't have to worry about the details?",
            "Can we deliver a course and interactions that are accessible to all learners?",
            "Is it possible to develop exceptional online courses with my preferred LMS?"
          ].map((item, key) =>
            <Quote>{item}</Quote>
          )}
          <div className="max-w-readable col-span-full text-20 text-sy-mocha space-y-4">
            <p className="font-bold text-20">We’re here to answer these and other questions that will help you build powerful digital learning experiences.</p>
            <LinkButton href="/contact-us/" bgColor="yellow" textColor="black" textSize="18">Get in touch</LinkButton>
          </div>
        </Grid>
      </Section>

      <Section bgColor="yellow">
        <Flex>
          <div className="max-w-readable space-y-4 text-18">
            <h2 className="text-32 font-bold">Discover the power of variable learning</h2>
            <p>We all learn in different ways. One of the great education challenges is how to reach and engage this diversity of learners.</p>

            <p>Online education offers a unique opportunity to increase reach and engagement through flexible, responsive, and accessible learning programs. But many courses are limited to a one style fits all learning model.</p>

            <p>The fact that we learn in different ways should be honoured, celebrated, and prioritized in course delivery and design. We help you deliver courses that take full advantage of the potential of eLearning.</p>

            <p className="font-bold text-20">Contact us to learn more about the variable learning model.</p>
            <LinkButton href="/contact-us/" bgColor="black" textColor="white" textSize="18">Get in touch</LinkButton>

          </div>
        </Flex>
      </Section>

      <Section bgColor="yellow" divide={ true }>
        <Flex space="space-y-8">
          <div className="max-w-readable space-y-4">

            <h2 className="text-32 font-bold">Your course-building toolkit</h2>

            <p>Our team of expert consultants is ready to work with you to simplify the process of translating your content into effective online courses. We offer end-to-end course design, development, and delivery backed by decades of research and experience.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8">
            <h3 className="text-24 font-bold leading-tight col-span-full max-w-readable">Our full-service support includes the combined benefits of our Education + Tech expertise:</h3>

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

          <div className="max-w-readable space-y-4">
            <p className="text-24 font-bold leading-tight">Discover how we can help you build a customized course from scratch.</p>
            <LinkButton href="/contact-us/" bgColor="gold" textColor="black" textSize="18">Get in touch</LinkButton>
          </div>
        </Flex>
      </Section>

      <Section bgColor="yellow" divide="true">
      <Flex space="space-y-8">
          <div className="max-w-readable space-y-4">
          <h2 className="text-32 font-bold max-w-readable col-span-full">Accessibility for all as standard practice</h2>

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
          <div className="max-w-readable space-y-4">
            <p className="text-24 font-bold">Let's explore how combining technical expertise and best practices in education can benefit your course delivery and engagement.</p>
            <LinkButton href="/contact-us/" bgColor="yellow" textColor="black" textSize="18">Get in touch</LinkButton>
          </div>
        </Flex>
      </Section>

    </main>
  </Layout>
}