import React from 'react'
import './About.css'
import logo from '../../images/logo.png'
import img1 from '../../images/1.png'
import img2 from '../../images/2.png'
import img3 from '../../images/3.png'
import Organigrama1 from './Organigrama1'
import Gerencia from './Gerencia'
import Personal from './Personal'
import Personal2 from './Personal2'
import Personal3 from './Personal3'
import Bg from '../Bg/Bg';
export default function About() {
    return (
        <section id='aboutContain'>
            <Bg titulo="¿QUIENES SOMOS?" />
            <div className='aboutContain'>
                <div className='aboutText'>
                    <img src={logo} alt="imagen" className='imgSec' />

                    <div className='aboutColumn'>
                        <p>
                            El Servicio Autónomo de Administración Tributaria del Municipio Tinaquillo SAATRI es un servicio sin personalidad jurídica, dispone de autonomía técnica, funcional y financiera y su máxima autoridad es de libre nombramiento y remoción del Alcalde o Alcaldesa del Municipio Falcón.

                        </p>
                    </div>
                </div>

                <div className='aboutText'>
                    <div className='aboutColumn'>
                        <h2>Visión</h2>
                        <p>
                            Transformar al Municipio Autónomo Tinaquillo en el modelo venezolano de cultura tributaria, en los contribuyentes del municipio mediante la creación, puesto en marcha y aplicación efectiva de la legislación tributaria municipal vigente.

                        </p>
                    </div>
                    <img src={img1} alt="imagen" className='imgSec' />
                </div>

                <div className='aboutText'>
                    <div className='aboutColumn'>
                        <h2>Misión</h2>
                        <p>
                            Implementar, reordenar y administrar el sistema tributario en el Municipio Autónomo Tinaquillo del Estado Cojedes, en un marco de transparencia, legalidad, justicia social y respeto al contribuyente y usuario; a través de políticas y acciones específicamente basadas en una sólida plataforma, tecnológica, para lograr los niveles óptimos de recaudación tributaria que genere los recursos financieros para la eficiente presentación de los servicios públicos.

                        </p>
                    </div>
                    <img src={img2} alt="imagen" className='imgSec' />
                </div>

                <div className='aboutText'>
                    <img src={img3} alt="imagen" className='imgSec' />
                    <div className='aboutColumn'>
                        <h3>Superintendente: Alirio Rafael Martínez
                        </h3>
                        <p>
                            Designado Superintendente del Servicio Autónomo de Administración Tributaria (SAATRI) según Resolución Nª 131/2021, de fecha 03 de Diciembre del año 2021 Publicada en Gaceta Municipal Número Extraordinario 281, en fecha 03 de Diciembre del año 2021, oriundo del Municipio Tinaquillo y destacado profesional en el área de la educación con experiencia en el sector público, se ha desempeñado en cargos como profesor, director de centro educativo y jefe de despacho del Alcalde del Municipio Tinaquillo Estado Cojedes.

                        </p>
                    </div>
                </div>

                <Organigrama1 />
                <Gerencia />
                <Personal />
                <Personal2 />
                <Personal3 />
            </div>
        </section>
    )
}
