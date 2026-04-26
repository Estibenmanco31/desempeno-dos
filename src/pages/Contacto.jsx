import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import FormContacto from '../components/FormContacto';
import '../Styles/Contacto.css';

const Contacto = () => {
  return (
    <div className="contacto-page">
      <NavBar />
      <div className="contacto-content">
        <div className="contacto-header">
          <h1>CONTACTO</h1>
          <p>¿Tienes alguna pregunta? Nos encantaría escucharte</p>
        </div>

        <div className="contacto-grid">
          <div className="info-column">
            <h2>INFORMACIÓN DE CONTACTO</h2>

            <div className="info-item">
              <div className="info-icon">
                <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
              </div>
              <div className="info-text">
                <h4>DIRECCIÓN</h4>
                <p>Calle Urban Style 123</p>
                <p>28001 Madrid, España</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.48-4.18-7.076-7.076l1.293-.97c.362-.271.527-.733.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
              </div>
              <div className="info-text">
                <h4>TELÉFONO</h4>
                <p>+34 91 123 45 67</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.909A2.25 2.25 0 012.25 6.993V6.75" /></svg>
              </div>
              <div className="info-text">
                <h4>EMAIL</h4>
                <p>info@urbanthreads.com</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <div className="info-text">
                <h4>HORARIO</h4>
                <p>Lun - Vie: 9:00 - 18:00</p>
                <p>Sáb: 10:00 - 14:00</p>
              </div>
            </div>

          </div>

          <div className="form-column">
            <FormContacto />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contacto;
