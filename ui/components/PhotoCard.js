export default function PhotoCard(){
  return (
    <div className="grid PhotoCard-grid items-start text-left bg-white rounded-lg overflow-hidden">
      <div className="flex items-stretch">
        <img src="https://source.unsplash.com/random/400x225" className="object-cover w-full h-full min-h-[225px]" height="225"/>
      </div>

      <div className="mt-auto mb-0 flex flex-col p-4">
        <p>
          Reshaping experience to support and retain users through a multi-step sales funnel. this is something fantastics
        </p>
        [Logo]
      </div>
    </div>
  )
}
