/**
 * Created by rroman681 on 5/15/17.
 */
import C from "./constants";
import fetch from "isomorphic-fetch";

// Switch from simplified to traditional and vice versa
export const toggleChar = () => ({
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
export const submitGuess = guess => ({
    type: C.SUBMIT_GUESS,
    payload: guess
});

// Updating search results
export const searchResult = item => ({
    type: C.UPDATE_SEARCH_RESULT,
    payload: item
});

/***
 * Dispatch a query that depends on the collection you want. This updates the search state
 * @param coll - which collection you want to search (either character or vocabulary)
 */
const query = coll => item => (dispatch, getState) => {
    dispatch({
        type: C.FETCH_ITEM
    });

    return fetch(`http://localhost:8080/api/${coll}/${item}`)
        .then(res => {
            // Return if something is found
            return (res.status === 200) ?
                res.json() :
                // Return original state if not
                getState().search.item;
        })
        .then((itemInfo) => {
            console.log("item: ", itemInfo);
            console.log("state: ", getState());
            dispatch(searchResult(itemInfo));
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

// Find in character collection
export const charQuery = query("character");

// Find in vocabulary collection
export const vocabQuery = query("vocabulary");