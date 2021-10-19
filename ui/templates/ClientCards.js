import { isIterable } from "helpers/isIterable"
import camelCase from "camelcase"
import Section from "ui/layout/Section"
import Grid from "ui/layout/Grid"

const CLIENTS = {
  webFoundation: {
    img:{
      src:"/img/clients/worldwidewebfoundation.svg",
      alt:"World Wide Web Foundation"
    }

  }
}

// const getItems = (wantedItems, allItems) => wantedItems.map(key => allItems[key])

export default function ClientCards({ items = [], title = "Select clients", ...props }) {
  return (
    <Section bgColor="white" { ...props }>
      {/** Title */}
      <Grid cols="grid-cols-2 md:grid-cols-4" gap="gap-4" size="lg">
        <h2 className="text-32 font-bold col-span-full max-w-[40rem]">{ title }</h2>

        {/** Grid Items */}
        <ul>
          { Object.keys(CLIENTS).map(key => <li key={ key } className="border border-black border-opacity-5 rounded-md flex items-center justify-center"><img src={ CLIENTS[key].img.src } alt={ CLIENTS[key].img.alt } /></li> ) }
        </ul>

      </Grid>
    </Section>
  )
}