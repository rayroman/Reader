/**
 * Created by rroman681 on 5/22/17.
 * Selectors to modify the stats based on how many times a character or vocabulary item has been viewed; best practice to put this kind of calcualtion logic inside a selector using the "reselect" library with Redux
 */

import {createSelector} from "reselect";

const getCurrentItem = coll => state => state.currentItem[`${coll}`];

// Getting the guesses; sent to store outside of this
const getGuess = state => state.guess;


// Return whether or not the guess was correct
export const getCorrect = coll => createSelector(
    [getCurrentItem(coll), getGuess],
    (item, guess) => {
        for (let p of item.pinyin) {
            if (guess.mostRecent === p) return true;
        }
        return false;
    }
);

