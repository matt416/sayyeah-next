import LeftQuote from "ui/svg/LeftQuote"
import RightQuote from "ui/svg/RightQuote"
export default function Quote({ children }) {
  return (
    <>
      <p className="text-24 font-bold mb-4 inline-block">
        <LeftQuote width="16" className="ml-[-1.5rem] text-sy-mocha"/>{ children }<RightQuote width="16" className="text-sy-mocha" />
      </p>
    </>
  )
}