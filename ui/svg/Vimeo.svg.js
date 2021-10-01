import InlineSvg from './InlineSvg'

export default function Twitter({ href, alt = "Vimeo", width = "32", height = "32", className }) {

return <InlineSvg {... { href, alt, width, height, className } }>
  <path fill="currentColor" d="M25.9881 10.9919C25.8985 12.9337 24.5392 15.5925 21.9103 18.9683C19.1917 22.4935 16.8914 24.2561 15.0093 24.2561C13.8442 24.2561 12.8584 23.1806 12.0517 21.0296L10.4385 15.1145C9.84103 12.9636 9.19873 11.8881 8.51162 11.8881C8.36226 11.8881 7.83945 12.2018 6.9432 12.8291L6.00217 11.6192C6.97969 10.7603 7.95063 9.89391 8.91492 9.02016C10.2294 7.88493 11.2152 7.28745 11.8725 7.2277C13.4259 7.07833 14.3819 8.13887 14.7404 10.4093C15.1288 12.859 15.3976 14.3826 15.547 14.9801C15.9951 17.0115 16.488 18.0273 17.0258 18.0273C17.444 18.0273 18.0714 17.37 18.9078 16.0556C19.7443 14.7411 20.1924 13.7403 20.2522 13.0532C20.3717 11.918 19.9236 11.3504 18.9078 11.3504C18.4299 11.3504 17.9369 11.4549 17.4291 11.6641C18.4149 8.4675 20.297 6.91403 23.0753 7.00366C25.1367 7.06342 26.1076 8.39283 25.9881 10.9919L25.9881 10.9919Z"></path>
  </InlineSvg>
}