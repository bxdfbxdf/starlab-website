import Markdown from 'markdown-to-jsx'
import {getPageMetadata, getPageContent} from '@/utils/pageData'
// import React from 'react'
// import fs from 'fs'
import Pic from '@/components/pic'
import HorizontalFeature from '@/components/horizontalfeature'




export const generateStaticParams = async () => {
    const pages = getPageMetadata('markdown')
    return pages.map((page) => ({slug: page.slug}))
}

export const generateMetadata = async ({params, searchParams}) => {
    const id = params?.slug ? ' - ' + params?.slug: ''
    return {
        title: `Rellis Starlab ${id.replaceAll('_', '')}`
    }
}


const Page = (props) => {

    const slug = props.params.slug
    const post = getPageContent(slug)

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