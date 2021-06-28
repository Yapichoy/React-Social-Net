import {addMessageActionCreator} from "../../redux/messageReducer.ts";
import React from "react";
import Dialogs from "./Dialogs.tsx";
import {connect} from "react-redux";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
  return {
    dialogs: state.messagesPage.dialogs,
    messages: state.messagesPage.messages
  }
}
export default compose(connect(mapStateToProps, {
  sendMessage: addMessageActionCreator
}), WithAuthRedirect)(Dialogs);