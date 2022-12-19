import React from 'react';
import logo from './LOGO.jpg';
import './styles.css';

const Logo = () => (
  <div className='header-content_logo'>
    <div>
      <img src={logo} alt='logo' />
      <span>
        <b>JEWELLERY</b>
      </span>
    </div>
    <p>
      <b>Magic Touch Jewelry</b>
    </p>
  </div>
);

export default Logo;
