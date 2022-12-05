import { FaWhatsapp, FaInstagram, FaPhoneAlt, FaMapMarkerAlt, FaRegEnvelope } from "react-icons/fa";
import Image from 'next/image'
// import teste from '../assets';

function Footer() {


  return (
    <>
     {/* <!-- Footer Start --> */}
     <footer className="ec-footer section-space-mt">
        <div className="footer-container">
          <div className="footer-top">
            <div className="container">
              <div className="row">
                <div className="col-sm-12 col-lg-4 ec-footer-contact">
                  <div className="ec-footer-widget">
                    <h4 className="ec-footer-heading">Contato</h4>
                    <div className="ec-footer-links">
                      <ul className="align-items-center">
                        <li className="ec-footer-link">
                          <span><FaMapMarkerAlt className="ecicon eci-map-marker" /></span>Rua
                          Cel. Pedro Penteado, 637 <br />
                          Serra Negra - SP
                        </li>
                        <li className="ec-footer-link">
                          <span><FaPhoneAlt className="ecicon eci-phone" /></span>
                          <a href="tel:+551999999999">(19) 9999-9999</a>
                        </li>
                        <li className="ec-footer-link">
                          <span><i className="ecicon eci-build"></i></span>CNPJ:
                          47.282.631/0001-04
                        </li>
                        <li className="ec-footer-link">
                          <span><FaRegEnvelope className="ecicon eci-build" /></span>
                          <a href="mailto:contato@aspapoulas.com.br">contato@bellasnatural.com.br</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-lg-4 ec-footer-info">
                  <div className="ec-footer-widget">
                    <h4 className="ec-footer-heading">Mapa do Site</h4>
                    <div className="ec-footer-links">
                      <ul className="align-items-center">
                        <li className="ec-footer-link"><a href="/bellasnatural">Home</a></li>
                        <li className="ec-footer-link"><a href="/bellasnatural">Sobre Nós</a></li>
                        <li className="ec-footer-link">
                          <a href="/bellasnatural">Dúvidas Frequentes</a>
                        </li>
                        <li className="ec-footer-link">
                          <a href="/bellasnatural">Política de Compras</a>
                        </li>
                        <li className="ec-footer-link">
                          <a href="/bellasnatural">Política de Privacidade</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-lg-4 ec-footer-account">
                  <div className="ec-footer-widget">
                    <h4 className="ec-footer-heading">Minha Conta</h4>
                    <div className="ec-footer-links">
                      <ul className="align-items-center">
                        <li className="ec-footer-link">
                          <a href="/bellasnatural">Minhas Compras</a>
                        </li>
                        <li className="ec-footer-link"><a href="/bellasnatural">Meus Dados</a></li>
                        <li className="ec-footer-link"><a href="/bellasnatural">Favoritos</a></li>
                        <li className="ec-footer-link">
                          <a href="/bellasnatural">Histórico de Pedidos</a>
                        </li>
                        <li className="ec-footer-link">
                          <a href="/bellasnatural">Configurações</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 ec-footer-social mt-4">
                  <div className="ec-footer-widget">
                    <h4 className="ec-footer-heading">Siga-nos</h4>
                    <div className="ec-footer-links">
                      <ul className="align-items-center">
                        <li className="ec-footer-link"><a href="/bellasnatural">instagram</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="container">
              <div className="row">
                {/* <!-- Footer Copyright Start --> */}
                <div className="col footer-copy">
                  <div className="footer-bottom-copy">
                    <div className="ec-copy">
                      © 2022 <a style={{ color: '#303030' }} className="site-name">Bellas Natural</a>. Todos
                      os direitos reservados.
                    </div>
                  </div>
                </div>
                {/* <!-- Footer Copyright End --> */}
                {/* <!-- Footer payment --> */}
                <div className="col footer-bottom-right">
                  <div className="footer-bottom-payment d-flex justify-content-end">
                    <div className="payment-link">
                      <Image src={require("../assets/img/footer/payment.png")} alt="" />
                    </div>
                  </div>
                </div>
                {/* <!-- Footer payment --> */}
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* <!-- Footer Area End --> */}
    </>
  );
}

export default Footer;
