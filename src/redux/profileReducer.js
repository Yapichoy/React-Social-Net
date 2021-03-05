const ADD_POST = 'ADD_POST',
  UPDATE_POST_TEXT = 'UPDATE_POST_TEXT';
const profileReducer = (state, action) => {
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