import React from 'react';
import '../Styles/FormContacto.css';

const FormContacto = () => {
    return (
        <div className="form-card">
            <h3 className="form-title">ENVÍANOS UN MENSAJE</h3>

            <div className="demo-alert">
                <strong>Demo:</strong> Este es un formulario de demostración. Los mensajes no se enviarán realmente.
            </div>

            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                <div className="form-row">
                    <div className="form-group">
                        <label>NOMBRE</label>
                        <input type="text" />
                    </div>
                    <div className="form-group">
                        <label>APELLIDOS</label>
                        <input type="text" />
                    </div>
                </div>

                <div className="form-group">
                    <label>EMAIL</label>
                    <input type="email" />
                </div>

                <div className="form-group">
                    <label>ASUNTO</label>
                    <select>
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
                    <textarea rows="4"></textarea>
                </div>

                <button type="submit" className="submit-button">ENVIAR MENSAJE</button>
            </form>
        </div>
    );
};

export default FormContacto;
