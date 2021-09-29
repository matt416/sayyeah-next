import {useId} from '@react-aria/utils'

export default function SayYeahLogo({ alt, width = null, height = null }) {

const svgID = useId()

return <svg role="img" aria-labelledby={ svgID } focusable="false" width={ width } height={ height } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 104">
  <title id={ svgID }>{ alt }</title>
  <path fill="currentColor" d="M6.5 0C3.03 0 .01 1.9 0 6.18v1c0 5.06 7.56 7.79 7.56 11.18v.29c0 .9-.45 1.63-1.37 1.63a1.32 1.32 0 0 1-1.41-1.43v-.41a1.21 1.21 0 0 0-.34-.88 1.23 1.23 0 0 0-.86-.37H1.21a1.26 1.26 0 0 0-.86.38 1.22 1.22 0 0 0-.34.87v.42c0 4.32 2.81 6.15 6.32 6.15 3.47 0 6.46-1.9 6.45-6.17v-1c0-5.06-7.52-7.79-7.52-11.18v-.29c0-.9.41-1.63 1.37-1.63a1.28 1.28 0 0 1 1.38 1.42v.41a1.14 1.14 0 0 0 .35.86 1.18 1.18 0 0 0 .85.36h2.37a1.17 1.17 0 0 0 .86-.35 1.16 1.16 0 0 0 .34-.86v-.42C12.78 1.79 9.96 0 6.5 0ZM42.65 20.79a1.2 1.2 0 0 0-.36-.85 1.22 1.22 0 0 0-.85-.36h-2.57a1.24 1.24 0 0 0-.84.36 1.21 1.21 0 0 0-.36.85v2.59a1.22 1.22 0 0 0 .36.86 1.24 1.24 0 0 0 .84.36h2.58a1.24 1.24 0 0 0 .84-.36 1.26 1.26 0 0 0 .36-.86ZM41.43 31.22a1.24 1.24 0 0 0 .85-.36 1.23 1.23 0 0 0 .35-.85v-2.08a1.23 1.23 0 0 0-.35-.85 1.29 1.29 0 0 0-.85-.36h-9.51a1.29 1.29 0 0 0-.85.36 1.29 1.29 0 0 0-.36.85v21.79a1.31 1.31 0 0 0 .36.86 1.29 1.29 0 0 0 .85.36h9.51a1.29 1.29 0 0 0 .85-.36 1.25 1.25 0 0 0 .35-.86v-2.07a1.21 1.21 0 0 0-.35-.85 1.19 1.19 0 0 0-.85-.35h-5.7v-5.37h4.16a1.17 1.17 0 0 0 .86-.35 1.2 1.2 0 0 0 .38-.86v-2.08a1.24 1.24 0 0 0-.38-.87 1.2 1.2 0 0 0-.86-.34h-4.16v-5.37ZM30.71 17.3v6a1.26 1.26 0 0 0 .36.86 1.26 1.26 0 0 0 .84.36h2.58a1.29 1.29 0 0 0 .85-.36 1.25 1.25 0 0 0 .35-.86v-6l5-16a.73.73 0 0 0-.07-.7.7.7 0 0 0-.62-.31h-3.18a1.4 1.4 0 0 0-.79.3 1.39 1.39 0 0 0-.48.71l-2.37 9-2.34-9a1.44 1.44 0 0 0-.47-.71 1.46 1.46 0 0 0-.8-.3h-3.18a.74.74 0 0 0-.36.06.69.69 0 0 0-.31.94ZM39.51 54.19a1.26 1.26 0 0 0-.43-.7 1.3 1.3 0 0 0-.77-.3h-3.28a1.3 1.3 0 0 0-.77.3 1.26 1.26 0 0 0-.43.7l-4.26 22.22a.82.82 0 0 0 .16.71.78.78 0 0 0 .67.29h3.07a1.16 1.16 0 0 0 .75-.28 1.16 1.16 0 0 0 .4-.72l.45-3.29h3.2l.45 3.29a1.29 1.29 0 0 0 .41.7 1.22 1.22 0 0 0 .75.3h3.09a.77.77 0 0 0 .36-.07.8.8 0 0 0 .43-.93Zm-4 14.82 1-8 .13-2.22.14 2.22 1 8ZM42.03 79.79h-2.6a1.16 1.16 0 0 0-.84.36 1.18 1.18 0 0 0-.36.85v8.48h-2.5V81a1.27 1.27 0 0 0-.09-.47 1.19 1.19 0 0 0-1.12-.74h-2.6a1.17 1.17 0 0 0-.84.36 1.18 1.18 0 0 0-.36.85v21.79a1.22 1.22 0 0 0 .36.85 1.17 1.17 0 0 0 .84.36h2.6a1.27 1.27 0 0 0 .47-.09 1.21 1.21 0 0 0 .74-1.12v-8.48h2.47v8.48a1.18 1.18 0 0 0 .36.85 1.16 1.16 0 0 0 .84.36h2.63a1.18 1.18 0 0 0 .85-.36 1.27 1.27 0 0 0 .36-.85v-21.8a1.22 1.22 0 0 0-.36-.85 1.18 1.18 0 0 0-.85-.35ZM23.47 1.39a1.25 1.25 0 0 0-.43-.71 1.3 1.3 0 0 0-.77-.3h-3.3a1.3 1.3 0 0 0-.77.3 1.25 1.25 0 0 0-.43.71L13.52 23.6a.81.81 0 0 0 .16.72.84.84 0 0 0 .67.29h3.06a1.23 1.23 0 0 0 .76-.29 1.16 1.16 0 0 0 .4-.72l.44-3.29h3.23l.44 3.29a1.29 1.29 0 0 0 .41.7 1.29 1.29 0 0 0 .75.31h3.06a.86.86 0 0 0 .36-.08.82.82 0 0 0 .44-.93Zm-3.94 14.8 1-8 .14-2.21.14 2.21 1 8ZM47.88.69a.71.71 0 0 0-.62-.31h-3.18a1.39 1.39 0 0 0-.81.3 1.39 1.39 0 0 0-.48.71l-4.82 15.4a.71.71 0 0 0 .1.6.69.69 0 0 0 .55.27h2.87a1.37 1.37 0 0 0 1.47-.87l5-15.39a.73.73 0 0 0-.08-.71Z"/>
</svg>
}