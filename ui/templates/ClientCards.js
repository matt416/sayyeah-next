import { isIterable } from "helpers/isIterable"
import camelCase from "camelcase"
import Section from "ui/layout/Section"
import Flex from "ui/layout/Flex"

const CLIENTS = {
  webFoundation: {
    name: "World Wide Web Foundation",
    img:{
      src:"/img/clients/worldwidewebfoundation.svg",
      alt:"World Wide Web Foundation"
    }
  },
  torontoPublicLibrary: {
    name: "Toronto Public Library",
    img: { src: '/img/clients/tpl.svg', alt: 'Toronto Public Library' }
  },
  fafia: {
    name: "FAFIA",
    img: { src: '/img/clients/fafia.svg' }

  },
  myseum: {
    name: "Myseum",
    img: { src: '/img/clients/myseum.svg' }

  },
  healthcareHumanFactors: {
    name: "Healthcare Human Factors",
    img: { src: '/img/clients/healthcare-human-factors.svg' }

  },
  neptis: {
    name: "Neptis",
    img: { src: '/img/clients/neptis.svg' }
  },
  microsoft: {
    name: "Microsoft",
    img: { src: '/img/clients/microsoft.svg' }
  },
  serviceOntario: {
    name: "Service Ontario",
    img: {
      src: "/img/clients/serviceontario.svg"
    }
  }

}

function getItemsFromList(items, list) {

  return items.map(item => {
    if (list.hasOwnProperty(item)) {
      return list[item]
    }
    return false

  }).filter(item=>item)

}

// const getItems = (wantedItems, allItems) => wantedItems.map(key => allItems[key])

export default function ClientCards({ items = [], title = "Select clients", ...props }) {

  getItemsFromList(items, CLIENTS).map(item => console.log(camelCase(item.name)))

  return (
    <Section bgColor="white" { ...props }>
      {/** Title */}
      <Flex size="lg">
        <h2 className="text-32 font-bold max-w-readable">{ title }</h2>

        {/** Grid Items */}
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full" role="list">
          { getItemsFromList(items, CLIENTS).map(item => (
            <li key={ `${camelCase(item.name)}-client-card` } className="border border-black border-opacity-5 rounded-md flex items-center justify-center p-4">
              <img src={ item.img.src } role="img" alt={ item.img.alt ?  item.img.alt : item.name } width="200" height="100" />
            </li>
          ))}
        </ul>

      </Flex>
    </Section>
  )
}