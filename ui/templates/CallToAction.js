import Section from "ui/layout/Section"
import Flex from "ui/layout/Flex"

export default function CallToAction({ bgColor = "yellow", textColor, children, className }) {
  return (
    <Section bgColor={ bgColor } textColor={ textColor }>
      <Flex>
        { children }
      </Flex>
    </Section>
  )
        {/* <h2 className="sr-only">{ title }</h2>
        <p className="text-24 font-bold mb-8">
          <Widont>
            { children }
          </Widont>
        </p>
        { actions.map(action => <LinkButton href={ action.href }><Label srLabel={action.srLabel}>{ action.label }</Label></LinkButton>) } */}

}

// <div className="col-span-full max-w-[40rem] space-y-4">
//           <p className="text-24">Are you ready to improve the performance and outcomes of your website?</p>
//           <LinkButton href="#" bgColor="bg-sy-yellow" textColor="text-black">Get in touch</LinkButton>
//         </div>