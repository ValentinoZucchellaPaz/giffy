import { useParams } from "react-router-dom"
import DetailGif from "../components/DetailGif"
import { useContext } from "react"
import GifsContext from "../context/GifsContext"

const Detail = () => {
    const { keyword, gifId } = useParams()
    const {gifs, setGifs} = useContext(GifsContext)

    const singleGif = gifs.find(gif=>gif.id == gifId)

    return <DetailGif prevKeyword={keyword} {...singleGif}/>
}

export default Detail


// traer el detalle llamando a la api
// const [gif, setGif] = useState()

// useEffect(()=>{
//     getGifsById({gifId})
//         .then(apiGif => {
//             setGif(apiGif)
//             console.log(gif);
//         })
// }, [])

// return <DetailGif prevKeyword={keyword} {...gif}/>