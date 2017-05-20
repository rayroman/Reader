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

/***
 * Dispatch a query that depends on the collection you want.
 * @param item - what item you want
 * @param coll - which collection you want to search (either character or vocabulary)
 */
export const query = (item, coll) => (dispatch, getState) => {
    dispatch({
        type: C.FETCH_ITEM
    });

    return fetch(`http://localhost:8080/api/${coll}/${item}`)
        .then(res => {
            // Return if something is found
            return (res.status === 200) ?
                res.json() :
                // Return original state if not
                getState()[`curr${coll.charAt(0).toUpperCase() + coll.slice(1)}`];
        })
        .then((itemInfo) => {
            dispatch(returnQuery(itemInfo));
            dispatch({
                type: C.CANCEL_FETCH
            })
        })
        .catch(err => console.log(err.stack));
};