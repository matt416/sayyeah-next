

import InlineSvg from './InlineSvg'
import { PreventLineWrap } from 'ui/components/PreventLineWrap'
import clsx from 'clsx'
export default function Arrow( { id, href, alt = false, width = "24", height = "24", className }) {
return <PreventLineWrap><InlineSvg {... { href, alt, width, height, className: clsx(className, "inline"), viewBox: "0 0 24 24" } }>
        <g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd">
    <path d="M3 11H1c-.265216 0-.519556.1054-.707092.2929C.105371 11.4804 0 11.7348 0 12c0 .2652.105371.5196.292908.7071C.480444 12.8947.734784 13 1 13h2c.26522 0 .51959-.1053.70712-.2929C3.89466 12.5196 4 12.2652 4 12c0-.2652-.10534-.5196-.29288-.7071C3.51959 11.1054 3.26522 11 3 11ZM23.71 11.2901l-5-5.00003c-.1873-.18625-.4408-.2908-.705-.2908-.2642 0-.5176.10455-.705.2908-.1862.18736-.2908.44083-.2908.70502 0 .26418.1046.51762.2908.70498l3.29 3.30003H6.95001c-.26521 0-.51958.1053-.70712.2929-.18754.1875-.29288.4418-.29288.7071 0 .2652.10534.5195.29288.7071.18754.1875.44191.2929.70712.2929H20.59l-3.29 3.29c-.1862.1873-.2908.4408-.2908.705 0 .2642.1046.5176.2908.705.1874.1862.4408.2908.705.2908.2642 0 .5177-.1046.705-.2908l5-5c.1863-.1874.2908-.4408.2908-.705 0-.2642-.1045-.5177-.2908-.705Z"/>
  </g>
    </InlineSvg>
    </PreventLineWrap>
}

