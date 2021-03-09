import {addMessageActionCreator, updateMessageTextActionCreator} from "../../redux/messageReducer";
import React from "react";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
  return {
    newMessageText: state.messagesPage.newMessageText,
    dialogs: state.messagesPage.dialogs,
    messages: state.messagesPage.messages
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {
      dispatch(addMessageActionCreator());
    },
    updateMessageText: (message) => {
      dispatch(updateMessageTextActionCreator(message));
    }
  }
}

export default compose(connect(mapStateToProps, mapDispatchToProps), WithAuthRedirect)(Dialogs);