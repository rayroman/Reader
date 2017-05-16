/**
 * Created by rroman681 on 5/15/17.
 */
import C from "./constants";

export const toggleChar = (isTrad = true) => ({
    type: C.TOGGLE_TRADITIONAL,
    payload: isTrad
});