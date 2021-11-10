import { useId } from "react-aria"
import SayYeahLogo from "ui/svg/SayYeahLogo.svg.js"
import LinkedIn from "ui/svg/LinkedIn.svg.js"
import Twitter from "ui/svg/Twitter.svg.js"
import Vimeo from "ui/svg/Vimeo.svg.js"
import Pinterest from "ui/svg/Pinterest.svg.js"

export default function Footer() {

  return <footer className="bg-black text-white standard-section">
    <div className="DEFAULT_CONTENT grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-12">
        <h2 className="sr-only">Footer</h2>

        <div className="col-span-1" >

          <div className="space-y-4 flex flex-col items-start">
          <SayYeahLogo href="/" className="text-sy-yellow ml-[-28px]" alt="Say Yeah! Home" />

            <h3 className="sr-only">Contact information</h3>
            <address className="not-italic">
              <dl className="flex flex-col items-start space-y-1">
                <dt className="sr-only">Toll free</dt>
                <dd>877-SAY-YEAH (877-729-9324)</dd>

                <dt className="sr-only">Phone</dt>
                <dd>416-642-9694</dd>

                <dt className="sr-only">Email</dt>
                <dd><a href="mailto:hello@sayyeah.com" className="hover:underline">hello@sayyeah.com</a></dd>
              </dl>
            </address>
          </div>

        </div>

        <nav className="col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6 sm:gap-y-12" aria-label="Footer Menu">
            <h3 className="sr-only">Footer navigation</h3>
            {
              [
                {
                  label: "Solutions", href: "/solutions/", id: useId(),
                  children: [
                    { label: "Service design", href: "/solutions/service-design/" },
                    { label: "Product strategy", href: "/solutions/product-strategy/" },
                    { label: "Market & user research", href: "/solutions/market-research/" },
                    { label: "Inclusive design", href: "/solutions/inclusive-design/" },
                    { label: "Inclusive website design", href: "/solutions/inclusive-website-design/" },
                    { label: "The Inclusive Website Audit", href: "/essential-website-audit/" },
                  ]
                },
                {
                  label: "Approach", href: "/approach/",  id: useId(),
                  children: [
                    { label: "What sets us apart", href: "/approach/what-sets-us-apart/",  },
                    { label: "Achieving digital excellence", href: "/approach/digital-excellence/",  },
                    { label: "Inclusive design", href: "/approach/inclusive-design/",  },
                    { label: "Service design", href: "/approach/service-design/",  },
                    { label: "Product strategy", href: "/approach/product-strategy/",  },
                  ]
                },{
                  label: "Work", href: "/work/",  id: useId(),
                  children: [
                    { label: "World Wide Web Foundation", href: "/case-study/world-wide-web-foundation/",  },
                    { label: "Pall", href: "/case-study/pall/",  },
                    { label: "Kanetix.ca", href: "/case-study/kanetix/",  },
                    { label: "Ontario Government", href: "/case-study/ontario/",  },
                    { label: "All case studies", href: "/case-studies/",  },
                    { label: "Sign up to our newsletter", href: "/digital-insights/newsletter/",  },
                  ]
                },{
                  label: "Insights", href: "/digital-insights/",  id: useId(),
                  children: [
                    { label: "Articles", href: "/digital-insights/category/articles/",  },
                    { label: "Events", href: "/digital-insights/category/events/",  },
                    { label: "Resources", href: "/digital-insights/category/resources/",  },
                    { label: "Industry Experts", href: "/digital-insights/category/industry-experts/",  },
                    { label: "Press", href: "/digital-insights/category/press/",  },
                  ]
                },/**{
                  label: "The Inclusive Website Audit", href: "/essential-website-audit/",  id: useId(),
                  children: [
                    { label: "Essential Package, $499", href: "/essential-audit/",  },
                    { label: "Starter Package, $999", href: "/essential-website-audit/starter/",  },
                    { label: "Custom Package, $2999", href: "/essential-website-audit/custom/",  },
                    { label: "The comprehensive audit process", href: "/essential-website-audit/comprehensive-website-audit-process/",  },
                  ]
                },*/{
                  label: "Digital transformation glossary", href: "/glossary/",  id: useId(),
                  children: [
                    { label: "Web accessibility", href: "/glossary/category/accessibility/",  },
                    { label: "Digital excellence", href: "/glossary/category/digital-excellence/",  },
                    { label: "Inclusive design", href: "/glossary/category/inclusive-design/",  },
                    { label: "Product strategy", href: "/glossary/category/product-strategy/",  },
                    { label: "Service design", href: "/glossary/category/service-design/",  },

                  ]
                },{
                  label: "About us", href: "/about-us/",  id: useId(),
                  children: [
                    { label: "People", href: "/people/",  },
                    { label: "Supplier diversity", href: "/about-us/supplier-diversity/",  },
                    { label: "Contact us", href: "/contact-us/",  },
                  ]}].map((group) => (
                <ul className="flex flex-col items-start space-y-2" key={ group.label }>{/** aria-labelledby={ group.id } */}
                  <li>
                    <a href={ group.href } className="font-bold mb-4 hover:underline" id={ group.id }>
                      { group.label }
                    </a>
                  </li>
                  { group.children
                      ? group.children.map((item, key) => (
                        <li key={ key }>
                          <a className="hover:underline" key={ `${item.href}-${key}` } href={ item.href }>
                            { item.label }
                          </a>
                        </li>
                      ))
                    : null
                  }
                </ul>

              ))
            }
        </nav>
    </div>

    <h3 className="sr-only" id="find-us-on-social-media">Find us on social media</h3>
    <ul className="text-white flex mt-16 justify-center mx-auto space-x-12">{/**aria-labelledby="find-us-on-social-media" */}
      <li><LinkedIn href="https://www.linkedin.com/company/sayyeahto/"/></li>
      <li><Twitter href="https://twitter.com/sayyeahto/"/></li>
      <li><Vimeo href="https://vimeo.com/sayyeah/"/></li>
      <li><Pinterest href="https://www.pinterest.ca/yousayyeah/"/></li>
    </ul>

    <div className="text-14 text-white grid md:grid-flow-col mt-16 justify-center mx-auto gap-x-6 gap-y-2">
      <p>&copy; 2008-2021. Say Yeah Inc. All rights reserved.</p>
      <a className="hover:underline" href="/accessibility/">Accessibility Statement</a>
      <a className="hover:underline" href="/privacy-policy/">Privacy Policy</a>
      <a className="hover:underline" href="/sitemap/">Sitemap</a>
    </div>
  </footer>

}