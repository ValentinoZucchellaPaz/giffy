import { useNavigate } from 'react-router-dom'
const Gif = ({id, title, url, keyword}) =>{
    const navigate = useNavigate()
    return(
        <div onClick={()=>navigate(`/gif/${keyword}/${id}`)} className=" w-auto h-auto cursor-pointer my-2 relative" key={id}>
            <img className="w-full h-full rounded" src={url} alt={title}/>
            <p className='absolute bottom-0 left-0 bg-[rgba(0,0,0,0.5)] text-amber-400 rounded p-[1px] text-sm'>{title}</p>
        </div>
    )
}

export default Gif