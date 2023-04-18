import React from 'react';
import ACERlogo from '../ACERlogo.svg';


function NavBar() {
  return (
    <div className="nav1">
        <nav class="navbar navbar-expand-lg bg-white">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <div style={{"float":"left", "padding": "33px 10px 32px 0"}}>
                    <img src={ACERlogo} className="ACER-logo" alt="logo" />
                </div>
                <div style={{"float":"left", "padding": "33px 0 32px 0px", "fontSize": "13px"}}>
                    Online Service<br/>
                    Test page
                </div>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                    <a class="nav-link active" href="#">Overview</a>
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
        </div>
        </nav>





    </div>
  )
}

export default NavBar