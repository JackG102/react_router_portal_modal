import React from 'react';
import './Header.css';
import {
  Link
} from 'react-router-dom';

const Header = () => {
  return (
    <div className="header-container">
      <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/settings">Settings</Link>
            </li>
          </ul>
        </nav>
    </div>
  );
}

export default Header;