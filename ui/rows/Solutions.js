import Card from 'ui/components/Card'
import Button from 'ui/components/Button'
import View from 'ui/components/View'
import ReactMarkdown from 'react-markdown'

export default function Solutions({ data }) {
  return (
  <View bgColor="yellow" textColor="black" className="flex-col space-y-24">
    { data.title && <View.Content>
      <h2 className="text-40 font-bold w-full max-w-[40rem]">{ data.title }</h2>
    </View.Content> }

    { data?.items?.length > 0 && data.items.map(item => (
      <View.Content className="grid grid-cols-1 sm:grid-cols-2 gap-4 gap-x-12">
      <h3 className="sr-only">{ item.title }</h3>
      <div className="flex flex-col">
        <p className="mb-2">If you’re asking...</p>
        <ul className="space-y-8 flex-1 flex flex-col justify-around">
          { item?.questions?.map((question, index) => (
            <li className="text-24 font-bold quoted" key={ index }>{ question }</li>
          ))}
        </ul>
      </div>

      <div className="flex items-stretch flex-col justify-items-stretch">
        <p className="mb-2">You’ll want to...</p>

        <Card className="flex flex-col flex-1">
          <Card.Content className="flex flex-col items-start flex-1 h-full">
            <ReactMarkdown className="text-20 leading-normal mb-4">{ item?.answer?.blurb }</ReactMarkdown>

            { item?.answer?.actions.map( action => (
              <Button
                key={ action.href }
                bgColor="gold"
                textColor="black"
                className="mt-auto mb-0"
                href={ action.href }
                ariaLabel={ action.ariaLabel }
              >
                { action.label }
              </Button>
            ) ) }
          </Card.Content>
        </Card>
      </div>
    </View.Content>
      )) }
  </View>
)}