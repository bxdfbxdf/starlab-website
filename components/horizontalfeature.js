import Markdown from 'markdown-to-jsx'

const HorizontalFeature = ({children}) => {

    console.log(children)

    return (
        <div className='horizontal-feature'>
            {children}
        </div>
    )
}

export default HorizontalFeature