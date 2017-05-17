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

// Full lifecycle query
export const query = char => (dispatch, getState) => {
    dispatch({
        type: C.FETCH_ITEM
    });

    fetch(`http://localhost:8080/api/char/${char}`)
        .then(res => res.json())
        .then(itemInfo => {
            dispatch(returnQuery(itemInfo));
            dispatcy({
                type: C.CANCEL_FETCH
            })
        });
};