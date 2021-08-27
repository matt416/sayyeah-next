import StackContent from "ui/components/StackContent"
import StackItem from "ui/components/StackItem"
import Widont from "ui/components/Widont"
export default function CallToAction({ children }) {
  return <StackItem>
    <StackContent className="text-center" size="md">
      <h2 className="sr-only">Get in touch</h2>
      <p className="text-32 font-bold mb-8">
        <Widont>
          { children }
        </Widont>
      </p>
    </StackContent>
  </StackItem>
}