import StackItem from "ui/components/StackItem"
import StackContent from "ui/components/StackContent"
import { isEmpty } from "helpers/isEmpty"
import ReactMarkdown from "react-markdown"
export default function Hero({ data }) {

  if (isEmpty(data)) { return null }

  return <StackItem className="min-h-[60vh] bg-black text-white" image={ data?.image?.src }>
    <StackContent className="grid gap-6 grid-cols-1 md:grid-cols-2 max-w-[60rem] content-center">
      <div className="flex flex-col items-start space-y-6">
        <h1 className="text-40 text-yeah-yellow font-bold">
          { data.name && <span className="sr-only block text-16 font-normal mb-2 text-white">{ data.name }</span> }
          { data.title }</h1>
          <ReactMarkdown className="text-24 space-y-6">
            { data.catchline || data.text }
          </ReactMarkdown>
        { data?.actions?.length > 0 &&
          <ul className="space-y-2">
            { data?.actions?.map((action, key) =>
              <li key={ key } >
                <a href={ action.href } aria-label={ action.ariaLabel }>
                  { action.label }
                </a>
              </li>
            )}
          </ul>
        }
      </div>
    </StackContent>
  </StackItem>
}