import React from 'react';
import './Servicios.css';

export default function Servicios() {
    const servicios = [
        "Gerencia de Auditoria",
        "Gerencia de Fiscalización",
        "Gerencia de Recaudación"
    ];

    return (
        <div className="ServiciosContain">

            {servicios.map((servicio, index) => (
                <h2 key={index} className="ServiciosItem">
                    {servicio}
                </h2>
            ))}
        </div>
    );
}
