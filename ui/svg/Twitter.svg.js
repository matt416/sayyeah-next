import InlineSvg from './InlineSvg'

export default function Twitter({ href, alt = "Twitter", width = "32", height = "32", className }) {

return <InlineSvg {... { href, alt, width, height, className } }>
  <path fill="currentColor" d="M23.953 11.921q.011.264.011.531A11.67 11.67 0 0 1 6 22.283a8.321 8.321 0 0 0 .979.058 8.232 8.232 0 0 0 5.096-1.757 4.107 4.107 0 0 1-3.833-2.85 4.112 4.112 0 0 0 1.853-.07 4.106 4.106 0 0 1-3.292-4.023v-.052a4.087 4.087 0 0 0 1.86.513 4.108 4.108 0 0 1-1.27-5.478 11.65 11.65 0 0 0 8.457 4.287 4.106 4.106 0 0 1 6.992-3.742 8.215 8.215 0 0 0 2.605-.996 4.116 4.116 0 0 1-1.804 2.27A8.201 8.201 0 0 0 26 9.797a8.337 8.337 0 0 1-2.047 2.124z"></path>
  </InlineSvg>
}