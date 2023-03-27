import camelCase from "camelcase"
import { getItemsFromList } from "helpers/getItemsFromList"
import Flex from "ui/layout/Flex"
import { traits } from "helpers/traits"

const CLIENTS = {
  webFoundation: {
    name: "World Wide Web Foundation",
    img: { src: "/img/clients/worldwidewebfoundation.svg", alt: "World Wide Web Foundation" }
  },
  torontoPublicLibrary: {
    name: "Toronto Public Library",
    img: { src: '/img/clients/tpl.svg', alt: 'Toronto Public Library' }
  },
  fafia: {
    name: "FAFIA",
    img: { src: '/img/clients/fafia.svg', alt: "FAFIA" }
  },
  myseum: {
    name: "Myseum",
    img: { src: '/img/clients/myseum.svg', alt: "Myseum" }
  },
  healthcareHumanFactors: {
    name: "Healthcare Human Factors",
    img: { src: '/img/clients/healthcare-human-factors.svg', alt: "Healthcare Human Factors" }
  },
  neptis: {
    name: "Neptis",
    img: { src: '/img/clients/neptis.svg', alt: "Neptis" }
  },
  nymi: {
    name: "Nymi",
    img: { src: '/img/clients/nymi.svg', alt: "Nymi" }
  },
  microsoft: {
    name: "Microsoft",
    img: { src: '/img/clients/microsoft.svg', alt: "Microsoft" }
  },
  serviceOntario: {
    name: "Service Ontario",
    img: { src: "/img/clients/serviceontario.svg", alt: "Service Ontario" }
  },
  ontario: {
    name: "Ontario",
    img: { src: "/img/clients/ontario.svg", alt: "Ontario" }
  },
  kanetix: {
    name: "Kanetix",
    img: { src: "/img/clients/kanetix.svg", alt: "Kanetix" }
  },
  cannect: {
    name: "Cannect",
    img: { src: "/img/clients/cannect.svg", alt: "Cannect" }
  },
  wsib: {
    name: "WSIB Ontario",
    img: { src: "/img/clients/wsib.svg", alt: "WSIB Ontario" }
  },
  virginGaming: {
    name: "Virgin Gaming",
    img: { src: "/img/clients/virgingaming.svg", alt: "Virgin Gaming" }
  },
  tourismToronto: {
    name: "Tourism Toronto",
    img: { src: "/img/clients/tourismtoronto.svg", alt: "Tourism Toronto" }
  },
  aon: {
    name: "AON",
    img: { src: "/img/clients/aon.svg", alt: "AON" }
  },
  virginMobile: {
    name: "Virgin Mobile",
    img: { src: "/img/clients/virginmobile.svg", alt: "Virgin Mobile" }
  },
  stageTen: {
    name: "Stage TEN",
    img: { src: "/img/clients/stageten.svg", alt: "Stage TEN" }
  },
  metrolinx: {
    name: "Metrolinx",
    img: { src: "/img/clients/metrolinx.svg", alt: "Metrolinx" }
  },
  theScore: {
    name: "TheScore",
    img: { src: "/img/clients/thescore.svg", alt: "TheScore" }

  },
  rogers: {
    name: "Rogers",
    img: { src: "/img/clients/rogers.svg", alt: "Rogers" }

  },
  ratesDotCa: {
    name: "RATESDOTCA",
    img: { src: "/img/clients/ratesdotca.svg", alt: "RATESDOTCA" }
  },
  georgeBrown: {
    name: "George Brown College",
    img: { src: "/img/clients/georgebrown.svg", alt: "George Brown College" }

  },
  westernUniversity: {
    name: "Western University",
    img: { src: "/img/clients/westernuniversity.svg", alt: "Western University" }

  },
  lifeworks: {
    name: "LifeWorks",
    img: { src: "/img/clients/lifeworks.svg", alt: "LifeWorks" }
  }
}

const classes = traits({
  cols: {
    "4": "grid-cols-2 md:grid-cols-4",
    "5": "grid-cols-2 md:grid-cols-5"
  },
})

classes.defaults({
  cols: 4
})

export default function ClientCards({ items = [], title = "Select clients", ...props }) {

  return <Flex size="lg">
    <h2 className="text-32 font-bold max-w-readable">{title}</h2>

    {/** Grid Items */}
    <ul className={classes.apply(props, 'grid gap-4 w-full')} role="list">
      {getItemsFromList(items, CLIENTS).map(item => (
        <li key={`${camelCase(item.name)}-client-card`} className="border border-black border-opacity-5 rounded-md flex items-center justify-center p-4">
          <img src={item.img.src} role="img" alt={item.img.alt ? item.img.alt : item.name} width="200" height="100" />
        </li>
      ))}
    </ul>

  </Flex>
}