import React from 'react'
import Quote from 'ui/components/Quote'

const pluckChildComponent = (children, type) => (
  React.Children.map(children, (child) => {
    if (typeof(child.type) === 'function' && child.type.name.toLowerCase() === type.toLowerCase()){
      return child
    }
  })
)

function Cite({ children }){
  return <cite className="text-16 font-normal not-italic">{ children }</cite>
}

export default function Testimonial({ children, cite }){
  // const Cite = pluckChildComponent(children, 'cite')
  // const Children = purgePluckedChildComponents(children, [Cite])

  return <blockquote className="text-24 font-bold">
    <Quote quoteColor="bro">{ children }</Quote>
    { cite && <Cite>{ cite }</Cite> }
  </blockquote>
}