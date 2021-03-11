import {applyMiddleware, combineReducers, createStore} from "redux";
import dialogReducer from "./messageReducer.ts";
import profileReducer from "./profileReducer.ts";
import userReducer from "./usersReducer.ts";
import authReducer from "./authReducer.ts";
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from "redux-form";
import appReducer from "./appReducer.ts";

let reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: dialogReducer,
  usersPage: userReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer

})
type ReducerType= typeof reducers;
export type AppStateType = ReturnType<ReducerType>;
let store = createStore(reducers, applyMiddleware(thunkMiddleware));
export default store;