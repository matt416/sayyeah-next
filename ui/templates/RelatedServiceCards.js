import LinkButton from "ui/components/LinkButton"
import AccessibleLabel from "ui/components/AccessibleLabel"
import Card from "ui/components/Card"
import Section from "ui/layout/Section"
import Grid from "ui/layout/Grid"
import ReactMarkdown from "react-markdown"

export const RELATED_SERVICE_SUMMARIES = {
  research: {
      "title":"Research",
      "text":"One constant throughout all of our digital transformation work is the need for effective research, analysis, synthesis, and actionable next steps for the organizations we work with. Let’s explore this core competency for delivering exceptional products and services.",
      "action":{
        "href":"#",
        "label":"Learn more|about our research process",
      }
    },
  usabilityTesting: {
    "title":"Usability testing",
    "text":"An effective usability testing methodology helps you identify what’s working and what is limiting engagement across your digital ecosystem, ultimately making informed decisions on how to improve your digital ecosystem.\n\nWe use a three-step process—Plan, Test, Analyze—to focus your team on the most impactful optimization efforts.",
    "action":{
      "href":"#",
      "label":"Learn more|about usability testing"
    }
  },
  systemStrategy: {
      "title":"System strategy",
      "text":"System strategy helps accelerate internal decision-making with an approach that uncovers key opportunities to drive customer engagement and retention while optimizing operations. We achieve this by mapping internal capabilities and consumer objectives in order to define an effective roadmap that meets organizational and market needs.",
      "action":{
        "href":"#",
        "label":"Learn more|about our system strategy process",
      }
    },
  inclusiveDesign:{
      "title":"Inclusive design",
      "text":"Inclusive design ensures your products and services are embraced by your market by welcoming diverse market segments to engage authentically with your organization. Learn how to design with intersectionality, usability, accessibility, and inclusion at the centre of your work.",
      "action":{
        "href":"#",
        "label":"Learn more|about our inclusive design process",
      }
    },
  digitalExcellence: {
      "title":"Achieving digital excellence",
      "text":"From communications to product to organizational efficiency, operating online involves significant depth of expertise. With digital channels and consumer touchpoints extending beyond online to in-person and at home, success in the connected age requires a breadth of expertise that defines your organization’s digital maturity and capabilities.",
      "action":{
        "href":"#",
        "label":"Learn more|about achieving digital excellence",
      }
    },
  essentialWebsiteAudit: {
    "title":"Essential website audit",
    "text":"Over 90% of websites are fundamentally broken. Is yours one of them?\n\nThe Essential Website Audit answers these two critical questions: Is your website broken and how can you fix it?",
    "action":{
      "href":"#",
      "label":"Learn more|about the essential website audit",
    }
  },
  accessibleWebsiteDesign: {
    "title":"Accessible website design",
    "text":"An accessible website opens up new market opportunities by ensuring your products and services are functionally accessible to disabled users or people with other accommodation needs.\n\nGain the added benefit of improving access for all by ensuring your content is as understandable and available as possible, regardless of where, when, and on what screen people use to visit your website.",
    "action":{
      "href":"#",
      "label":"Learn more|about accessible website design",
    }
  },
  accessibleDevelopmentGuide: {
    "title":"Accessible development guide",
    "text":"Uncover the roadblocks that impact access and engagement with over 90% of websites.\n\n The Accessible Development Guide is your team’s tutorial and cheat sheet to bring modern web development practices to your organization. Get started today to open up market access and improve website performance.",
    "action":{
      "href":"#",
      "label":"Explore|the accessible development guide"
    }
  },
}

export default function RelatedServiceCards({ title = "Related services and resources", items }){

  return <Section bgColor="yellow">
    <Grid>
    <h2 className="text-32 font-bold col-span-full max-w-[40rem]">{ title }</h2>

    { items.map(key => RELATED_SERVICE_SUMMARIES[key]).map(({ title, text, action }) => <Card className="bg-sy-sunshine p-6 flex flex-col">
      <h3 className="text-24 font-bold mb-4">
        { title }
      </h3>

      <ReactMarkdown className="space-y-3 mb-3">{ text }</ReactMarkdown>
      <LinkButton
        href={ action.href }
        className="text-black border border-sy-gold hover:bg-black hover:border-black hover:text-white mt-auto mb-0 bg-transparent"
        >
        <AccessibleLabel>{ action.label }</AccessibleLabel>
      </LinkButton>
    </Card>
    )}
    </Grid>
  </Section>
}