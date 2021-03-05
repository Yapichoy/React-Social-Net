const ADD_POST = 'ADD_POST',
  UPDATE_POST_TEXT = 'UPDATE_POST_TEXT'
let store = {
  _state: {
    messagesPage: {
      dialogs : [
        {id: 1, name: 'Oleg'},
        {id: 2, name: 'Max'},
        {id: 3, name: 'Dimon'}
      ],

      messages : [
        {id: 1, name: 'Hello'},
        {id: 2, name: 'How are you?'},
        {id: 3, name: 'Maan'}
      ]
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
    switch (action.type) {
      case ADD_POST:
        let newPost = {
          id: 5,
          message: this._state.profilePage.newPostText,
          likesCount: 0
        }
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this.rerender(this._state);
        break;
      case UPDATE_POST_TEXT:
        this._state.profilePage.newPostText = action.text;
        this.rerender(this._state);
        break;
    }
  }
}

export default store;