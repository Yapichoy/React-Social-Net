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
    <nav className="nav flex-column">
      {nav.map((n => (<NavLink to={n.link} className={`${s.item} nav-link`} activeClassName={'active'}>{n.text}</NavLink>))) }
    </nav>
  </nav>
);

export default Navbar;