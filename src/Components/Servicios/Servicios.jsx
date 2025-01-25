import React, { useState } from 'react';
import jsPDF from 'jspdf';
import './Servicios.css';
import Bg from '../Bg/Bg';
export default function Servicios() {
    const servicios = [
        {
            titulo: "Gerencia de Recaudación",
            datos: [
                "Solicitud para la emisión del permiso de espectáculos públicos ",
                "Solicitud para la emisión del certificad de solvencia única ",
                "Guía para enterar retenciones de las actividades económicas ",
                "Formato de la planilla de autoliquidación del impuestos de actividades económicas ",
                "Formato de la planilla de autoliquidación del impuesto de retenciones ",
                "Solicitud para la transformación de datos o códigos de la licencia de licores ",
                "Solicitud para la emisión de la licencia de licores ",
                "Solicitud para la renovación de la licencia de licores ",

            ],
        },
        {
            titulo: "Gerencia de Fiscalización",
            datos: [
                "Solicitud para la obtener la Licencia de Actividades Económicas ",
                "Solicitud para la modificación de datos Licencia de Actividades Económicas ",
                "Solicitud para la reimpresión de la Licencia de Actividades Económicas ",
                "Solicitud para la renovación de los deberes formales ",
                "Solicitud para el Cese Definitivo o Temporal de la Licencia de Actividades Económicas ",
                "Solicitud para el calculo del Impuesto de sobre Publicidad y Propaganda  ",
                "Formato de la carta de autorización del representante legal. ",
            ]
        },
        {
            titulo: "Gerencia de Auditoria", datos: [
                "Formato para la carta de Inactividad Económica ",
                "Formato de carta de la relaciones de ingresos para la determinación de auditoria ",
            ]
        },
    ];

    const [selectedServicio, setSelectedServicio] = useState(null);

    const handleDownloadPDF = (titulo, texto) => {
        const doc = new jsPDF();
        doc.text(titulo, 10, 10);
        doc.text(texto, 10, 20);
        doc.save(`${titulo}.pdf`);
    };

    return (
        <section id='ServiciosContain'>
            <Bg titulo="SERVICIOS" />
            <div className="ServiciosContain">
                {servicios.map((servicio, index) => (
                    <div key={index} className="ServicioItem">
                        <h2
                            onClick={() =>
                                setSelectedServicio(selectedServicio === index ? null : index)
                            }
                            className="ServicioTitulo"
                        >
                            {servicio.titulo}
                        </h2>
                        {selectedServicio === index && (
                            <div className="ServicioDatos">
                                {servicio.datos.map((dato, idx) => (
                                    <div key={idx} className="ServicioDato">
                                        <p>{dato}</p>
                                        <button
                                            onClick={() => handleDownloadPDF(servicio.titulo, dato)}
                                        >
                                            Descargar
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
