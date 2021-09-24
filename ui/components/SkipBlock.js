const SkipBlock = ({ target = "#main-content"}) => <div className="absolute top-[1rem] left-[1rem]">
  <a href={ target } className="sr-only focus:not-sr-only">
    <span className=" text-lg bg-black text-white min-h-[3rem] rounded-md px-4 flex items-center">Skip to main content</span>
    </a>
  </div>

export default SkipBlock