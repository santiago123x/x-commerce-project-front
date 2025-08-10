"use client"
import styles from "./navBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faLocationDot
} from '@fortawesome/free-solid-svg-icons';
import { useAppSelector } from "@/lib/hooks";
import { useRouter } from 'next/navigation'

const NavBar = () => {
    const cart = useAppSelector((state) => state.cart);
    const router = useRouter()
    return(
        <nav className={styles.nav_bar}>
            {/*Nav Menu*/}
            <ul className={styles.nav_menu}>                    
                <li><a href="#"><FontAwesomeIcon icon={faLocationDot} /> Ubicación</a></li>
                <li><a href="#">Ofertas</a></li>
                <li><a href="#">Más vendidos</a></li>
                <li><a href="#">Ayuda</a></li>
            </ul>
            {/*Cart Icon*/}
            <button className={styles.cart} onClick={() => router.push('/cart')}>
                <FontAwesomeIcon icon={faCartShopping} />
            </button>
        </nav>       
    );
};

export default NavBar;