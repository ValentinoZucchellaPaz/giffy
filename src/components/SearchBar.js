import { useNavigate } from "react-router-dom"
import { Button, TextField } from "@mui/material";

const SearchBar = () => {
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        navigate(`/search/${document.getElementById('standard-basic').value}`)
    }

    return <>
        <form action='' className="flex flex-row justify-center items-center gap-10 m-2" onSubmit={handleSubmit}>
            <TextField style={{'marginBottom':'12px'}} id="standard-basic" label="Busca un gif" variant="standard"/>
            <Button type="submit" variant="outlined">Buscar</Button>
        </form>
    </>
}

export default SearchBar