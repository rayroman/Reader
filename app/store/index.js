/**
 * Created by rroman681 on 5/15/17.
 */
import {createStore} from "redux";
import app from "./reducers";

export default (initialState = {}) => createStore(app, initialState);