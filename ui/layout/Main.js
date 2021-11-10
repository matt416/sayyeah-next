

// The name prop should match the Skip Navigation anchor href
export default function Main({ children, name = "main-content" }){
  return <main tabIndex="-1" id={ name }>
    { children }
  </main>
}