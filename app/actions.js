/**
 * Created by rroman681 on 5/15/17.
 */
import C from "./constants";
import fetch from "isomorphic-fetch";

export const toggleChar = () => ({
    type: C.TOGGLE_TRADITIONAL
});

export const find = char => ({
    type: C.FIND_QUERY,
    payload: char
});

export const returnQuery = char => (dispatch, getState) => {
    dispatch(find(char));

    fetch(`http://localhost:8080/api/char/${char}`)
        .then(res => res.json())
        .then(charInfo => {
            dispatch(/*Todo*/)
        });
};