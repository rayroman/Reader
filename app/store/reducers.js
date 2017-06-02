/**
 * Created by rroman681 on 5/15/17.
 */
import C from "../constants";
import {combineReducers} from "redux";

// Toggle between traditional and simplified characters
export const doToggleTrad = (state = true, action) => {
    return (action.type === C.TOGGLE_TRADITIONAL) ?
        !state :
        state;
};

// Toggle the search UI
export const doToggleUICollection = (state = true, action) => {
    return (action.type === C.TOGGLE_COLLECTION) ?
        !state :
        state;
};

// See if we're fetching anything from the API
export const doFetch = (state = false, action) => {
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
export const doUpdateSearchResult = (state = {}, action) => {
    return (action.type === C.UPDATE_SEARCH_RESULT) ?
        action.payload :
        state
};

export const doUpdateSearchCollection = (state = "character", action) => {
    return (action.type === C.UPDATE_SEARCH_COLLECTION) ?
        action.payload :
        state
};

export const doFocusSearch = (state = false, action) => {
    return (action.type === C.UPDATE_FORM_FOCUS) ?
        action.payload :
        state
};

// What is the current TESTING character?
export const showCurrentItem = coll => (state = {}, action) => {
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
        showTraditional: doToggleTrad,
        isFetching: doFetch,
        isSearchFocused: doFocusSearch,
        isCharacterCollection: doToggleUICollection
    }),
    guess: combineReducers({
        mostRecent: updateGuess,
        isCorrect: validateGuess
    }),
    search: combineReducers({
        collection: doUpdateSearchCollection,
        result: doUpdateSearchResult
    }),
    currentItem: combineReducers({
        char: showCurrentItem("character"),
        vocab: showCurrentItem("vocabulary")
    })
});