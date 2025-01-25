import React from 'react';
import './Ordenanzas.css';
import Bg from '../Bg/Bg';
import image from '../../images/image.webp'
export default function Ordenanzas() {
    const ordenanzas = [
        { id: 1, texto: "ORDENANZA SOBRE AGENTES DE RETENCION DE IMPUESTOS SOBRE ACTIVIDADES ECONOMICAS (Gaceta Municipal N° 75 de fecha 31-12-2023)" },
        { id: 2, texto: "ORDENANZA SOBRE PUBLICIDAD COMERCIAL E INDUSTRIAL (Gaceta Municipal N° 182 de fecha 04-10-2012)" },
        { id: 3, texto: "ORDENANZA SOBRE ESPECTACULOS PUBLICOS (Gaceta Municipal N° 241 de fecha 31-10-2011)" },
        { id: 4, texto: "ORDENANZA SOBRE TASAS POR PRESTACION DE SERVICIOS ADMINISTRATIVOS (de fecha 05-06-2013)" },
        { id: 5, texto: "REFORMA DE INMUEBLES URBANOS (Gaceta Municipal N° 00 de fecha 31-12-2022)" },
        { id: 6, texto: "ORDENANZA SOBRE EL EXPENDIO COMERCIALIZACIÓN Y DISTRIBUCION DE ESPECIES ALCOHOLICAS (Gaceta Municipal N° 16 de fecha 03-10-2006)" },
        { id: 7, texto: "ORDENANZA DE ACTIVIDADES ECONOMICAS (de fecha 05-06-2013)" },
        { id: 8, texto: "ORDENANZA SOBRE PATENTE DE VEHICULOS (Gaceta Municipal N° 63 de fecha 12-04-2010)" },
        { id: 9, texto: "ORDENANDA SOBRE HACIENDA PUBLICA MUNICIPAL (Gaceta Municipal N° 00 de fecha 31-12-2022)" },
        { id: 10, texto: "ORDENANZA SOBRE JUEGOS Y APUESTAS LICITAS (Gaceta Municipal N° 194 de fecha 07-09-2011)" },
        { id: 11, texto: "ORDENANZA DEL SERVICIO DE ASEO URBANO, COMERCIAL E INDUSTRIAL (Gaceta Municipal N° 249 de fecha 21-09-2022)" },
    ];

    return (
        <section id='Ordenanzas'>
            <Bg titulo="ORDENANZAS" />
            <div className='Ordenanzas'>
                <div className='cardsOrdenanza'>
                    {ordenanzas.map((ordenanza) => (
                        <div className='cardOrdenanza'>
                            <div className='cardImg'>
                                <img src={image} alt="" />
                            </div>
                            <span key={ordenanza.id} className="OrdenanzaItem">
                                {ordenanza.texto}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
