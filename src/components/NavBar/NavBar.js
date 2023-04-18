import React from 'react';
import './style.css';
import ACERlogo from './ACERlogo.svg';


function NavBar() {
    return (
        <div className="nav1">
<nav class="navbar navbar-expand-lg navbar-light bg-white">
                
                    <a class="navbar-brand" href="#">
                        <div className="ACERlogo">
                            <img src={ACERlogo} className="ACER-logo" alt="logo" />
                        </div>
                        <div className="service">
                            Online Service<br />
                            Test page
                        </div>
                    </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
    <li class="nav-item active">
                                <a class="nav-link" href="#">Overview</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">The Challenge</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Schools</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Results</a>
                            </li>
                        </ul>
                    </div>
               
            </nav>
            
        </div>
    )
}

export default NavBar