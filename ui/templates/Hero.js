import { isEmpty } from "helpers/isEmpty"
import ReactMarkdown from "react-markdown"
import Grid from "ui/layout/Grid"
import Section from "ui/layout/Section"


export default function Hero({ actions, image, ...props}) {

  return <Section className="flex items-center justify-center min-h-[60vh]" bgColor="black" textColor="white" image={ image?.src }>
    <Grid cols="grid-cols-1 md:grid-cols-5">
    {/* <div className="grid DEFAULT_GRID_GAP DEFAULT_GRID_COLS DEFAULT_CONTENT content-center"> */}
      <div className="flex flex-col items-start space-y-6 col-span-3">
        <h1 className="text-40 text-sy-yellow font-bold">
          { props.name ? <span className="sr-only block text-16 font-normal mb-2 text-white">{ props.name }</span> : null }
          { props.title }</h1>

          { props.catchline || props.text ?
            <ReactMarkdown className="text-24 space-y-6">
              { props.catchline || props.text }
            </ReactMarkdown>
          : null }

        { actions?.length > 0 ?
          <ul className="space-y-2">
            { actions?.map((action, key) =>
              <li key={ key } >
                <a href={ action.href } aria-label={ action.ariaLabel }>
                  { action.label }
                </a>
              </li>
            )}
          </ul>
        : null }
      </div>
    {/* </div> */}
    </Grid>
  </Section>
}