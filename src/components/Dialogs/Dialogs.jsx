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
let sendMessage = () => {
  console.log(messageRef.current.value);
}
const Dialogs = (props) => (
  <div className={s.dialogs}>
    <div className={s.dialogsItems}>
      { props.state.dialogs.map(item => (<DialogItem name={item.name} id={item.id}/>)) }
    </div>
    <div className={s.messages}>
      <div>
        { props.state.messages.map(item => (<Message message={item.name}/>)) }
      </div>
      <div>
        <textarea name="" id="" cols="30" rows="10" ref={messageRef}></textarea>
        <button onClick={sendMessage}>Send message</button>
      </div>

    </div>
  </div>
);

export default Dialogs;