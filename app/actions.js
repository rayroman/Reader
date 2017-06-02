/**
 * Created by rroman681 on 5/15/17.
 */
import C from "./constants";
import fetch from "isomorphic-fetch";

// Switch from simplified to traditional and vice versa
export const toggleCharAction = () => ({
    type: C.TOGGLE_TRADITIONAL
});

// Return the results from the query
export const returnQuery = item => ({
    type: C.RETURN_ITEM,
    payload: item
});

// Switch between testing and studying mode
export const toggleTesting = () => ({
    type: C.TOGGLE_TESTING
});

// Submit a guess to be validated
export const submitGuessAction = guess => ({
    type: C.SUBMIT_GUESS,
    payload: guess
});

// Updating search results
export const searchResultAction = item => ({
    type: C.UPDATE_SEARCH_RESULT,
    payload: item
});

// Focus the form
export const focusFormAction = isFocused => ({
    type: C.UPDATE_FORM_FOCUS,
    payload: isFocused
});

/***
 * Dispatch a query that depends on the collection you want. This updates the search state
 * @param coll - which collection you want to search (either character or vocabulary)
 */
export const query = coll => item => (dispatch, getState) => {
    dispatch({
        type: C.FETCH_ITEM
    });

    return fetch(`http://localhost:8080/api/${coll}/${item}`)
        .then(res => {
            // Return if something is found
            return (res.status === 200) ?
                res.json() :
                // Return original state if not
                getState().search.result;
        })
        .then((itemInfo) => {
            dispatch(searchResultAction(itemInfo));
            dispatch({
                type: C.UPDATE_SEARCH_COLLECTION,
                payload: coll
            });
            dispatch({
                type: C.CANCEL_FETCH
            })
        })
        .catch(err => console.log(err));
};

/*
Not sure if I'll need these if I change this based on the checkbox...
// Find in character collection
export const queryCharacterAction = query("character");

// Find in vocabulary collection
export const queryVocabularyAction = query("vocabulary");
*/