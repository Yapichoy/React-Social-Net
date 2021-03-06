const ADD_MESSAGE = 'ADD_MESSAGE',
  UPDATE_MESSAGE_TEXT = 'UPDATE_MESSAGE_TEXT';
const initState = {
  dialogs: [
    {id: 1, name: 'Oleg'},
    {id: 2, name: 'Max'},
    {id: 3, name: 'Dimon'}
  ],

    messages: [
    {id: 1, message: 'Hello'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'Maan'}
  ],
    newMessageText: ''
};
const dialogReducer = (state = initState, action) => {
  let stateCopy;
  switch (action.type) {
    case UPDATE_MESSAGE_TEXT:
      stateCopy = {...state};
      stateCopy.newMessageText = action.message;
      return  stateCopy;
    case ADD_MESSAGE:
      let newMessage = {
        id: 5,
        message: state.newMessageText,
      }
      stateCopy = {...state};
      stateCopy.messages = [...state.messages];
      stateCopy.messages.push(newMessage);
      stateCopy.newMessageText = '';
      return stateCopy;
  }
  return state;
}
export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const updateMessageTextActionCreator = (message) => ({type: UPDATE_MESSAGE_TEXT, message});
export default dialogReducer;