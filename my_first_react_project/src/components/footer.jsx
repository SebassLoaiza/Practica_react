import React from "react";
import './footer.css';

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-section">
          <h3>Avícola Mar y Tierra</h3>
          <p>
            Somos una empresa comprometida con la calidad y frescura de nuestros
            productos. Ofrecemos pollo, huevos, pescado y más, llevando lo mejor
            del mar y la tierra hasta tu hogar.
          </p>
        </div>

        <div className="footer-section">
          <h4>PQRS</h4>
          <ul>
            <li><a href="#">Peticiones</a></li>
            <li><a href="#">Quejas</a></li>
            <li><a href="#">Reclamos</a></li>
            <li><a href="#">Sugerencias</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Síguenos</h4>
          <div className="socials">

            <a href="#">
              <i className="fab fa-instagram"></i> Instagram
            </a>

            <a href="#">
              <i className="fab fa-facebook"></i> Facebook
            </a>

            <a href="#">
              <i className="fab fa-whatsapp"></i> WhatsApp
            </a>

          </div>
        </div>

        <div className="footer-section">
          <h4>Horario</h4>
          <p>Lunes a Sábado</p>
          <p>8:00 AM - 6:00 PM</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Avícola Mar y Tierra - Todos los derechos reservados</p>
      </div>

    </footer>
  );
};

export default Footer;