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
  switch (action.type) {
    case UPDATE_MESSAGE_TEXT:
      return {...state, newMessageText: action.message};
    case ADD_MESSAGE:
      return {
        ...state,
        newMessageText: '',
        messages: [...state.messages,{id: 5, message: state.newMessageText}]
      };
  }
  return state;
}
export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const updateMessageTextActionCreator = (message) => ({type: UPDATE_MESSAGE_TEXT, message});
export default dialogReducer;