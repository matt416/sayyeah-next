import InlineSvg from '../InlineSvg'

export default function Klick({ href, alt = "Klick", width = "200", height = "100", className }) {

return <InlineSvg {... { href, alt, width, height, className, viewBox: "0 0 200 100" } }><path fill-rule="evenodd" clip-rule="evenodd" d="M136.703 15.628a9.334 9.334 0 0 0-2.188-3.064 9.51 9.51 0 0 0-3.224-1.97 9.92 9.92 0 0 0-3.912-.58l-56.854 2.86a8.38 8.38 0 0 0-3.342.883 9.128 9.128 0 0 0-2.706 2.077 9.664 9.664 0 0 0-1.813 2.96 9.783 9.783 0 0 0-.663 3.545v55.327c0 1.247.236 2.446.663 3.545a9.69 9.69 0 0 0 1.813 2.96 9.132 9.132 0 0 0 2.706 2.077 8.434 8.434 0 0 0 3.342.882l56.854 2.86a9.93 9.93 0 0 0 3.913-.58 9.547 9.547 0 0 0 3.225-1.97 9.363 9.363 0 0 0 2.994-6.912V19.475a9.46 9.46 0 0 0-.807-3.847h-.001Zm-54.92 59.084a4.516 4.516 0 1 1 0-9.034 4.516 4.516 0 0 1 0 9.035v-.001Zm4.847-49.144c-.738 10.817-2.174 35.56-2.174 35.56H79.26s-2.743-32.668-2.746-36.17c0-1.972 1.328-1.962 2.134-2.355 2.04-.45 4.084-.496 6.096.114 1.643.497 2.004 1.126 1.886 2.85v.001Zm34.072 48.1h-10.39a1.21 1.21 0 0 1-.847-.35c-.367-.36-.69-.792-1.048-1.138-.68-.66-15.55-18.11-17.745-22.038-.326-.584-.37-1.858.354-2.26 1.124-.624 2.136-1.566 3.084-2.43 4.23-3.856 14.14-14.264 15.035-15.416.87-1.12.466-1.967-.953-2.17-.714-.1-1.445-.083-2.176-.12-.077-.546-.17-1.016.133-1.607h12.157c.228 1.03.182 1.656-.816 2.224-1.802 1.025-3.25 2.544-4.706 4.02-1.047 1.06-8.84 8.996-11.72 11.872-.538.537-1.13 1.017-1.684 1.536-.28.26-.552.53-.797.82-.222.263-.5.54-.556.893-.075.473.392.858.678 1.2.233.278 16.33 19.39 17.72 21.03.655.776 2.89 2.073 3.688 2.707.086.07.174.136.263.202.345.255.332.272.326 1.023v.002Z" fill="currentColor"/></InlineSvg> }