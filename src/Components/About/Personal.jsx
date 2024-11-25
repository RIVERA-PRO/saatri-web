import React, { useState } from "react";
import personal1 from "../../images/personal1.png";
import personal2 from "../../images/personal2.png";

export default function Personal() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="personal-container"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <h2 className="titleH2">Personal adscrito a la Gerencia Tributaria de Recaudación
            </h2>
            {isHovered ? (
                <img src={personal2} alt="Personal 2" className="personal-image" />
            ) : (
                <img src={personal1} alt="Personal 1" className="personal-image" />
            )}
        </div>
    );
}
