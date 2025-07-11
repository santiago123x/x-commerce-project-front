import styles from "./topBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass
} from '@fortawesome/free-solid-svg-icons';


const TopBar = () => {
    
    return(
        <div className={styles.top_bar_container}>

            {/*Logo*/}
            <div>
                <img className={ styles.logo } src="./images/logo.png" alt="Logo"/>
            </div>

            {/*Search*/}
            <div className={styles.search_container}>

                <select className={styles.search_filter}>
                    <option value="">Todos</option>
                    <option value="#">Arte y artesanias</option>
                    <option value="#">Automotriz</option>
                    <option value="#">Bebé</option>
                    <option value="#">etc...</option>
                </select>

                <input className={styles.search_input} type="text" placeholder="Buscar en X-commerce"/>

                <button className={styles.search_button}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>

            </div>

            {/*Login button*/}
            <button className={styles.login_button}>
                Iniciar sesión
            </button>

        </div>
    );
};

export default TopBar;