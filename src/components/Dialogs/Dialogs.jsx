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
      <ul className="vertical menu">
      {props.dialogs.map(item => (<li><DialogItem name={item.name} id={item.id}/></li>))}
      </ul>
    </div>
    <div className={s.messages}>
      <div>
        {props.messages.map(item => (<Message message={item.message}/>))}
      </div>
      <div>
        <textarea name="" id="" cols="30" rows="10" ref={messageRef} value={props.newMessageText} onChange={updateMessageText}></textarea>
        <button className='button success' onClick={sendMessage}>Send message</button>
      </div>

    </div>
  </div>
};

export default Dialogs;