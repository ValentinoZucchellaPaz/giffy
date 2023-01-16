import { Link } from "react-router-dom"
const DetailGif = ({id, title, url, prevKeyword}) => {
    return (
        <div className="h-auto flex flex-col items-center overflow-hidden">
            <div className="w-auto h-[50vh] flex flex-col justify-center m-5 gap-2 items-center relative">
                <img className="w-auto h-full object-contain rounded" src={url} alt={title}/>
            </div>
            <div className=" w-full max-h-[50vh] h-auto p-auto p-5 flex flex-col items-center justify-center [word-break:break-word] text-center">
                <h4 className="text-gray-700 m-1">
                    <span className="text-black font-semibold">Title:</span> {title}
                </h4>
                <p className="text-gray-700 max-w-[400px] md:max-w-[700px] m-1">
                    <span className="text-black font-semibold">Link:</span> <a href={url} target='_blank' rel="noreferrer">{url}</a>
                </p>
                <p className="text-gray-700 m-1">
                    <span className="text-black font-semibold">Gif Id:</span> {id}
                </p>
                <Link className='uppercase font-semibold transition-all hover:text-purple-900 hover:animate-pulse' to={`/search/${prevKeyword}`}>volver</Link>
            </div>
        </div>
    )
}
export default DetailGif