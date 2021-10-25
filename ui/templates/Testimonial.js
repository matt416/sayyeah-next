import React from 'react'
import LeftQuote from 'ui/svg/LeftQuote'
import RightQuote from 'ui/svg/RightQuote'
import Quote from 'ui/components/Quote'
const pluckChildComponent = (children, type) => (
  React.Children.map(children, (child) => {
    if (typeof(child.type) === 'function' && child.type.name.toLowerCase() === type.toLowerCase()){
      return child
    }
  })
)

const purgePluckedChildComponents = (children, plucked) => {

}

function Cite({ children }){
  return <cite className="text-16 font-normal not-italic">{ children }</cite>
}

export default function Testimonial({ children, cite }){
  // const Cite = pluckChildComponent(children, 'cite')
  // const Children = purgePluckedChildComponents(children, [Cite])

  return <blockquote className="text-24 font-bold">
    {/* <div className="flex"> */}
    {/* <p> */}

    {/* <LeftQuote width="16" className="ml-[-1.5rem]"/>{ children }<RightQuote width="16"/> */}
    <Quote>{ children }</Quote>
    {/* </p> */}
    {/* </div> */}

    { cite && <Cite>{ cite }</Cite> }
  </blockquote>
}