import {addMessageActionCreator, updateMessageTextActionCreator} from "../../redux/messageReducer";
import React from "react";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
  let sendMessage = () => {
    props.store.dispatch(addMessageActionCreator());
  }
  let updateMessageText = (message) => {
    props.store.dispatch(updateMessageTextActionCreator(message));
  }
  return (<Dialogs
    sendMessage={sendMessage}
    newMessageText={props.store.getState().messagesPage.newMessageText}
    updateMessageText={updateMessageText}
    dialogs={props.store.getState().messagesPage.dialogs}
    messages={props.store.getState().messagesPage.messages}
  />)
};

export default DialogsContainer;