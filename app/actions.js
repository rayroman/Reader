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

// Full lifecycle query
export const query = char => (dispatch, getState) => {
    dispatch({
        type: C.FETCH_ITEM
    });

    fetch(`http://localhost:8080/api/char/${char}`)
        .then(res => {
            // Return if something is found
            return (res.status === 200) ?
                res.json() :
                // Return original state if not
                getState().currChar;
        })
        .then((itemInfo) => {
            dispatch(returnQuery(itemInfo));
            dispatch({
                type: C.CANCEL_FETCH
            })
        });
};