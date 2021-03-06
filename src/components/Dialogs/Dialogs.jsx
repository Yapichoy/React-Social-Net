import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => (
  <div className={s.dialog}>
    <NavLink className='nav-link' to={`/dialogs/${props.id}`}>{props.name}</NavLink>
  </div>
);
const Message = (props) => (
  <div className={s.message}>{props.message}</div>
)
let messageRef = React.createRef();

const Dialogs = (props) => {
  let sendMessage = () => {
    props.sendMessage();
  }
  let updateMessageText = () => {
    props.updateMessageText(messageRef.current.value);
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
        <textarea className="form-control" name="" id="" rows="3" ref={messageRef} value={props.newMessageText} onChange={updateMessageText}></textarea>
        <button className='btn btn-primary' onClick={sendMessage}>Send message</button>
      </div>

    </div>
  </div>
};

export default Dialogs;