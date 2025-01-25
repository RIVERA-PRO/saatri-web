import React from "react";
import gerencia1 from "../../images/gerencia1.png";
import gerencia2 from "../../images/gerencia2.png";
import gerencia3 from "../../images/gerencia3.png";
import gerencia4 from "../../images/gerencia4.png";
import gerencia5 from "../../images/gerencia5.png";
import gerencia6 from "../../images/gerencia6.png";

export default function Gerencia() {
    const gerencias = [
        { id: 1, image: gerencia1, name: "Lcda. Betania Yusti", tipo: "Gerente de Administración" },
        { id: 2, image: gerencia2, name: "Abg. Juan Zapata", tipo: "Gerente Jurídico" },
        { id: 3, image: gerencia3, name: "Abg. Jorge Mendoza", tipo: "Gerente de Recursos Humanos" },
        { id: 4, image: gerencia4, name: "Tsu. Alejandra Acevedo", tipo: "Gerente de Recaudación" },
        { id: 5, image: gerencia5, name: "Tsu. Armando Sánchez", tipo: "Gerente de Fiscalización" },
        { id: 6, image: gerencia6, name: "Lcda. María Campos", tipo: "Gerente de Auditoria" },
    ];

    return (
        <div className="gerencias">
            <h2 className="titleH2">Gerencia del SAATRI</h2>
            <div className="gerenciasGrap">
                {gerencias.map((gerencia) => (
                    <div key={gerencia.id} className="gerencia-card">
                        <img src={gerencia.image} alt={gerencia.name} className="gerencia-image" />
                        <span>{gerencia.name}</span>
                        {/* Dividir el texto en dos líneas */}
                        <p>
                            {gerencia.tipo}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
