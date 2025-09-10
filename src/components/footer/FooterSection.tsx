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
    <div className="bg-[#121212] font-urbanist text-white">
      <div className="py-10">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="flex flex-wrap justify-center md:justify-between">
            {/* Conócenos */}
            <div className="w-full text-center mb-7 md:w-[22%] md:min-w-[200px] md:text-left">
              <h4 className="text-[20px] mb-4 font-bold">Conócenos</h4>
              <ul className="list-none p-0 m-0">
                <li className="mb-2"><a className="text-[15px] transition-all duration-300 hover:text-[#999] hover:pl-1" href="#">Acerca de Nosotros</a></li>
                <li className="mb-2"><a className="text-[15px] transition-all duration-300 hover:text-[#999] hover:pl-1" href="#">Empleos</a></li>
                <li className="mb-2"><a className="text-[15px] transition-all duration-300 hover:text-[#999] hover:pl-1" href="#">Inversionistas</a></li>
                <li className="mb-2"><a className="text-[15px] transition-all duration-300 hover:text-[#999] hover:pl-1" href="#">Desarrolladores</a></li>
                <li className="mb-2"><a className="text-[15px] transition-all duration-300 hover:text-[#999] hover:pl-1" href="#">Contactanos</a></li>
              </ul>
            </div>
            {/* Aliate con nosotros */}
            <div className="w-full text-center mb-7 md:w-[22%] md:min-w-[200px] md:text-left">
              <h4 className="text-[20px] mb-4 font-bold">Aliate con nosotros</h4>
              <ul className="list-none p-0 m-0">
                <li className="mb-2"><a className="text-[15px] transition-all duration-300 hover:text-[#999] hover:pl-1" href="#">Vende con X-commerce</a></li>
                <li className="mb-2"><a className="text-[15px] transition-all duration-300 hover:text-[#999] hover:pl-1" href="#">Publicita con Nosotros</a></li>
                <li className="mb-2"><a className="text-[15px] transition-all duration-300 hover:text-[#999] hover:pl-1" href="#">Anuncia tus Productos</a></li>
                <li className="mb-2"><a className="text-[15px] transition-all duration-300 hover:text-[#999] hover:pl-1" href="#">Programa de Afiliados</a></li>
              </ul>
            </div>
            {/* Productos de Pago */}
            <div className="w-full text-center mb-7 md:w-[22%] md:min-w-[200px] md:text-left">
              <h4 className="text-[20px] mb-4 font-bold">Productos de Pago</h4>
              <ul className="list-none p-0 m-0">
                <li className="mb-2"><a className="text-[15px] transition-all duration-300 hover:text-[#999] hover:pl-1" href="#">Metodos de Pago</a></li>
                <li className="mb-2"><a className="text-[15px] transition-all duration-300 hover:text-[#999] hover:pl-1" href="#">Recarga tu Saldo</a></li>
                <li className="mb-2"><a className="text-[15px] transition-all duration-300 hover:text-[#999] hover:pl-1" href="#">Anuncia tus Productos</a></li>
                <li className="mb-2"><a className="text-[15px] transition-all duration-300 hover:text-[#999] hover:pl-1" href="#">Compra con tus Puntos</a></li>
              </ul>
            </div>
            {/* Atención al Cliente */}
            <div className="w-full text-center mb-7 md:w-[22%] md:min-w-[200px] md:text-left">
              <h4 className="text-[20px] mb-4 font-bold">Atención al Cliente</h4>
              <ul className="list-none p-0 m-0">
                <li className="mb-2"><a className="text-[15px] transition-all duration-300 hover:text-[#999] hover:pl-1" href="#">Atención al cliente para comerciantes</a></li>
                <li className="mb-2"><a className="text-[15px] transition-all duration-300 hover:text-[#999] hover:pl-1" href="#">Centro de ayuda de X-Commerce</a></li>
                <li className="mb-2"><a className="text-[15px] transition-all duration-300 hover:text-[#999] hover:pl-1" href="#">Tu cuenta</a></li>
                <li className="mb-2"><a className="text-[15px] transition-all duration-300 hover:text-[#999] hover:pl-1" href="#">Tus Pedidos</a></li>
              </ul>
            </div>
          </div>
          {/* Línea divisoria */}
          <div className="w-full h-px bg-[#2f2f2f] my-2"></div>
          {/* Footer Bottom */}
          <div className="flex flex-col items-center justify-center pb-5 gap-4 md:flex-row md:justify-between md:items-center">
            <div className="flex flex-wrap gap-7 text-[14px] text-white justify-center items-center text-center md:justify-start md:text-left">
              <span>Colombia | Español</span>
              <a href="#" className="hover:text-[#999] transition-colors">Términos del servicio</a>
              <a href="#" className="hover:text-[#999] transition-colors">Política de privacidad</a>
            </div>
            <div className="flex gap-5 justify-center md:justify-end">
              <a href="#" className="text-white text-[18px] transition-colors hover:text-[#999]"><FontAwesomeIcon icon={faFacebookF} /></a>
              <a href="#" className="text-white text-[18px] transition-colors hover:text-[#999]"><FontAwesomeIcon icon={faTwitter} /></a>
              <a href="#" className="text-white text-[18px] transition-colors hover:text-[#999]"><FontAwesomeIcon icon={faYoutube} /></a>
              <a href="#" className="text-white text-[18px] transition-colors hover:text-[#999]"><FontAwesomeIcon icon={faInstagram} /></a>
              <a href="#" className="text-white text-[18px] transition-colors hover:text-[#999]"><FontAwesomeIcon icon={faTiktok} /></a>
              <a href="#" className="text-white text-[18px] transition-colors hover:text-[#999]"><FontAwesomeIcon icon={faLinkedinIn} /></a>
              <a href="#" className="text-white text-[18px] transition-colors hover:text-[#999]"><FontAwesomeIcon icon={faPinterestP} /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;