let rerender = null;
let state = {
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
}
export let addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0
  }
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  rerender(state);
}
export let updatePostText = (text) => {
  state.profilePage.newPostText = text;
  rerender(state);
}
export const subscribe = (observer) => {
  rerender = observer;
}
export default state;