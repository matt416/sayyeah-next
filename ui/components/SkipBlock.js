const SkipBlock = ({ target = "#main-content"}) => <div className="px-4 w-full bg-black flex items-center justify-center">
    <a href={ target } className="sr-only focus:not-sr-only text-lg text-white outline-white">Skip to main content</a>
  </div>

export default SkipBlock