import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {maxLength, required} from "../../utils/validators";
import {Button} from "antd";
import AddMessageForm from "./AddMessageForm.tsx";


const DialogItem = (props) => (
  <div className={s.dialog}>
    <NavLink className='nav-link' to={`/dialogs/${props.id}`}>{props.name}</NavLink>
  </div>
);
const Message = (props) => (
  <div className={s.message}>{props.message}</div>
)

const Dialogs = (props) => {
  const onSubmit = (formData) => {
    props.sendMessage(formData.message);
  }
  return <div className={s.dialogs}>
    <div className={s.dialogsItems}>
      <nav className="nav flex-column">
        {props.dialogs.map(item => (<DialogItem name={item.name} id={item.id}/>))}
      </nav>
    </div>
    <div className={s.messages}>
      <div>
        {props.messages.map(item => (<Message message={item.message}/>))}
      </div>
      <div>
        <AddMessageForm {...props} onSubmit={onSubmit}/>
      </div>

    </div>
  </div>
};

export default Dialogs;