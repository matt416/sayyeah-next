import View from "ui/components/View"
import ReactPlayer from "react-player"

export default function Video({ data }) {
return (
  <View>
    <div className="w-[60rem] h-[60rem]">
      <ReactPlayer
        width="100%"
        height="100%"
        className="bg-red-400"
        url={ data.url }
        controls={ true }
        config={{
          file: {
            attributes: {
              poster: data.poster ,
              preload: 'metadata',
            },
            tracks: data.tracks
          }
        }}
      />
    </div>
  </View>
  )
}