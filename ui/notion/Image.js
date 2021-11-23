export default function Image({ value, block }){
  const src = value.type === "external" ? value.external.url : value.file.url;
  const caption = value.caption ? value.caption[0]?.plain_text : "";

  return (
    <figure>
      <img src={src} alt={caption} />
      { caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}