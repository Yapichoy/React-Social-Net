import React from 'react';
import s from './Navbar.module.css';

const Navbar = () => (
  <nav className={s.nav}>
    <div>
      <a className={`${s.item} ${s.active}`}>Profile</a>
    </div>
    <div>
      <a className={s.item}>Message</a>
    </div>
    <div>
      <a className={s.item}>News</a>
    </div>
    <div>
      <a className={s.item}>Music</a>
    </div>
    <div>
      <a className={s.item}>Settings</a>
    </div>
  </nav>
);

export default Navbar;