import {applyMiddleware, combineReducers, createStore} from "redux";
import dialogReducer from "./messageReducer";
import profileReducer from "./profileReducer";
import userReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from "redux-form";

let reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: dialogReducer,
  usersPage: userReducer,
  auth: authReducer,
  form: formReducer
})
let store = createStore(reducers, applyMiddleware(thunkMiddleware));
export default store;