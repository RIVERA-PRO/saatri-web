import React from 'react'
import './Demo.css'
import Footer from '../../Components/Footer/Footer'
import BtnWhatsapp from '../../Components/BtnWhatsapp/BtnWhatsapp'
import About from '../../Components/About/About';
import ButonScroll from '../../Components/ButonScroll/ButonScroll';
import Servicios from '../../Components/Servicios/Servicios';

export default function Demo() {
    return (
        <section className='demo'>

            <About />
            <Servicios />

            <Footer />
            <ButonScroll />
            <BtnWhatsapp />
        </section>
    )
}
