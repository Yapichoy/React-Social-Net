import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => (
  <div className={s.dialog}>
    <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
  </div>
);
const Message = (props) => (
  <div className={s.message}>{props.message}</div>
)
const Dialogs = () => (
  <div className={s.dialogs}>
    <div className={s.dialogsItems}>
      <DialogItem name="Oleg" id="1"/>
      <DialogItem name="Max" id="2"/>
      <DialogItem name="Dimon" id="3"/>
    </div>
    <div className={s.messages}>
      <Message message={"hello!"}/>
    </div>
  </div>
);

export default Dialogs;