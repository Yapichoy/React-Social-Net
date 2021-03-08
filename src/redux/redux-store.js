import {combineReducers, createStore} from "redux";
import dialogReducer from "./messageReducer";
import profileReducer from "./profileReducer";
import userReducer from "./usersReducer";
import authReducer from "./authReducer";
let reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: dialogReducer,
  usersPage: userReducer,
  auth: authReducer
})
let store = createStore(reducers);
export default store;