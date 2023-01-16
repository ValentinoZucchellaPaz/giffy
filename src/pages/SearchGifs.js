import ListOfGifs from "../components/ListOfGifs"
import { useParams } from "react-router-dom"
import Spinner from "../components/Spinnner"
import useGifs from "../hooks/useGifs"

const SearchGifs = () => {

    const { keyword } = useParams()
    const { loading, gifs } = useGifs({ keyword })

    return <div className="grid place-content-center">
        {
            loading
                ? <Spinner />
                : <ListOfGifs gifs={gifs} keyword={keyword}/>
        }        
    </div>
}

export default SearchGifs