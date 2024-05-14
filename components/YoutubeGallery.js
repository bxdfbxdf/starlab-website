import YoutubeEmbed from "./youtube"

const defaultEmbedIds = [
    'PxJCdwmvIAE',
    'BYNkpd3ukdk',
    'DZlbEXjo2Sc'
]

const YoutubeGallery = (props) => {

    let convertedIds
    if(typeof(props.embedIds) == typeof("string")){
        convertedIds = props.embedIds.split(',')
    }
    else {
        convertedIds = props.embedIds
    }

    const embedIds = convertedIds ? convertedIds : defaultEmbedIds

    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
    console.log(embedIds)
    console.log(typeof(embedIds))

    return (
        <div className='youtubeGallery'>
            <h1>{props.title}</h1>
            <div className="youtubeGalleryGrid">
                {
                    embedIds.map((id, count) => {
                        return( 
                            <div key={count} className='embedContainer'>
                                <YoutubeEmbed embedId={id}/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default YoutubeGallery