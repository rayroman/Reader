/**
 * Created by rroman681 on 5/17/17.
 */
import {expect} from "chai";
import C from "../constants"
import {isTrad, currLesson} from "../store/reducers";
import storeFactory from "../store/index";
import {query} from "../actions";
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
        "charTrad" : "命",
        "charSimp" : "命",
        "lessonNumber" : 36,
        "heisigNumber" : 1045,
        "absoluteNumber" : 1901,
        "keyword" : "fate",
        "pinyin" : "mìng",
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
            currChar: {
                "charTrad": "一",
                "charSimp": "一",
                "lessonNumber": 1,
                "heisigNumber": 1,
                "absoluteNumber": 1,
                "keyword": "one",
                "pinyin": "yī"
            }
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
                .then(item => {
                    expect(item.charTrad).to.equal("命");
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
            store.dispatch(query("命", "char"))
                .then(() => {
                    expect(store.getState().currChar.charTrad).to.equal("命");
                    done();
                })
        });

        // unsuccessful change
        it("should return the exact same character upon unsuccessful fetch", (done) => {
            const charBefore = store.getState().currChar.charTrad;
            store.dispatch(query("a", "char"))
                .then(() => {
                    expect(store.getState().currChar.charTrad).to.equal(charBefore);
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
describe("vocabulary", () => {
    const char1 = {
        "charTrad" : "冰",
        "stats" : { "read" : false, "timesSeen" : 0, "timesCorrect" : 0 },
        "srs": { "difficulty" : 0.3, "daysBetweenReviews" : 0 },
    }, char2 = {
        "charTrad":"雹",
        "stats":{"read":false, "timesSeen":0, "timesCorrect":0},
        "srs":{ "difficulty":0.3, "daysBetweenReviews":0 }
    };

    const vocab = {
        "itemTrad":"冰雹",
        "itemSimp":"冰雹",
        "stats":{ "read":false, "timesSeen":0, "timesCorrect":0 },
    };

    // Todo: flesh out the API calls
    let apiURL, char1URL, char2URL, vocabTrueURL, vocabFalseURL, store;

    beforeEach(() => {
        // Mocking the calls
        apiURL = nock("http://localhost:8080");
        char1URL = apiURL
            .get(`/api/char/${char1.charTrad}`)
            .reply(200, char1);
        char2URL = apiURL
            .get(`/api/char/${char2.charTrad}`)
            .reply(200, char2);
        vocabTrueURL = apiURL
            .get(`/api/vocab/${vocab.itemTrad}`)
            .reply(200, vocab);
        vocabFalseURL = apiURL
            .get("/api/vocab/a")
            .reply(404, {});

        // Prepare the store with a current vocabulary item
        store = storeFactory({
            currVocab: {
                "itemTrad" : "如火",
                "itemSimp" : "如火",
                "stats" : {
                    "read" : false,
                    "timesSeen" : 0,
                    "timesCorrect" : 0
                }
            }
        });
    });

    afterEach(() => {
        nock.cleanAll();
    });

    describe("changing state", () => {
        // Successful change
        it("should change the current vocabulary item", (done) => {
            store.dispatch(query("冰雹", "vocab"))
                .then(() => {
                    expect(store.getState().currVocab.itemTrad).to.equal(vocab.itemTrad);
                    done();
                });
        });

        // Unsuccessful change
        it("should return the exact same character", (done) => {
            const itemBefore = store.getState().currVocab.itemTrad;
            store.dispatch(query("a", "vocab"))
                .then(() => {
                    expect(store.getState().currVocab.itemTrad).to.equal(itemBefore);
                    done();
                });
        });
    });
});