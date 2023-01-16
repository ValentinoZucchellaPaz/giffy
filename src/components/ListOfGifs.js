import Gif from "./Gif"

const ListOfGifs = ({gifs, keyword}) => {
    return <div className="mx-auto mt-10 pb-10 px-5 sm:px-10 md:px-20 lg:px-48 w-full columns-2 sm:columns-3 gap-2 overflow-hidden">
        {
            gifs.map( ({id, title, url}) =>
                <Gif
                    key={id}
                    id={id}
                    title={title}
                    url={url}
                    keyword={keyword}
                />
            )
        }
    </div>
}

export default ListOfGifs































// const [gifs, setGifs] = useState([])
// const [loading, setLoading] = useState(false)
// const { gifId, keyword } = useParams()


// const asyncFunction =  gifId ? getGifsById : getGifs

// useEffect( ()=>{
//     setLoading(true)
//     asyncFunction({keyword, gifId})
//         .then(apiGifs => {
//             setLoading(false)
//             setGifs(apiGifs)
//         })
// }, [keyword, gifId, asyncFunction])

// return <>
//     {
//         loading
//         ?   <div className="flex justify-center items-center mt-5">
//                 <Spinner />
//             </div>
//         : gifs.length > 1
//             ?   <div className="mx-auto mt-10 pb-10 px-5 sm:px-10 md:px-20 lg:px-48 w-full columns-2 sm:columns-3 gap-2 overflow-hidden">
//                 {gifs.map( ({id, url, title}) => 
//                     <Gif 
//                         key={id} 
//                         url={url} 
//                         id={id} 
//                         title={title} 
//                         keyword={keyword}/>)}
//                 </div>
//             :   <DetailGif 
//                     url={gifs.url} 
//                     id={gifs.id} 
//                     title={gifs.title} 
//                     prevKeyword={keyword} />
//     }
// </>