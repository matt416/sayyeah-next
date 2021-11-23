import ReactPlayer from "react-player"

export default function Video({ value, block }){
  const path = value[value.type].url

  return <ReactPlayer
    width="100%"
    height=""
    url={ path }
    controls={ true }
    // config={{
    //   file: {
    //     attributes: {
    //       poster: data.poster ,
    //       preload: 'metadata',
    //     },
    //     tracks: data.tracks
    //   }
    // }}
  />
}
