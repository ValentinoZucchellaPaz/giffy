import { Button, TextField } from "@mui/material";
import { useNavigate, Link } from "react-router-dom";

const Home = () => {

    const navigate = useNavigate()
    const handleChange = (e) => {
        e.preventDefault()
        navigate(`/search/${document.getElementById('standard-basic').value}`)
    }

    const popularGifs = ['primal', 'messi', 'argentina', 'world cup', 'programming', 'matrix']

    return (
        <>
            <form action='' className="flex flex-row justify-center items-center gap-10 m-10" onSubmit={handleChange}>
                <TextField style={{'marginBottom':'12px'}} id="standard-basic" label="Busca un gif" variant="standard"/>
                <Button variant="outlined" onClick={handleChange}>Buscar</Button>
            </form>
            <nav className="flex flex-col justify-center items-center m-auto w-full">
                <h2 className="font-semibold text-4xl text-slate-800 mb-2">Most searched gifs:</h2>
                <div className="flex flex-row flex-wrap gap-2 mx-2">
                {
                    popularGifs.map(popularGif=><Link key={popularGif} className="capitalize m-1 text-xl text-slate-700 transition-all hover:text-slate-900 border-b-2 border-transparent hover:border-slate-900" to={`/search/${popularGif}`}>{popularGif}</Link>)
                }
                </div>
            </nav>
        </>
    )
}

export default Home