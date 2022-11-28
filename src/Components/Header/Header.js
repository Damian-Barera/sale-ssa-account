import React from 'react';
import './Header.css';
import imagenHeader from './imagenHeader.jpg';

const Header = () => {

    return(
        <header className='header'>
            <img src={imagenHeader} alt='hyper-bright-aling' className='imagen-header' />
            <div className='header-text'>
                <h1> Saint Seiya Awakening Account Sale </h1>
            </div>
            <div className='div-ul-flex'>
                <ul className='ul-flex'>
                    <li><a href='#'>Main</a></li>
                    <li><a href='#'>FAQs</a></li>
                    <li><a href='#'>Acc Info</a></li>
                </ul>
            </div>
        </header>
    )
};

export { Header };