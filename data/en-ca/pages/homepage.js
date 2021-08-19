import pluck from 'helpers/pluck'
import clients from '../collections/clients'

export default {
  PageHeading: {
    title: "Deliver products and services that win diverse markets",
    catchline: "As markets continue to evolve, leading organizations must adapt to shifting consumer expectations.",
    actions: [
      {
        label: "Why designing for the average person hurts your bottom line",
        ariaLabel: false,
        href: "#"
      }, {
        label: "The role of technolgy in building market leaders",
        ariaLabel: false,
        href: "#"
      }
    ]
  },
  DecisionCards: {
    title: "Bring clarity to decision-making",
    cards: [
      {
        icon: "" ,
        blurb: "**Modernize your organization** towards more efficient service delivery and improved customer experience.",
        actions: [
          {
            label: "Get started",
            ariaLabel: "Get started, modernize your organization",
            href: "#"
          }
        ]
      },{
        icon: "" ,
        blurb: "**Define, deliver, and maintain digital products** that reduce costs and increase adoption.",
        actions: [
          {
            label: "Get started",
            ariaLabel: "Get started, define, deliver, and maintain digital products",
            href: "#"
          }
        ]
      }
    ]
  },
  OutcomeCards: {
    title: "Achieve exceptional outcomes",
    cards: [
      {
        photo: {
          src: ""
        },
        tags: ["Service design"],
        blurb: "Reshaping experience to support and retain users through a multi-step sales funnel.",
        logo: "",
      },{
        photo: {
          src: ""
        },
        tags: ["Service design"],
        blurb: "Reshaping experience to support and retain users through a multi-step sales funnel.",
        logo: "",
      },{
        photo: {
          src: ""
        },
        tags: ["Service design"],
        blurb: "Reshaping experience to support and retain users through a multi-step sales funnel.",
        logo: "",
      },{
        photo: {
          src: ""
        },
        tags: ["Service design"],
        blurb: "Reshaping experience to support and retain users through a multi-step sales funnel.",
        logo: "",
      }
    ]
  },
  ImpactfulChallenges: {
    title: "Solve your most impactful organizational challenges",
    items: [
      {
        blurb: "How can technology improve how we work?",
        actions: [{
          href: "#",
          label: "Assessing your organization",
          ariaLabel: false
        }],
      },{
        blurb: "Can our products and services better serve our market?",
        actions: [{
          href: "#",
          label: "Assessing your organization",
          ariaLabel: false
        }],
      },{
        blurb: "Can we improve customer experience by working as a more cohesive team?",
        actions: [{
          href: "#",
          label: "Assessing your organization",
          ariaLabel: false
        }],
      },{
        blurb: "Are we making the best technology choices for our organization?",
        actions: [{
          href: "#",
          label: "Assessing your organization",
          ariaLabel: false
        }],
      },{
        blurb: "Can we more effeciently design and deliver a digital product?",
        actions: [{
          href: "#",
          label: "Assessing your organization",
          ariaLabel: false
        }],
      },{
        blurb: "Are there unintended ways we may be limiting access to our content, products, and services?",
        actions: [{
          href: "#",
          label: "Assessing your organization",
          ariaLabel: false
        }],
      },
    ]
  },
  ClientRoster: {
    title: "Client roster",
    clients: pluck(clients, ['TorontoPublicLibrary', 'Boon'])
  },
  FeaturedTestimonial: {
    cite: "Aran Hamilton, CEO, Vantage Analytics",
    blurb: "Working with Say Yeah is a major step towards not wasting hundreds of thousands of dollars building the wrong thing because of poor planning."
  },
  Video: {
    url: "https://sayyeah.com/wp-content/uploads/2020/02/mark_testimonial.mp4",
    poster: "https://sayyeah.com/wp-content/uploads/2020/02/mark_testimonial-1.jpg",
    tracks:[{
      kind: 'subtitles',
      label: "English",
      src: '/captions/markdowds_testimonial.vtt',
      srcLang: 'en',
      default: true
    }]
  }
}