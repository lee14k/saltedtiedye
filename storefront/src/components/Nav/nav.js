import React from 'react';
import {Link} from 'react-router-dom';
import './nav.css';

function Nav() {
  return (
    <div className="Nav">
      <ul>
        <Link to="/">
          <li>
            Home
          </li>
        </Link>

        <Link to="/contact">
          <li>
            Contact
          </li>
        </Link>

        <Link to="/allproducts">
          <li>
            About
          </li>
        </Link>

        <Link to="/shirts">
          <li>
            Shirts
          </li>
        </Link>

        <Link to="/hoodies">
          <li>
            Hoodies
          </li>
        </Link>

        <Link to="/cart">
          <li>
            Cart
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default Nav;
