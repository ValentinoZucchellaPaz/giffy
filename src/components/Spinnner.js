import '../index.css'
import { useEffect, useState } from 'react'
const Spinner = () => {
    const [timer, setTimer] = useState(false)

    useEffect(()=>{
        setTimeout(()=>setTimer(true), 30000)
    }, [])
    
    if (!timer){
        return (
            <div className="lds-ellipsis">
                <div></div>
                <div></div>
                <div></div>
            </div>
        )
    } else {
        return (
            <div>
                <h2 className='font-semibold text-2xl text-center my-3'>Se terminó el tiempo de espera, recarga la pagina</h2>
            </div>
        )
    }
}

export default Spinner 