import { StackItem, StackContent } from "ui/components/Stack"
import Card from "ui/components/Card"

const CASE_STUDIES = {

}


export default function CaseStudies({}) {
  return <StackItem className="bg-black text-yellow min-h-[40rem]">
    <StackContent className="grid grid-cols-1 gap-12">

      <Card>
        My card is your card
      </Card>

    </StackContent>
  </StackItem>
}