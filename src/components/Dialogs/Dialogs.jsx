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
const Dialogs = (props) => (
  <div className={s.dialogs}>
    <div className={s.dialogsItems}>
      { props.dialogs.map(item => (<DialogItem name={item.name} id={item.id}/>)) }
    </div>
    <div className={s.messages}>
      { props.messages.map(item => (<Message message={item.name}/>)) }
    </div>
  </div>
);

export default Dialogs;