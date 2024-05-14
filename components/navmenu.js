
import Link from 'next/link'
import { getPageMetadata } from "../utils/pageData"


const NavMenu = (props) => {

    const searchParams = props.searchParams
    const  pid  = searchParams


    const pages = getPageMetadata('markdown')

    const pageNames = pages.map(page => {
        return {
            link: page.slug,
            text: page.slug.replace(/[0-9_]/g, ' ')
        }
    })

    return (
        <nav>
            <ul>
                <li key='starlab'>
                    <Link href='/' alt='Starlab Home Page'>Starlab</Link>
                </li>
                {pageNames.map(page => (
                    <li key={page.text} className={pid == page.text ? 'hilight' : ''}>
                        <Link href={`/pages/${page.link}`}>{page.text}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export async function getStaticProps({ params }) {
    const pages = getPages()
    return {pages, fallback: false}
}

export default NavMenu