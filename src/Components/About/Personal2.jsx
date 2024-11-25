import React, { useState } from "react";
import personal3 from "../../images/personal3.png";
import personal4 from "../../images/personal4.png";

export default function Personal2() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="personal-container"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <h2 className="titleH2">Personal adscrito a la Gerencia Tributaria de Fiscalización
            </h2>
            {isHovered ? (
                <img src={personal4} alt="Personal 2" className="personal-image" />
            ) : (
                <img src={personal3} alt="Personal 1" className="personal-image" />
            )}
        </div>
    );
}
