import { Text } from "./Text"
export default function Todo({ value, id }) {
  return <div>
    <label htmlFor={id}>
      <input type="checkbox" id={id} defaultChecked={value.checked} />{" "}
      <Text text={value.text} />
    </label>
  </div>
}