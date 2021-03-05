const ADD_MESSAGE = 'ADD_MESSAGE',
  UPDATE_MESSAGE_TEXT = 'UPDATE_MESSAGE_TEXT';
const dialogReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_MESSAGE_TEXT:
      state.newMessageTest = action.message;
      break;
    case ADD_MESSAGE:
      let newMessage = {
        id: 5,
        message: state.newMessageTest,
      }
      state.messages.push(newMessage);
      state.newMessageTest = '';
      break;
  }
  return state;
}
export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const updateMessageTextActionCreator = (message) => ({type: UPDATE_MESSAGE_TEXT, message});
export default dialogReducer;