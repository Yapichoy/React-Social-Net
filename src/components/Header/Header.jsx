import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = () => (
  <header className={s.header}>
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          <img src="https://mediaprocessor.websimages.com/fit/1920x1920/gutternation.webs.com/Gutter%20Logo2.png" alt=""/>
        </NavLink>
      </div>
    </nav>
  </header>
);

export default Header;