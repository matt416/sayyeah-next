export { default as StackItem } from "./StackItem"
export { default as StackContent } from "./StackContent"

export const Stack = ({ children, id = "main-content" }) =>
  <main tabindex="-1" id={ id } className="flex flex-col items-center justify-center flex-1">
  { children }
  </main>