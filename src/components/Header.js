import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => (
  <div className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container">
      <Link to="/products" className="navbar-brand">
        React DOM & Routing
      </Link>
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <NavLink to="/products" className="nav-link" activeClassName="active">
            Products
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/add-product"
            className="nav-link"
            activeClassName="active"
          >
            Add Product
          </NavLink>
        </li>
      </ul>
    </div>
  </div>
);

export default Header;
