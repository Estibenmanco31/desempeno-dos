import React from 'react';
import '../Styles/CardsProductos.css';

export const CardsProductos = ({ icon, title, description, price }) => {
    return (
        <div className="product-card">
            <div className="product-image-placeholder">
                {icon}
            </div>
            <div className="product-info">
                <h3 className="product-title">{title}</h3>
                <p className="product-desc">{description}</p>
                <div className="product-bottom">
                    <span className="product-price">€{price}</span>
                    <button className="add-button">AÑADIR</button>
                </div>
            </div>
        </div>
    );
};

export default CardsProductos;
