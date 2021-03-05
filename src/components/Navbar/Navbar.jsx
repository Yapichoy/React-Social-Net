import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const nav = [
  {id: 1, link: '/profile', text:'Profile'},
  {id: 2, link: '/dialogs', text:'Message'},
  {id: 3, link: '/', text:'News'},
  {id: 4, link: '/', text:'Music'},
  {id: 5, link: '/', text:'Settings'}
]
const Navbar = () => (
  <nav className={s.nav}>
    <ul className="vertical menu">
      {nav.map((n => (<li><NavLink to={n.link} className={s.item} activeClassName={s.active}>{n.text}</NavLink></li>))) }
    </ul>
  </nav>
);

export default Navbar;