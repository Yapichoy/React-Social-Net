import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogs = () => (
  <div className={s.dialogs}>
    <div className={s.dialogsItems}>
      <NavLink to="/" className={s.dialog}>name1</NavLink>
      <NavLink to="/" className={s.dialog}>name2</NavLink>
      <NavLink to="/" className={s.dialog}>name3</NavLink>
      <NavLink to="/" className={s.dialog}>name4</NavLink>
      <NavLink to="/" className={s.dialog}>name5</NavLink>
    </div>
    <div className={s.messages}>
      <div className={s.message}>hello</div>
    </div>
  </div>
);

export default Dialogs;