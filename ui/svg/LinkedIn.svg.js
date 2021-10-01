import InlineSvg from './InlineSvg'

export default function LinkedIn({ href, alt = "LinkedIn", width = "32", height = "32", className }) {

return <InlineSvg {... { href, alt, width, height, className } }>
  <path fill="currentColor" d="M17.2 14.53v-.041l-.028.041z"></path><path fill="currentColor" d="M10.54 25.558H6.253V12.66h4.287zM8.397 10.9H8.37a2.235 2.235 0 1 1 .056-4.457 2.236 2.236 0 1 1-.028 4.457zM26 25.56h-4.287v-6.901c0-1.734-.62-2.917-2.172-2.917a2.347 2.347 0 0 0-2.2 1.568 2.933 2.933 0 0 0-.14 1.046v7.203h-4.288s.056-11.688 0-12.898H17.2v1.829a4.252 4.252 0 0 1 3.864-2.132c2.821 0 4.936 1.844 4.936 5.805z"></path>
  </InlineSvg>
}