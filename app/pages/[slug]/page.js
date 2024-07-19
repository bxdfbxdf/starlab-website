import Markdown from 'markdown-to-jsx'
import {getPageMetadata, getPageContent} from '@/utils/pageData'
// import React from 'react'
// import fs from 'fs'
import Pic from '@/components/pic'
import HorizontalFeature from '@/components/horizontalfeature'
import YoutubeGallery from '@/components/YoutubeGallery'
import YoutubeEmbed from '@/components/youtube'




export const generateStaticParams = async () => {
    const pages = getPageMetadata('markdown')

    console.log("pages array::")
    let newarray = pages.map((page) => ({
        slug: page.slug,
        indexedName: page.indexedName,
        weirdThing: "yo"
    }))
    console.log(newarray)
    return newarray
}

export const generateMetadata = async ({params, searchParams}) => {
    const id = params?.slug ? ' - ' + params?.slug: ''
    return {
        title: `Rellis Starlab ${id.replace(/[0-9_]/g, ' ')}`
    }
}


const Page = (props) => {

    console.log('the props-----------------------------------------')
    console.log(props)
    const TheFile = props.params.indexedName
    console.log(TheFile)
    const post = getPageContent(TheFile)

    return (
        <main>
            <article className='page'>
                <Markdown
                    options={{
                        forceBlock:true,
                        overrides: {
                            img: {
                                component: Pic,
                                props: {

                                }
                            },
                            feature: {
                                component: HorizontalFeature
                            },
                            youtubeGallery: {
                                component: YoutubeGallery
                            },
                            YoutubeEmbed: {
                                component: YoutubeEmbed
                            }

                        }
                    }}
                >
                    {post.content}
                </Markdown>
            </article>
        </main>
    )
} 

export default Page