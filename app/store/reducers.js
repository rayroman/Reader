/**
 * Created by rroman681 on 5/15/17.
 */
import C from "../constants";
import {combineReducers} from "redux";

// Toggle between traditional and simplified characters
export const isTrad = (state = true, action) => {
    return (action.type === C.TOGGLE_TRADITIONAL) ?
        !state :
        state;
};

// See if we're fetching anything from the API
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

// Was the guess correct?

// What is the current character?
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