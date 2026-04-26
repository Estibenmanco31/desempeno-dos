import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Styles/NavBar.css';

export const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                URBAN THREADS
            </div>
            <ul className="navbar-links">
                <li><NavLink to="/inicio">INICIO</NavLink></li>
                <li><NavLink to="/productos">PRODUCTOS</NavLink></li>
                <li><NavLink to="/contacto">CONTACTO</NavLink></li>
            </ul>
        </nav>
    );
};

export default NavBar;
