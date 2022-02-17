import LinkButton from "ui/components/LinkButton"
import Card from "ui/components/Card"
import Grid from "ui/layout/Grid"
import ReactMarkdown from "react-markdown"
import { getItemsFromList } from "helpers/getItemsFromList"

export const RELATED_SERVICE_SUMMARIES = {
  userResearch: {
    title: "User research",
    body: "We use a variety of methodologies for user research. These methods can range from qualitative interviews and workshops, using quantitative surveying and analytics, observation, and usability testing. All to understand what’s working and where we can improve organizational processes and people, and better serve the market with more aligned products and services.",
    action: {
      href: "/approach/user-research/",
      label: "Learn more|about user research"
    }
  },
  marketResearch: {
    title: "Market & user research",
    body: "One constant throughout all of our digital transformation work is the need for effective research, analysis, synthesis, and actionable next steps for the organizations we work with. Let’s explore this core competency for delivering exceptional products and services.",
    action: {
      href: "/solutions/market-research/",
      label: "Learn more|about our user and market research process",
    }
  },
  productStrategy: {
    title: "Product strategy",
    body: "Define, deliver, and maintain digital products that reduce costs and increase adoption.",
    action: {
      href: "/approach/product-strategy/",
      label: "Learn more|about product strategy"
    }
  },
  serviceDesign: {
    title: "Service design",
    body: "Modernize your organization towards more efficient service delivery and improved customer experience.",
    action: {
      href: "/approach/service-design/",
      label: "Learn more|about service design"
    }
  },
  marketDefinition: {
    title: "Market definition",
    body: "Market opportunity analysis focuses your product and service efforts. Define your ideal market and how to capture it with a process that uncovers the best opportunities to expand your organization’s market share.",
    action: {
      href: "/services/market-definition/",
      label: "Learn more|about market definition"
    }
  },
  continuousImprovement: {
    title: "Continuous improvement",
    body: "Across every stage of strategy, design, and development you have the opportunity to increase the value of your efforts. With continuous improvement, you can realize the benefits of better connecting with your consumer, driving them towards organizational goals, and optimizing your team’s efforts on an ongoing basis.",
    action: {
      href: "/approach/continuous-improvement/",
      label: "Learn more|about continuous improvement"
    }
  },
  journeyMapping: {
    title: "Our approach to customer journey mapping",
    body: "The process you need to get to know your customers and discover exactly what they need in order to leverage the customer journey to drive service delivery and digital strategy.",
    action: {
      href: "/approach/customer-journey-mapping/",
      label: "Learn more|about journey mapping"
    }
  },
  usabilityTesting: {
    title: "Usability testing",
    body: "An effective usability testing methodology helps you identify what’s working and what is limiting engagement across your digital ecosystem, ultimately making informed decisions on how to improve your digital ecosystem.\n\nWe use a three-step process—Plan, Test, Analyze—to focus your team on the most impactful optimization efforts.",
    action: {
      href: "/approach/usability-testing/",
      label: "Learn more|about usability testing"
    }
  },
  systemStrategy: {
    title: "System strategy",
    body: "System strategy helps accelerate internal decision-making with an approach that uncovers key opportunities to drive customer engagement and retention while optimizing operations. We achieve this by mapping internal capabilities and consumer objectives in order to define an effective roadmap that meets organizational and market needs.",
    action: {
      href: "/approach/system-strategy/",
      label: "Learn more|about our system strategy process",
    }
  },
  inclusiveDesign: {
    title: "Inclusive design",
    body: "Inclusive design ensures your products and services are embraced by your market by welcoming diverse market segments to engage authentically with your organization. Learn how to design with intersectionality, usability, accessibility, and inclusion at the centre of your work.",
    action: {
      href: "/solutions/inclusive-design/",
      label: "Learn more|about our inclusive design process",
    }
  },
  digitalExcellence: {
    title: "Achieving digital excellence",
    body: "From communications to product to organizational efficiency, operating online involves significant depth of expertise. With digital channels and consumer touchpoints extending beyond online to in-person and at home, success in the connected age requires a breadth of expertise that defines your organization’s digital maturity and capabilities.",
    action: {
      href: "/approach/digital-excellence/",
      label: "Learn more|about achieving digital excellence",
    }
  },
  essentialWebsiteAudit: {
    title: "Essential website audit",
    body: "Over 90% of websites are fundamentally broken. Is yours one of them?\n\nThe Essential Website Audit answers these two critical questions: Is your website broken and how can you fix it?",
    action: {
      href: "/essential-website-audit/",
      label: "Learn more|about the essential website audit",
    }
  },
  accessibleWebsiteDesign: {
    title: "Accessible website design",
    body: "An accessible website opens up new market opportunities by ensuring your products and services are functionally accessible to disabled users or people with other accommodation needs.\n\nGain the added benefit of improving access for all by ensuring your content is as understandable and available as possible, regardless of where, when, and on what screen people use to visit your website.",
    action: {
      href: "/services/accessible-website-design/",
      label: "Learn more|about accessible website design",
    }
  },
  accessibleDevelopmentGuide: {
    title: "Accessible development guide",
    body: "Uncover the roadblocks that impact access and engagement with over 90% of websites.\n\n The Accessible Development Guide is your team’s tutorial and cheat sheet to bring modern web development practices to your organization. Get started today to open up market access and improve website performance.",
    action: {
      href: "#",
      label: "Explore|the accessible development guide"
    }
  },
}

export default function RelatedServiceCards({ title = "Related services and resources", items }) {

  return <Grid>
    <h2 className="text-32 font-bold col-span-full max-w-[40rem]">{title}</h2>

    {getItemsFromList(items, RELATED_SERVICE_SUMMARIES).map(({ title, body, action }) => <Card className="bg-sy-sunshine p-6 flex flex-col">
      <h3 className="text-24 font-bold mb-4">
        {title}
      </h3>

      <ReactMarkdown className="space-y-3 mb-3">{body}</ReactMarkdown>
      <LinkButton
        href={action.href}
        className="text-black border border-sy-gold hover:bg-black hover:border-black hover:text-white mt-auto mb-0 bg-transparent"
      >
        {action.label}
      </LinkButton>
    </Card>
    )}
  </Grid>

}