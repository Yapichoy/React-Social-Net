import React from 'react';
import s from './Header.module.css';

const Header = () => (
  <header className={s.header}>
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="dropdown menu" data-dropdown-menu>
          <li className="menu-text"><img src="https://mediaprocessor.websimages.com/fit/1920x1920/gutternation.webs.com/Gutter%20Logo2.png" alt=""/></li>
        </ul>
      </div>
    </div>
  </header>
);

export default Header;