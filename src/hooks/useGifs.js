import { useState, useEffect, useContext } from "react"
import GifsContext from "../context/GifsContext"
import { getGifs } from "../services/getGifs"

const useGifs = ({keyword} = {keyword: null}) => {
    
    const { gifs, setGifs } = useContext(GifsContext)
    const [loading, setLoading] = useState(false)

    const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random'

    useEffect( ()=>{
        setLoading(true)
        getGifs({ keyword: keywordToUse })
            .then(apiGifs => {
                setGifs(apiGifs)
                setLoading(false)
                localStorage.setItem('lastKeyword', keywordToUse)
                console.log('llamado a api');
            })
    }, [keyword])

    return {gifs, loading, keywordToUse}
    
}

export default useGifs