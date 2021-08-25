import View from "ui/components/View"
import Carousel from "ui/components/Carousel"
import Card from "ui/components/Card"
import Badge from "ui/components/Badge"
import ReactMarkdown from "react-markdown"

export default function OutcomeCards({ data }) {
  return (
    <View bgColor="cola" textColor="white" className="flex flex-col">
      <View.Content className="pb-4">
        <h2 className="text-32 font-bold text-yeah-yellow col-span-full">
          { data.title }
        </h2>
      </View.Content>

      <Carousel className="-mx-4">
        { data.cards.map(card => (
        <Card className="text-black">
          <Card.Photo src='https://source.unsplash.com/random/401x225' />
          <Card.Content className="space-y-4">
            { card.tags.map(tag => <Badge>{ tag }</Badge>)}
            <ReactMarkdown className="text-20 font-bold">Reshaping experience to support and retain users through a multi-step sales funnel.</ReactMarkdown>
          </Card.Content>
        </Card>
        ))}
      </Carousel>
    </View>
  )
}