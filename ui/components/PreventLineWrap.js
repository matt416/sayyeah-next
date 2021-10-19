export function PreventLineWrap({ children }) {

  const nospace = "\u200b" //"&#65279;" Zero width no break space
  const space = "\u00a0" //"&nbsp;"

  return <span className="inline whitespace-nowrap">{ space }{ children }{ space }</span>
}