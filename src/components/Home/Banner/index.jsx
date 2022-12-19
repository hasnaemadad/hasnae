import React from 'react';
import './styles.css';
import bannerImg from './model.webp';
import Logo from '../../common/Logo';

const Banner = ({ handleScrollMenu }) => (
  <header>
    <div className='header-content'>
      <Logo />
      <div className='content-main'>
        <h1>LOVELY JEWELLERY FOR YOU</h1>
        <p> It's time to layer up. Let your light shine</p>
        <button onClick={handleScrollMenu}>
          View Product<i className='fas fa-long-arrow-alt-right'></i>
        </button>
      </div>
    </div>
    <img className='header-img' src={bannerImg} alt='banner' />
  </header>
);

export default Banner;
