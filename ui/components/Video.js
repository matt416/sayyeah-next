import ReactPlayer from "react-player"

export default function Video({ data }) {
return (
      <ReactPlayer
        width="100%"
        height=""
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
  )
}