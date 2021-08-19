import View from "ui/components/View"
import Testimonial from "ui/components/Testimonial"
import ReactMarkdown from "react-markdown"

export default function FeaturedTestimonial({ data }) {
  return <View>
    <View.Content size="md">
      <Testimonial cite={ data.cite }>
        <ReactMarkdown>{ data.blurb }</ReactMarkdown>
      </Testimonial>
    </View.Content>
  </View>
}