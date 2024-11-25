import React, { useEffect, useState, useRef } from 'react';
import Modal from 'react-modal';
import { Link as Anchor } from 'react-router-dom';
import logo from '../../images/logo1.png';
import 'swiper/swiper-bundle.css';
import Profile from '../Profile/Profile'
import './Navbar.css'
import contactData from '../contact';
import { useMediaQuery } from '@react-hook/media-query';
export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const isScreenLarge = useMediaQuery('(min-width: 900px)');
    const contact = contactData[0];
    return (
        <header>
            <div className='headerNav'>
                <div className='socials'>
                    <Anchor to={contact.instagram} target="_blank"><i className='fa fa-instagram'></i></Anchor>
                    <Anchor to={contact.linkedin} target="_blank"><i className='fa fa-linkedin'></i></Anchor>
                    <Anchor to={contact.facebook} target="_blank"><i className='fa fa-facebook'></i></Anchor>
                    <Anchor to={contact.twitter} target="_blank"><i className='fa fa-twitter'></i></Anchor>
                    <Anchor to='/login' ><i className='fa fa-user'></i> Iniciar Sesion</Anchor>

                </div>
            </div>
            <nav>


                <Anchor to={`/`} className='logo'>

                    {isScreenLarge ? (
                        <img src={logo} alt="logo" />
                    ) : (
                        <img src={logo} alt="logo" />
                    )}
                </Anchor>

                <div className='deFLexNavs'>

                    <div className='enlaces'>
                        <Anchor to={`/`} onClick={() => {
                            document.querySelector('.heroContain').scrollIntoView({ behavior: 'smooth' });
                        }}>Inicio</Anchor>

                        <Anchor to={`/`} onClick={() => {
                            document.querySelector('.aboutContain').scrollIntoView({ behavior: 'smooth' });
                        }}>Quienes Somos</Anchor>
                        <Anchor to={`/`} onClick={() => {
                            document.querySelector('.ServiciosContain').scrollIntoView({ behavior: 'smooth' });
                        }}>Servicios</Anchor>
                        <Anchor to={`/`} onClick={() => {
                            document.querySelector('.Contact').scrollIntoView({ behavior: 'smooth' });
                        }}>Ordenanzas</Anchor>
                    </div>

                    <div className={`nav_toggle  ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>


                <Modal
                    isOpen={isOpen}
                    onRequestClose={() => setIsOpen(false)}
                    className="modalNav"
                    overlayClassName="overlay"
                >
                    <div className="modalNav-content">
                        <Profile />
                    </div>
                </Modal>


            </nav>
        </header>
    );
}
