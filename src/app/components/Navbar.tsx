import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar: React.FC = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="#">My DEX Aggregator</a>
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <button id="login_button" className="btn btn-outline-primary my-2 my-sm-0" type="submit">Sign in with MetaMask</button>
      </li>
    </ul>
  </nav>
);

export default Navbar;
