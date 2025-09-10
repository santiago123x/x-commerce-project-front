"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faLocationDot,
  faBars,
  faTimes
} from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const NavBar = () => {
    const router = useRouter()
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return(
        <nav className="flex justify-between items-center py-2 px-5 bg-[#606060] relative">
            {/* Hamburger Menu Button*/}
            <button 
                className="md:hidden text-white text-xl p-2"
                onClick={toggleMenu}
            >
                <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
            </button>

            {/*Nav Menu - Desktop*/}
            <ul className="hidden md:flex list-none gap-7 p-0 m-0">                    
                <li><a href="#" className="no-underline text-white hover:text-gray-300 transition-colors"><FontAwesomeIcon icon={faLocationDot} className="mr-1" /> Ubicación</a></li>
                <li><a href="#" className="no-underline text-white hover:text-gray-300 transition-colors">Ofertas</a></li>
                <li><a href="#" className="no-underline text-white hover:text-gray-300 transition-colors">Más vendidos</a></li>
                <li><a href="#" className="no-underline text-white hover:text-gray-300 transition-colors">Ayuda</a></li>
            </ul>

            {/*Nav Menu - Mobile (Dropdown)*/}
            <ul className={`md:hidden absolute top-full left-0 w-full bg-[#606060] list-none p-0 m-0 transition-all duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>                    
                <li className="border-b border-gray-500"><a href="#" className="block no-underline text-white hover:bg-gray-500 transition-colors py-3 px-5"><FontAwesomeIcon icon={faLocationDot} className="mr-2" /> Ubicación</a></li>
                <li className="border-b border-gray-500"><a href="#" className="block no-underline text-white hover:bg-gray-500 transition-colors py-3 px-5">Ofertas</a></li>
                <li className="border-b border-gray-500"><a href="#" className="block no-underline text-white hover:bg-gray-500 transition-colors py-3 px-5">Más vendidos</a></li>
                <li><a href="#" className="block no-underline text-white hover:bg-gray-500 transition-colors py-3 px-5">Ayuda</a></li>
            </ul>

            {/*Cart Icon*/}
            <button className="bg-[#FFD814] text-[#121212] py-2 px-3 border-none rounded-full cursor-pointer hover:bg-[#FFD814]/90 transition-colors" onClick={() => router.push('/cart')}>
                <FontAwesomeIcon icon={faCartShopping} />
            </button>
        </nav>       
    );
};

export default NavBar;