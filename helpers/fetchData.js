import { promises as fs } from "fs"
import path from 'path'
// import renderToString from 'next-mdx-remote/render-to-string'
// import matter from 'gray-matter'
// import { DOCS_DIRECTORY } from 'lib/constants'
const DATA_ROOT = "data/en-ca/"

export const useGetStaticProps = async ({ slug, type = "pages" }) => {

    const DIRECTORY = `${DATA_ROOT}${type}`.toLowerCase()

    const directory = path.join(process.cwd(), DIRECTORY)
    const filename = `${slug}.json`
    const filePath = path.join(directory, filename)

    const data = await fs.readFile(filePath, 'utf8').catch(e => "")

    // const { content, data } = matter(fileContents)
    // const source = await renderToString(content, { components, scope: data })

    return JSON.parse(data)
  }

export const useGetStaticPaths = async ({ type = pages }) => {
  const DIRECTORY = `${DATA_ROOT}${type}`.toLowerCase()

  const directory = path.join(process.cwd(), DIRECTORY)
  const filenames = await fs.readdir(directory)

  const targetFiles = filenames.filter(file => path.extname(file).toLowerCase() === '.json' )

  const paths = targetFiles.map(page => {
    return {
      params: { "slug": [path.basename(page, '.json')] }
    }
  })

  paths.push({ params: { slug: [] }})
  console.log(paths)
  return paths
}