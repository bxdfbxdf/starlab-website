import fs from 'fs'
import matter from 'gray-matter'
// import {compiler} from 'markdown-to-jsx'


export function getPageMetadata(basePath) {
    const folder = basePath + '/'
    const files = fs.readdirSync(folder)
    const markdowns = files.filter(file=> file.endsWith('.md'))

    const pages = markdowns.map((filename) => {
        const originalFilename = filename
        const fileContents = fs.readFileSync(`${basePath}/${filename}`, 'utf8')
        const matterResult = matter(fileContents)
        const rmvIndexRegex = /\d+_/gm
        const noIndex = filename.replace(rmvIndexRegex, '')
        const replacedWithDashes = noIndex.replace('_','-')
        const sanitizedFileName = replacedWithDashes.replace('.md', '')

        return {
            slug: sanitizedFileName,
            indexedName: originalFilename
            // other metadata can be returned from matterResult.data.<data name>
        }
    })

    return pages

}

export function getPageContent(FileName) {
    const folder = 'markdown/'
    console.log('in pageData utils, looking for::::::')
    const file = folder + FileName
    console.log(file)


    const content = fs.readFileSync(file, 'utf8')
    const jsx = matter(content)

    return jsx
}