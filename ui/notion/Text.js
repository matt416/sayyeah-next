// import styles from './text.module.css'

export const Text = ({ text }) => {

  if (!text) {
    return null;
  }
  return text.map((value) => {
    const {
      annotations: { bold, code, color, italic, strikethrough, underline },
      text,
    } = value;

    // If there are no annotations, return plain text
    if (!bold && !code && !italic && !strikethrough && !underline && color === 'default' ) {
      return text.link ? <a href={text.link.url}>{text.content}</a> : text.content
    }

    return (
      <span
        className={[
          bold ? 'font-bold' : false,
          code ? 'font-mono px-2 py-1 bg-gray-200 text-red-500 rounded text-sm' : false,
          italic ? 'font-italic' : false,
          strikethrough ? 'font-strikethrough' : false,
          underline ? 'underline' : false,
        ].filter(item=>item).join(" ")}
        style={color !== "default" ? { color } : {}}
      >
        {text.link ? <a href={text.link.url}>{text.content}</a> : text.content}
      </span>
    );
  });



};
