import fs from 'fs'
import matter from 'gray-matter'
// import {compiler} from 'markdown-to-jsx'


export function getPageMetadata(basePath) {
    const folder = basePath + '/'
    const files = fs.readdirSync(folder)
    const markdowns = files.filter(file=> file.endsWith('.md'))

    const pages = markdowns.map((filename) => {
        const fileContents = fs.readFileSync(`${basePath}/${filename}`, 'utf8')
        const matterResult = matter(fileContents)
        return {
            slug: filename.replace('.md', '')
            // other metadata can be returned from matterResult.data.<data name>
        }
    })

    return pages

}

export function getPageContent(slug) {
    const folder = 'markdown/'
    const file = folder + `${slug}.md`


    const content = fs.readFileSync(file, 'utf8')
    const jsx = matter(content)

    return jsx
}