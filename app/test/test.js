/**
 * Created by rroman681 on 5/17/17.
 */
import {expect} from "chai";
import C from "../constants"
import {isTrad, currLesson} from "../store/reducers";
import storeFactory from "../store/index";
import {charQuery, vocabQuery, submitGuess} from "../actions";
import {getCorrect} from "../selectors";
import sinon from "sinon";
import nock from "nock";

// Testing on-click toggle between traditional and simplified characters
describe("toggling character", () => {
    let showTradState, action;
    beforeEach(() => {
        showTradState = true;
        action = {type: C.TOGGLE_TRADITIONAL};
    });

    describe("toggle once", () => {
        it("should return false when action dispatched", () => {
            const result = isTrad(showTradState, action);
            expect(result).to.equal(false);
        });
    });

    describe("toggle twice", () => {
        it("should return true when dispatched twice", () => {
            const firstStep = isTrad(showTradState, action);
            const result = isTrad(firstStep, action);
            expect(result).to.equal(true);
        });
    })
});

describe("character database", () => {
    // Mock API for character retrieval
    let store; // empty store
    const lifeChar = {
            item: {
                simplified: "命",
                traditional: "命"
            }
        },
        oneChar = {
            char: {
                item : {
                    simplified : "一",
                    traditional : "一"
                }
            }
        };

    let apiURL, existsURL, doesNotExistURL;


    beforeEach(() => {
        apiURL = nock("http://localhost:8080");
        existsURL = apiURL
                .get("/api/char/命")
                .reply(200, lifeChar);
        doesNotExistURL = apiURL
                .get("/api/char/a")
                .reply(404, {});
        store = storeFactory({
            currentItem: oneChar
        });
    });

    afterEach(() => {
        nock.cleanAll();
    });

    // Testing fetching actions
    describe("fetching actions", () => {
        it("should successfully return", (done) => {
            fetch("http://localhost:8080/api/char/命")
                .then(res => res.json())
                .then(res => {
                    const {item} = res;
                    expect(item.traditional).to.equal("命");
                    done();
                });
        });

        it("should unsuccessfully return", (done) => {
            fetch("http://localhost:8080/api/char/a")
                .then(res => {
                    expect(res.status).to.equal(404);
                    done();
                })
        });
    });

    describe("changing state", () => {
        // Successful change
        it("should change the current character", (done) => {
            store.dispatch(charQuery("命"))
                .then(() => {
                    const {item} = store.getState().currentItem.char;
                    expect(item.traditional).to.equal("命");
                    done();
                })
        });

        // unsuccessful change
        it("should return the exact same character upon unsuccessful fetch", (done) => {
            const charBefore = store.getState().currentItem.char.item.traditional;
            store.dispatch(charQuery("a"))
                .then(() => {
                    const currChar = store.getState().currentItem.char.item.traditional;
                    expect(currChar).to.equal(charBefore);
                    done();
                })
        });
    });
});

// Modifying the Heisig lesson
describe("changing lesson", () => {
    let lesson, action;
    beforeEach(() => {
        lesson = 1;
        action = {
            type: C.CHANGE_LESSON,
            payload: 3
        };
    });

    // Change to lesson 3
    it("should change the lesson from 1 to 3", () => {
        const result = currLesson(lesson, action);
        expect(result).to.equal(3);
    })
});

/*
 LARGE number of vocabulary items, so make learning about character readings instead of vocabulary
 Implying that document structure should change
 */

// Find appropriate vocabulary
// describe("vocabulary", () => {
//     const char1 = {
//         "charTrad" : "冰",
//         "stats" : { "read" : false, "timesSeen" : 0, "timesCorrect" : 0 },
//         "srs": { "difficulty" : 0.3, "daysBetweenReviews" : 0 },
//     }, char2 = {
//         "charTrad":"雹",
//         "stats":{"read":false, "timesSeen":0, "timesCorrect":0},
//         "srs":{ "difficulty":0.3, "daysBetweenReviews":0 }
//     };
//
//     const vocab = {
//         "itemTrad":"冰雹",
//         "itemSimp":"冰雹",
//         "stats":{ "read":false, "timesSeen":0, "timesCorrect":0 },
//     };
//
//     // Todo: flesh out the API calls
//     let apiURL, char1URL, char2URL, vocabTrueURL, vocabFalseURL, store;
//
//     beforeEach(() => {
//         // Mocking the calls
//         apiURL = nock("http://localhost:8080");
//         char1URL = apiURL
//             .get(`/api/char/${char1.charTrad}`)
//             .reply(200, char1);
//         char2URL = apiURL
//             .get(`/api/char/${char2.charTrad}`)
//             .reply(200, char2);
//         vocabTrueURL = apiURL
//             .get(`/api/vocab/${vocab.itemTrad}`)
//             .reply(200, vocab);
//         vocabFalseURL = apiURL
//             .get("/api/vocab/a")
//             .reply(404, {});
//
//         // Prepare the store with a current vocabulary item
//         store = storeFactory({
//             currVocab: {
//                 "itemTrad" : "如火",
//                 "itemSimp" : "如火",
//                 "stats" : {
//                     "read" : false,
//                     "timesSeen" : 0,
//                     "timesCorrect" : 0
//                 }
//             }
//         });
//     });
//
//     afterEach(() => {
//         nock.cleanAll();
//     });
//
//     describe("changing state", () => {
//         // Successful change
//         it("should change the current vocabulary item", (done) => {
//             store.dispatch(vocabQuery("冰雹"))
//                 .then(() => {
//                     expect(store.getState().currVocab.itemTrad).to.equal(vocab.itemTrad);
//                     done();
//                 });
//         });
//
//         // Unsuccessful change
//         it("should return the exact same character", (done) => {
//             const itemBefore = store.getState().currVocab.itemTrad;
//             store.dispatch(vocabQuery("a"))
//                 .then(() => {
//                     expect(store.getState().currVocab.itemTrad).to.equal(itemBefore);
//                     done();
//                 });
//         });
//     });
// });

// Testing guess selectors
describe("selectors", () => {
    let goodGuess, badGuess, store;
    beforeEach(() => {
        goodGuess = "yī";
        badGuess = "aaa";
        store = storeFactory({
            currentItem: {
                char: {
                    pinyin: ["yī"]
                }
            },
            guess: {
                mostRecent: "",
                isCorrect: null
            }
        });
    });

    // changing the guess
    describe("updating guess", () => {
        it("should update the guess to the most recently submitted item", () => {
            store.dispatch(submitGuess(goodGuess));
            expect(store.getState().guess.mostRecent).to.equal(goodGuess);
        });
    });

    // Processing the guess
    describe("processing guess", () => {
        it("should change the isCorrect field from null to true", () => {
            store.dispatch(submitGuess(goodGuess));
            const result = getCorrect("char")(store.getState());
            expect(result).to.equal(true);
        });
    });
});