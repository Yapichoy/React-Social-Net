const ADD_MESSAGE = 'ADD_MESSAGE';
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
};
const dialogReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        messages: [...state.messages,{id: 5, message: action.message}]
      };
  }
  return state;
}
export const addMessageActionCreator = (message) => ({type: ADD_MESSAGE, message});
export default dialogReducer;