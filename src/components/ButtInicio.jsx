import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/ButtInicio.css';

const ButtInicio = () => {
    const navigate = useNavigate();

    return (
        <button className="butt-inicio" onClick={() => navigate('/productos')}>
            EXPLORAR COLECCIÓN
        </button>
    );
};

export default ButtInicio;
