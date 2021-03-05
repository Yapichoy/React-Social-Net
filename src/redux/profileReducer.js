const ADD_POST = 'ADD_POST',
  UPDATE_POST_TEXT = 'UPDATE_POST_TEXT';
const initState =  {
  posts : [
    {id: 1, message: "Test", likesCount: 1},
    {id: 2, message: "Test test", likesCount: 2}
  ],
    newPostText: 'It Kamasutra'
}
const profileReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0
      }
      state.posts.push(newPost);
      state.newPostText = '';
      break;
    case UPDATE_POST_TEXT:
      state.newPostText = action.text;
      break;
  }
  return state;
}
export const addPostActionCreator = () => ({type: ADD_POST});
export const updatePostTextActionCreator = (text) => ({type: UPDATE_POST_TEXT, text});
export default profileReducer;