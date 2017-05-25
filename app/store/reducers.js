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
export const currLesson = (state = 1, action) => {
    return (action.type === C.CHANGE_LESSON) ?
        action.payload :
        state;
};

// Handling the guesses
export const updateGuess = (state = "", action) => {
    return (action.type === C.SUBMIT_GUESS) ?
        action.payload :
        state;
};

export const validateGuess = (state = null, action) => {
    return (action.type === C.VALIDATE_GUESS) ?
        action.payload :
        state
};

// Handling the searches
export const updateSearchResult = (state = {}, action) => {
    return (action.type === C.UPDATE_SEARCH_RESULT) ?
        action.payload :
        state
};

export const updateSearchCollection = (state = "character", action) => {
    return (action.type === C.UPDATE_SEARCH_COLLECTION) ?
        action.payload :
        state
};

export const focusGuessForm = (state = false, action) => {
    return (action.type === C.UPDATE_FORM_FOCUS) ?
        action.payload :
        state
};

// What is the current TESTING character?
export const currItem = coll => (state = {}, action) => {
    switch(action.type) {
        case C.CLEAR_ITEM:
            return state;
        case C.RETURN_ITEM:
            return Object.assign({}, action.payload, {collection: coll});

        default:
            return state;
    }
};

export default combineReducers({
    ui: combineReducers({
        showTraditional: isTrad,
        isFetching: fetching
    }),
    guess: combineReducers({
        mostRecent: updateGuess,
        isCorrect: validateGuess
    }),
    search: combineReducers({
        collection: updateSearchCollection,
        item: updateSearchResult,
        isFocused: focusGuessForm
    }),
    currentItem: combineReducers({
        char: currItem("character"),
        vocab: currItem("vocabulary")
    })
});