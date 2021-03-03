import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

let dialogs = [
  {id: 1, name: 'Oleg'},
  {id: 2, name: 'Max'},
  {id: 3, name: 'Dimon'}
];

let messages = [
  {id: 1, name: 'Hello'},
  {id: 2, name: 'How are you?'},
  {id: 3, name: 'Maan'}
];
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
      { dialogs.map(item => (<DialogItem name={item.name} id={item.id}/>)) }
    </div>
    <div className={s.messages}>
      { messages.map(item => (<Message message={item.name}/>)) }
    </div>
  </div>
);

export default Dialogs;