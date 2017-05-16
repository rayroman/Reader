/**
 * Created by rroman681 on 5/15/17.
 */
import C from "../constants";
import {combineReducers} from "redux";

/***
 * Toggle between traditional and simplified representation of characters
 * @param state
 * @param action
 */
export const isTrad = (state = true, action) => {
    return (action.type === C.TOGGLE_TRADITIONAL) ?
        !state :
        state;
};

export default combineReducers({
    isTrad
});