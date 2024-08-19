import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTags, faCompass, faUser } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <img
          src="images/plane-window-svgrepo-com.svg"
          alt="Plane icon"
          className="plane-icon"
        />
        <h1 className="site-title">PLANE SCAPE</h1>
      </div>
      <div className="header-right">
        <div className="nav-item">
          <FontAwesomeIcon icon={faTags} className="nav-icon" />
          <span>Deals</span>
        </div>
        <div className="nav-item">
          <FontAwesomeIcon icon={faCompass} className="nav-icon" />
          <span>Discover</span>
        </div>
        <div className="profile">
          <FontAwesomeIcon icon={faUser} className="nav-icon" />
          <span>Joane Smith</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
