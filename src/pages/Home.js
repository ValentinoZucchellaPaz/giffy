import { Link } from "react-router-dom";
import ListOfGifs from "../components/ListOfGifs"
import Spinner from "../components/Spinnner"
import useGifs from "../hooks/useGifs";

const popularGifs = ['primal', 'messi', 'argentina', 'world cup', 'programming', 'matrix']

const Home = () => {

    const { loading, gifs, keywordToUse } = useGifs()

    return (
        <>
            <div className="flex flex-col justify-center items-center m-auto w-full">
                <h3 className="font-semibold text-4xl text-slate-800 mb-2">Gifs más buscados:</h3>
                <ul className="flex flex-row flex-wrap gap-2 mx-2">
                    {popularGifs.map( (popularGif) => (
                        <li key={popularGif}>
                            <Link className="capitalize m-1 text-xl text-slate-700 transition-all hover:text-slate-900 border-b-2 border-transparent hover:border-slate-900" to={`/search/${popularGif}`}>{popularGif}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex flex-col justify-center items-center m-auto py-10 w-full">
                <h3 className="font-semibold text-4xl text-slate-800 mb-2 capitalize">última búsqueda: {keywordToUse}</h3>
                {
                    loading ? <Spinner/> : <ListOfGifs gifs={gifs} keyword={keywordToUse}/>
                }
            </div> 
        </>
    )
}

export default Home