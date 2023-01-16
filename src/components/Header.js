import { NavLink, useNavigate } from 'react-router-dom'
import logo from './assets/giffy-low-resolution-logo-white-on-transparent-background.png'

const Header = () => {
    const toggleNav = () => {
        const header = document.querySelector('header')
        header.classList.toggle('h-20')
        header.classList.toggle('h-56')
    }
    const navigate = useNavigate()
    return (
        <header className="
            md:px-[25%] pb-2 md:pb-0 
            h-20 md:h-20 
            flex flex-col md:flex-row justify-between items-center 
            bg-slate-800 text-white 
            relative transition-all overflow-hidden">
            <img onClick={()=>navigate('/')} className="w-32 -translate-x-5 cursor-pointer" src={logo} alt="logo"/>
            <i className="fa-solid fa-bars md:hidden cursor-pointer absolute top-8 right-8" onClick={()=>toggleNav()}></i>
            <nav>
                <ul className="flex md:flex-row flex-col gap-4">
                    <NavLink to='/' className="font-semibold border-b-2 border-transparent hover:border-white transition-all cursor-pointer mx-auto">GIFS</NavLink>
                    <NavLink to='/nosotros' className="font-semibold border-b-2 border-transparent hover:border-white transition-all cursor-pointer mx-auto">NOSOTROS</NavLink>
                    <a href='https://giphy.com/' className="font-semibold border-b-2 border-transparent hover:border-white transition-all cursor-pointer mx-auto" target="_blank" rel="noreferrer">GIPHY </a>
                </ul>
            </nav>
        </header>
    )
}

export default Header