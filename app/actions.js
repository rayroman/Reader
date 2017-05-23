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

/***
 * Dispatch a query that depends on the collection you want.
 * @param coll - which collection you want to search (either character or vocabulary)
 */
const query = coll => item => (dispatch, getState) => {
    dispatch({
        type: C.FETCH_ITEM
    });

    return fetch(`http://localhost:8080/api/${coll}/${item}`)
        .then(res => {
            console.log(res);
            // Return if something is found
            return (res.status === 200) ?
                res.json() :
                // Return original state if not
                getState().currentItem[`${coll}`];
        })
        .then((itemInfo) => {
            dispatch(returnQuery(itemInfo));
            dispatch({
                type: C.CANCEL_FETCH
            })
        })
        .catch(err => console.log(err));
};

// Find in character collection
export const charQuery = query("char");

// Find in vocabulary collection
export const vocabQuery = query("vocab");