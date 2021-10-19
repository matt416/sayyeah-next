import ContentBlock from "./ContentBlock"

export default function ContentBlockLg( {
  children,
  ...props }){

  const newProps = { ...{ maxW: "max-w-screen-xs md:max-w-screen-lg"  }, ...props, }

  return <ContentBlock { ...newProps }>{ children }</ContentBlock>
}