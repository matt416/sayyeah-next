import camelCase from "camelcase"
import { getItemsFromList } from "helpers/getItemsFromList"
import Flex from "ui/layout/Flex"
import { traits } from "helpers/traits"

const PUBLICATIONS = {
  sxsw: {
    name: "South by southwest",
    img:{ src:"/img/publications/sxsw.svg",  alt:"South by southwest" }
  },
  fitc: {
    name: "FITC",
    img:{ src:"/img/publications/fitc.svg",  alt:"FITC" }
  },
  digitalJournal: {
    name: "Digital Journal",
    img:{ src:"/img/publications/digitaljournal.svg",  alt:"Digital Journal" }
  },
  uxMagazine: {
    name: "UX Magazine",
    img:{ src:"/img/publications/uxmagazine.svg",  alt:"UX Magazine" }
  },
  ctvNewsChannel: {
    name: "CTV News Channel",
    img:{ src:"/img/publications/ctvnewschannel.svg",  alt:"CTV News Channel" }
  },
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

export default function PublicationCards({ items = [], title = "Select publications", ...props }) {

  return <Flex size="lg">
    <h2 className="text-32 font-bold max-w-readable">{ title }</h2>

    {/** Grid Items */}
    <ul className={ classes.apply(props, 'grid gap-4 w-full') } role="list">
      { getItemsFromList(items, PUBLICATIONS).map(item => (
        <li key={ `${camelCase(item.name)}-publication-card` } className="border border-black border-opacity-5 rounded-md flex items-center justify-center p-4">
          <img src={ item.img.src } role="img" alt={ item.img.alt ?  item.img.alt : item.name } width="200" height="100" />
        </li>
      ))}
    </ul>

  </Flex>
}