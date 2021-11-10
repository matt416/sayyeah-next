import ReactMarkdown from "react-markdown"
import LinkArrow from "ui/components/LinkArrow"
import Flex from "ui/layout/Flex"
import Section from "ui/layout/Section"

export default function Hero({ actions, image, ...props}) {

  return <Section className="flex items-center justify-center min-h-[60vh]" bgColor="black" textColor="white" image={ image?.src }>
    <Flex>
    {/* <div className="grid DEFAULT_GRID_GAP DEFAULT_GRID_COLS DEFAULT_CONTENT content-center"> */}
      <div className="flex flex-col items-start">

        <div className="max-w-[32rem] w-full space-y-6 ">
          <h1 className="text-40 text-sy-yellow font-bold">
            { props.name ? <span className="sr-only">{ props.name }</span> : null }
            { props.title }
          </h1>

          { props.catchline || props.text ?
            <ReactMarkdown className="text-24 space-y-6">
              { props.catchline || props.text }
            </ReactMarkdown>
          : null }

        { actions?.length > 0 ?
          <ul className="space-y-4">
            { actions?.map((action, key) =>
              <li key={ key } >
                <LinkArrow key={ key } href={ action.href }>
                  { action.label }
                </LinkArrow>
              </li>
            )}
          </ul>
        : null }
      </div>
    </div>
    </Flex>
  </Section>
}