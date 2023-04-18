import React from 'react';
import './style.css';
import ACERlogo from './ACERlogo.svg';

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-logo">
            <img src={ACERlogo} className="ACER-logo" alt="logo" />
        </div>
        <div className="copyright">
          © 2023 ACER
        </div>
      </div>

    </div>
  )
}

export default Footer