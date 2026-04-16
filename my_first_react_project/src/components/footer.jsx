import React from "react";
import './footer.css';

function Footer({ company, socialNetworks, schedules }) {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-section">
          <h3>{company}</h3>
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
            {socialNetworks.map((network, index) => (
              <a href={network.link} key={index} target="_blank">
                <i className={network.icon}></i>
                  <span>{network.name}</span>
              </a>)
            )}

          </div>
        </div>

        <div className="footer-section">
          <h4>Horario</h4>
          <p>Lunes a Sábado</p>
          <p>{schedules}</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Avícola Mar y Tierra - Todos los derechos reservados</p>
      </div>

    </footer>
  );
};

export default Footer;