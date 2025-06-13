import styles from "./navBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faLocationDot
} from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
    
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
                <button className={styles.cart}>
                    <FontAwesomeIcon icon={faCartShopping} />
                </button>

        </nav>       
    );
};

export default NavBar;