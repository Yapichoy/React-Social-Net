import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => (
  <nav className={s.nav}>
    <div>
      <NavLink to="/profile" className={s.item} activeClassName={s.active}>Profile</NavLink>
    </div>
    <div>
      <NavLink to="/dialogs" className={s.item} activeClassName={s.active}>Message</NavLink>
    </div>
    <div>
      <NavLink to="/" className={s.item} activeClassName={s.active}>News</NavLink>
    </div>
    <div>
      <NavLink to="/" className={s.item} activeClassName={s.active}>Music</NavLink>
    </div>
    <div>
      <NavLink to="/" className={s.item} activeClassName={s.active}>Settings</NavLink>
    </div>
  </nav>
);

export default Navbar;