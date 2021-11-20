import React from 'react';
import './Header.css';
import {
  BrowserRouter as Router,
  Link
} from 'react-router-dom';

const Header = () => {
  return (
    <div className="header-container">
      <h2>Header</h2>
      <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
    </div>
  );
}

export default Header;