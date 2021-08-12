import React from 'react';
import logo from '../../images/admec-logo.png';

const Navbar = () => {
    return (
        <>
            <header className="navheader center" sm={12} md={12}>
                <img className="headerLogo" src={logo} alt="logo"/>
            </header>
        </>
    );
}

export default Navbar;
