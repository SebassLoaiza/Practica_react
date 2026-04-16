import './header.css';
import React from 'react';

function Header() {
    return (
        <header className="header">
            <div className="container">

                <nav className="nav">
                    <ul>
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">Sobre Nosotros</a></li>
                        <li><a href="#">Contáctanos</a></li>
                    </ul>
                </nav>

                <div className="search">
                    <input type="text" placeholder="Buscar productos..." />
                </div>

                <div className="login">
                    <button>Login</button>
                </div>

            </div>
        </header>
    );
}

export default Header;