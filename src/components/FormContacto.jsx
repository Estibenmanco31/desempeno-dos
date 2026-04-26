import React, { useState } from 'react';
import { messageSent } from '../helpers/alerts';
import '../Styles/FormContacto.css';

const FormContacto = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        apellidos: '',
        email: '',
        asunto: 'Selecciona un asunto',
        mensaje: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Datos del formulario capturados:', formData);
        messageSent();

        setFormData({
            nombre: '',
            apellidos: '',
            email: '',
            asunto: 'Selecciona un asunto',
            mensaje: ''
        });
    };

    return (
        <div className="form-card">
            <h3 className="form-title">ENVÍANOS UN MENSAJE</h3>

            <div className="demo-alert">
                <strong>Demo:</strong> Este es un formulario de demostración. Los mensajes no se enviarán realmente.
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                    <div className="form-group">
                        <label>NOMBRE</label>
                        <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>APELLIDOS</label>
                        <input type="text" name="apellidos" value={formData.apellidos} onChange={handleChange} required />
                    </div>
                </div>

                <div className="form-group">
                    <label>EMAIL</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>

                <div className="form-group">
                    <label>ASUNTO</label>
                    <select name="asunto" value={formData.asunto} onChange={handleChange}>
                        <option>Selecciona un asunto</option>
                        <option>Consulta general</option>
                        <option>Información de producto</option>
                        <option>Estado de pedido</option>
                        <option>Devolución</option>
                        <option>Otro</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>MENSAJE</label>
                    <textarea name="mensaje" rows="4" value={formData.mensaje} onChange={handleChange} required></textarea>
                </div>

                <button type="submit" className="submit-button">ENVIAR MENSAJE</button>
            </form>
        </div>
    );
};

export default FormContacto;
