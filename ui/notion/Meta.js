import { NextSeo } from "next-seo";

export default function Meta({ ...props }){

  return <NextSeo
    title={ props.title }
    description={ props.description }
    // openGraph={{
    //   images: [
    //     {
    //       url: `${process.env.NEXT_PUBLIC_BASE_URL}/heroes/service-design.png`,
    //       width: 1200,
    //       height: 627,
    //       alt: 'Service design optimizes efforts to deliver superior customer experience',
    //     },
    //   ],
    // }}
  />

}