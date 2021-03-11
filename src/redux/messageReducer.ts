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
type InitStateType = typeof initState;
const dialogReducer = (state = initState, action):InitStateType => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {id: 5, message: action.message}]
            };
    }
    return state;
}
type AddMessageType = {
    type: typeof ADD_MESSAGE,
    message: string
}
export const addMessageActionCreator = (message):AddMessageType => ({type: ADD_MESSAGE, message});
export default dialogReducer;