import React from 'react';
import './Footer.css';
import { Link as Anchor } from 'react-router-dom';
import logo from '../../images/logoFooter.png';
export default function Footer() {

    return (
        <div className='FooterContain'>
            <div className='footerText'>


            </div>
            <div className='footerText'>
                <img src={logo} alt="" />
            </div>
            <div className='footerText'>

            </div>

        </div>
    );
}
