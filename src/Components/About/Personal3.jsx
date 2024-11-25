import React, { useState } from "react";
import personal5 from "../../images/personal5.png";
import personal6 from "../../images/personal6.png";

export default function Personal3() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="personal-container"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <h2 className="titleH2">Personal adscrito a la Gerencia Tributaria de Auditoria
            </h2>
            {isHovered ? (
                <img src={personal6} alt="Personal 2" className="personal-image" />
            ) : (
                <img src={personal5} alt="Personal 1" className="personal-image" />
            )}
        </div>
    );
}
