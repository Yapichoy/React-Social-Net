
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
  rerender : null,
  addPost(){
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likesCount: 0
    }
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = '';
    this.rerender(this._state);
  },
  updatePostText (text) {
    this._state.profilePage.newPostText = text;
    this.rerender(this._state);
  },
  subscribe(observer) {
    this.rerender = observer;
  }
}

export default store;