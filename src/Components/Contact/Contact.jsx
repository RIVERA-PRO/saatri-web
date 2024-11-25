import React, { useState } from 'react';
import './Contact.css';
import contact from '../contact';

export default function Contact() {
    const phoneNumber = contact[0]?.telefono;
    const name = contact[0]?.nombre;
    const [formData, setFormData] = useState({
        nombre: '',
        correo: '',
        telefono: '',
        ciudad: '',
        servicios: {
            paginasWeb: false,
            appMobile: false,
            disenoGrafico: false,
            seguridadInformatica: false,
            servicioTecnico: false,
            redes: false,
        },
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            setFormData((prev) => ({
                ...prev,
                servicios: {
                    ...prev.servicios,
                    [name]: checked,
                },
            }));
        } else {
            setFormData((prev) => ({
                ...prev,
                [name]: value,
            }));
        }
    };

    const handleWhatsappMessage = () => {
        // Construimos el mensaje basado en los datos del formulario
        const serviciosSeleccionados = Object.entries(formData.servicios)
            .filter(([_, checked]) => checked)
            .map(([servicio]) => servicio.replace(/([A-Z])/g, ' $1').trim())
            .join(', ');

        const message = `
            *Hola! ${name}⭐*\n\n*Nombre y Apellido:* ${formData.nombre}\n\n*Correo Electrónico:* ${formData.correo}\n\n*Teléfono Celular:* ${formData.telefono}\n\n*Provincia / Ciudad:* ${formData.ciudad}\n\n*Servicios solicitados:* ${serviciosSeleccionados || 'Ninguno'}\n\n
        `;

        const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

        window.open(whatsappUrl, '_blank');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleWhatsappMessage(); // Llamamos a la función para enviar el mensaje por WhatsApp
    };

    return (
        <div className='Contact'>
            <div className='aboutText'>
                <h2 className='titleSec'>Contacto</h2>
                <p>Ponte en contacto con nosotros</p>
            </div>
            <div className="contact-container">
                <div class="maps">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3337.581586775833!2d-60.33078112529432!3d-33.225063886003376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b76c425dd24779%3A0xcd0b1690c0420ae9!2sGral.%20L%C3%B3pez%201077%2C%20S2919%20Villa%20Constituci%C3%B3n%2C%20Santa%20Fe!5e0!3m2!1ses-419!2sar!4v1707530467370!5m2!1ses-419!2sar"></iframe>
                </div>
                <form onSubmit={handleSubmit} className='form'>
                    <fieldset>
                        <legend> Nombre y Apellido:</legend>
                        <input
                            type="text"
                            name="nombre"
                            value={formData.nombre}
                            onChange={handleChange}
                            required
                        />
                    </fieldset>

                    <fieldset>
                        <legend> Correo Electrónico:</legend>
                        <input
                            type="email"
                            name="correo"
                            value={formData.correo}
                            onChange={handleChange}
                            required
                        />
                    </fieldset>

                    <fieldset>
                        <legend>  Teléfono Celular - Wsp:</legend>
                        <input
                            type="number"
                            name="telefono"
                            value={formData.telefono}
                            onChange={handleChange}
                            required
                        />
                    </fieldset>

                    <fieldset>
                        <legend>  Provincia / Ciudad:</legend>
                        <input
                            type="text"
                            name="ciudad"
                            value={formData.ciudad}
                            onChange={handleChange}
                            required
                        />
                    </fieldset>

                    <fieldset>
                        <legend>Servicios solicitados</legend>
                        <div className='checksGrap'>
                            <label>
                                <input
                                    type="checkbox"
                                    name="paginasWeb"
                                    checked={formData.servicios.paginasWeb}
                                    onChange={handleChange}
                                />
                                Páginas Web
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    name="appMobile"
                                    checked={formData.servicios.appMobile}
                                    onChange={handleChange}
                                />
                                App Mobile
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    name="disenoGrafico"
                                    checked={formData.servicios.disenoGrafico}
                                    onChange={handleChange}
                                />
                                Diseño Gráfico
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    name="seguridadInformatica"
                                    checked={formData.servicios.seguridadInformatica}
                                    onChange={handleChange}
                                />
                                Seguridad Informática
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    name="servicioTecnico"
                                    checked={formData.servicios.servicioTecnico}
                                    onChange={handleChange}
                                />
                                Servicio Técnico
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    name="redes"
                                    checked={formData.servicios.redes}
                                    onChange={handleChange}
                                />
                                Implementación de Redes
                            </label>
                        </div>
                    </fieldset>

                    <button type="submit">Enviar</button>
                </form>
            </div>
        </div>
    );
}
