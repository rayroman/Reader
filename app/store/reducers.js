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

export const fetching = (state = false, action) => {
    switch(action.type) {
        case C.FETCH_ITEM:
            return true;
        case C.CANCEL_FETCH:
            return false;

        default:
            return state;
    }
};

export const currLesson = (state = 1, action) => {
    return (action.type === C.CHANGE_LESSON) ?
        action.payload :
        state;
};

export const currChar = (state = {}, action) => {
    switch(action.type) {
        case C.CLEAR_ITEM:
            return state;
        case C.RETURN_ITEM:
            return action.payload;

        default:
            return state;
    }
};

export default combineReducers({
    isTrad,
    fetching,
    currChar
});