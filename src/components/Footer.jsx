import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Footer.css';

export const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                <div className="footer-section brand">
                    <h4>URBAN THREADS</h4>
                    <p>Redefiniendo el estilo urbano con diseños minimalistas y calidad premium.</p>
                </div>
                <div className="footer-section links">
                    <h4>ENLACES</h4>
                    <ul>
                        <li><Link to="/inicio">Inicio</Link></li>
                        <li><Link to="/productos">Productos</Link></li>
                        <li><Link to="/contacto">Contacto</Link></li>
                    </ul>
                </div>
                <div className="footer-section links">
                    <h4>AYUDA</h4>
                    <ul>
                        <li><a href="#tallas">Guía de tallas</a></li>
                        <li><a href="#envios">Envíos</a></li>
                        <li><a href="#devoluciones">Devoluciones</a></li>
                        <li><a href="#faq">FAQ</a></li>
                    </ul>
                </div>
                <div className="footer-section social">
                    <h4>SÍGUENOS</h4>
                    <div className="social-icons">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C6.48 2 2 6.48 2 12c0 4.25 2.65 7.89 6.44 9.17-.09-.78-.17-1.99.03-2.85.18-.81 1.18-5 1.18-5s-.3-.6-.3-1.49c0-1.4.81-2.45 1.83-2.45.86 0 1.28.65 1.28 1.42 0 .87-.55 2.16-.84 3.37-.24.99.5 1.8 1.47 1.8 1.77 0 3.12-1.87 3.12-4.57 0-2.4-1.73-4.08-4.2-4.08-2.86 0-4.54 2.15-4.54 4.36 0 .86.33 1.79.75 2.29.08.1.09.18.06.28-.09.38-.3 1.24-.34 1.41-.05.19-.18.23-.39.13-1.45-.68-2.36-2.82-2.36-4.54 0-3.69 2.68-7.08 7.74-7.08 4.07 0 7.23 2.9 7.23 6.78 0 4.05-2.55 7.3-6.1 7.3-1.19 0-2.31-.62-2.69-1.35l-.74 2.82c-.27 1.04-1 2.34-1.48 3.14 1.15.35 2.37.54 3.63.54 5.52 0 10-4.48 10-10S17.52 2 12 2z" />
                        </svg>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Urban Threads. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;
