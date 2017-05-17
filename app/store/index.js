/**
 * Created by rroman681 on 5/15/17.
 */
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import app from "./reducers";

export default (initialState = {}) => applyMiddleware(thunk)(createStore)(app, initialState);