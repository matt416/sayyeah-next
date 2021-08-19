import View from "ui/components/View"
import Card from "ui/components/Card"
import Button from "ui/components/Button"
import ReactMarkdown from "react-markdown"

export default function DecisionCards({ data }) {
  return <View theme="yellow" className="">
  <View.Content className="space-y-8">
    <h2 className="text-32 font-bold">{ data.title }</h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      { data.cards.map(card => (
        <Card>
          <Card.Content className="flex flex-col items-start h-full">
            <ReactMarkdown className="text-20 leading-normal mb-4">{ card.blurb }</ReactMarkdown>

            { card.actions.map( action => (
              <Button
                key={ action.href }
                className="mt-auto mb-0"
                href={ action.href }
                ariaLabel={ action.ariaLabe0l }
              >
                { action.label }
              </Button>
            ) ) }

          </Card.Content>
        </Card>
      ))}
    </div>
  </View.Content>
</View>
}