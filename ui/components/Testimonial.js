import React from 'react'
import LeftQuote from 'ui/svg/LeftQuote'
import RightQuote from 'ui/svg/RightQuote'

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

function Testimonial({ children, cite }){
  // const Cite = pluckChildComponent(children, 'cite')
  // const Children = purgePluckedChildComponents(children, [Cite])

  return <blockquote className="text-24 font-bold">
    {/* <div className="flex"> */}
    <p>

    <LeftQuote className="inline mb-4 mr-2"/>Working with Say Yeah is a major step towards not wasting hundreds of thousands of dollars building the wrong thing because of poor planning.<RightQuote className="inline mr-2"/>
    </p>
    {/* </div> */}

    { cite && <Cite>{ cite }</Cite> }
  </blockquote>
}




export default Testimonial