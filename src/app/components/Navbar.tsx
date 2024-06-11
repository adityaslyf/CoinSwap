import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar: React.FC<{ onConnect: () => void }> = ({ onConnect }) => (
  <nav className="navbar navbar-expand-lg navbar-light bg-gray-700">
    <a className="navbar-brand text-3xl text-white bg-red-600 p-2 rounded-lg" href="#">My DEX Aggregator</a>
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <button id="login_button" className="btn btn-outline-primary my-2 my-sm-0" type="button" onClick={onConnect}>
          Sign in with MetaMask
        </button>
      </li>
    </ul>
  </nav>
);

export default Navbar;
