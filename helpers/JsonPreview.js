export default function({ value }) {
  return <pre>
    { JSON.stringify(value, null, 2) }
  </pre>
}