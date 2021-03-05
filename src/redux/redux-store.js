import {combineReducers, createStore} from "redux";
import dialogReducer from "./messageReducer";
import profileReducer from "./profileReducer";
let reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: dialogReducer
})
let storer = {
  _state: {
    messagesPage: {
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
      newMessageTest: ''
    },
    profilePage: {
      posts: [
        {id: 1, message: "Test", likesCount: 1},
        {id: 2, message: "Test test", likesCount: 2}
      ],
      newPostText: 'It Kamasutra'
    }
  },
}
let store = createStore(reducers);
export default store;