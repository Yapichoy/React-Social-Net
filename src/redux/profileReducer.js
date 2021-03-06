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
  let stateCopy;
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0
      }
      stateCopy = {...state};
      stateCopy.posts = [...state.posts];
      stateCopy.posts.push(newPost);
      stateCopy.newPostText = '';
      return stateCopy;
    case UPDATE_POST_TEXT:
      stateCopy = {...state};
      stateCopy.newPostText = action.text;
      return stateCopy;
  }
  return state;
}
export const addPostActionCreator = () => ({type: ADD_POST});
export const updatePostTextActionCreator = (text) => ({type: UPDATE_POST_TEXT, text});
export default profileReducer;