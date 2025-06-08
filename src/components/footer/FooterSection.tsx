import styles from './footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faYoutube,
  faInstagram,
  faTiktok,
  faLinkedinIn,
  faPinterestP
} from '@fortawesome/free-brands-svg-icons';


const FooterSection = () => {
  return (
    <div className={styles.footer_container}>
      <div className={styles.footer}>
        <div className={styles.container}>
          
          <div className={styles.footer_row}>
            <div className={styles.footer_links}>
              <h4>Conócenos</h4>
              <ul>
                <li><a href="#">Acerca de Nosotros</a></li>
                <li><a href="#">Empleos</a></li>
                <li><a href="#">Inversionistas</a></li>
                <li><a href="#">Desarrolladores</a></li>
                <li><a href="#">Contactanos</a></li>
              </ul>
            </div>

            <div className={styles.footer_links}>
              <h4>Aliate con nosotros</h4>
              <ul>
                <li><a href="#">Vende con X-commerce</a></li>
                <li><a href="#">Publicita con Nosotros</a></li>
                <li><a href="#">Anuncia tus Productos</a></li>
                <li><a href="#">Programa de Afiliados</a></li>
              </ul>
            </div>

            <div className={styles.footer_links}>
              <h4>Productos de Pago</h4>
              <ul>
                <li><a href="#">Metodos de Pago</a></li>
                <li><a href="#">Recarga tu Saldo</a></li>
                <li><a href="#">Anuncia tus Productos</a></li>
                <li><a href="#">Compra con tus Puntos</a></li>
              </ul>
            </div>

            <div className={styles.footer_links}>
              <h4>Atencion al Cliente</h4>
              <ul>
                <li><a href="#">Atencion al cliente para comerciantes</a></li>
                <li><a href="#">Centro de ayuda de X-Commerce</a></li>
                <li><a href="#">Tu cuenta</a></li>
                <li><a href="#">Tus Pedidos</a></li>
              </ul>
            </div>
          </div>

          <div className={styles.footer_line}></div>

          <div className={styles.footer_bottom}>
            <div className={styles.info_links}>
              <span>Colombia | Español</span>
              <span>Términos del servicio</span>
              <span>Política de privacidad</span>
            </div>

            <div className={styles.social_icons}>
              <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
              <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
              <a href="#"><FontAwesomeIcon icon={faYoutube} /></a>
              <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
              <a href="#"><FontAwesomeIcon icon={faTiktok} /></a>
              <a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
              <a href="#"><FontAwesomeIcon icon={faPinterestP} /></a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FooterSection;