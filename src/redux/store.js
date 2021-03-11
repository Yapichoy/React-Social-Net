import profileReducer from "./profileReducer.ts";
import dialogReducer from "./messageReducer.ts";

let store = {
  _state: {
    messagesPage: {
      dialogs : [
        {id: 1, name: 'Oleg'},
        {id: 2, name: 'Max'},
        {id: 3, name: 'Dimon'}
      ],

      messages : [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Maan'}
      ],
      newMessageTest: ''
    },
    profilePage: {
      posts : [
        {id: 1, message: "Test", likesCount: 1},
        {id: 2, message: "Test test", likesCount: 2}
      ],
      newPostText: 'It Kamasutra'
    }
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this.rerender = observer;
  },
  rerender : null,
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagesPage = dialogReducer(this._state.messagesPage, action);
    this.rerender(this._state);
  }
}
export default store;