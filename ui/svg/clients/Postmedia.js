import InlineSvg from '../InlineSvg'

export default function Aardvark({ href, alt = "Aardvark", width = "200", height = "100", className }) {

return <InlineSvg {... { href, alt, width, height, className, viewBox: "0 0 200 100" } }><path d="M62.303 14v72h31.55v-8.899h-.12V64.885h8.939c9.586 0 15.33-6.593 15.33-14.48 0-7.888-5.744-14.481-15.33-14.481h-18V77.1h-13.47V22.9h56.629V77.1h-20.224L100.245 86h36.485V14H62.303Zm31.43 30.014h8.453c4.126 0 6.715 2.588 6.715 6.39 0 3.762-2.589 6.31-6.715 6.31h-8.453v-12.7Z" fill="currentColor"/></InlineSvg> }