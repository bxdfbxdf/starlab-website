// import YoutubeEmbed from "./youtube"

// const defaultEmbedIds = [
//     'PxJCdwmvIAE',
//     'BYNkpd3ukdk',
//     'DZlbEXjo2Sc',
// ]

// // Server-side data fetching function
// export async function getServerSideProps(context) {
//     // Check if a playlist ID was provided
//     const playlistId = context.query.playlistId || 'PLv4HhqDJjnorFKZYja5BnAGfUqkFq58u1'
    
//     try {
//       const response = await fetch(
//         `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${playlistId}&key=${process.env.YOUTUBE_API_KEY}`
//       )
      
//     const data = await response.json()
    
//     // Extract video IDs from the playlist items
//     const videoIds = data.items.map(item => item.snippet.resourceId.videoId)
    
//     return {
//       props: {
//         embedIds: videoIds,
//         title: data.items[0]?.snippet?.playlistTitle || "YouTube Playlist",
//         playlistFetched: true
//       }
//     }
//   } catch (error) {
//     console.error("Error fetching playlist:", error)
//     // Return default IDs if fetch fails
//     return {
//       props: {
//         embedIds: defaultEmbedIds,
//         title: "Default Videos",
//         playlistFetched: false,
//         error: error.message
//       }
//     }
//   }
// }



// const YoutubeGallery = (props) => {

//     let convertedIds
//     if(props.apiEndpoint){

//     }
//     else{   
//         if(typeof(props.embedIds) == typeof("string")){
//             convertedIds = props.embedIds.split(',')
//         }
//         else {
//             convertedIds = props.embedIds
//         }
//     }

//     const embedIds = convertedIds ? convertedIds : defaultEmbedIds

//     console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
//     console.log(embedIds)
//     console.log(typeof(embedIds))

//     return (
//         <div className='youtubeGallery'>
//             <h1>{props.title}</h1>
//             <div className="youtubeGalleryGrid">
//                 {
//                     embedIds.map((id, count) => {
//                         return( 
//                             <div key={count} className='embedContainer'>
//                                 <YoutubeEmbed embedId={id}/>
//                             </div>
//                         )
//                     })
//                 }
//             </div>
//         </div>
//     )
// }
// export default YoutubeGallery



async function fetchPlaylistVideos(playlistId) {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${playlistId}&key=${process.env.YOUTUBE_API_KEY}`
    )
    
    if (!response.ok) {
      throw new Error('Failed to fetch playlist')
    }
    
    const data = await response.json()
    return data.items.map(item => item.snippet.resourceId.videoId)
  }
  
  export default async function YoutubeGallery(props) {
    let embedIds
    
    if (props.playlistId) {
      try {
        embedIds = await fetchPlaylistVideos(props.playlistId)
      } catch (error) {
        console.error("Error fetching playlist:", error)
        embedIds = props.embedIds || defaultEmbedIds
      }
    } else if (typeof props.embedIds === "string") {
      embedIds = props.embedIds.split(',')
    } else if (Array.isArray(props.embedIds)) {
      embedIds = props.embedIds
    } else {
      embedIds = defaultEmbedIds
    }
  
    //NOTE:: parse playlist name if possible.
    return (
      <div className='youtubeGallery'>
        <h1>{props.title || "YouTube Videos"}</h1>
        <div className="youtubeGalleryGrid">
          {embedIds.map((id, count) => (
            <div key={id || count} className='embedContainer'>
              <YoutubeEmbed embedId={id} />
            </div>
          ))}
        </div>
      </div>
    )
  }