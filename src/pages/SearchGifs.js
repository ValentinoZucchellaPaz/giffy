import ListOfGifs from "../components/ListOfGifs"
import Home from "./Home"

const SearchGifs = () => {

    return (
        <>
            <Home />
            <span className="w-screen h-[2px] bg-slate-700"></span>
            <ListOfGifs />
        </>
    )
}

export default SearchGifs