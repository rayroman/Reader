/**
 * Created by rroman681 on 5/17/17.
 */
import {expect} from "chai";
import C from "../constants"
import {isTrad} from "../store/reducers";
import storeFactory from "../store/index";
import {query} from "../actions";
import sinon from "sinon";
import nock from "nock";

// Mock API for vocabulary retrieval
const vocabApi = nock("http://localhost:8080")
    .get("/api/vocab/以為")
    .reply(200, {
        "itemTrad" : "以為",
        "itemSimp" : "以为",
        "pinyin" : [ "yi3 wei2" ],
        "definitions" : [ "to believe", "to think", "to consider", "to be under the impression" ],
        "char" : [ "以", "為" ],
        "numbers" : {
            "lesson" : [ 27, 51 ],
            "heisig" : [ 796, 1385 ],
            "absolute" : [ 1358, 2666 ]
        },
        "stats" : {
            "read" : false,
            "timesSeen" : 0,
            "timesCorrect" : 0
        },
        "srs" : {
            "difficulty" : 0.3,
            "daysBetweenReviews" : 0
        },
        "showFirstAt" : {
            "lesson" : 51, "absolute" : 2666
        }
    });


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

describe("fetching characters", () => {
    // Mock API for character retrieval
    let store; // empty store
    const apiURL = nock("http://localhost:8080"),
        existsURL = apiURL
            .get("/api/char/一")
            .reply(200, {
                "charTrad": "一",
                "charSimp": "一",
                "lessonNumber": 1,
                "heisigNumber": 1,
                "absoluteNumber": 1,
                "keyword": "one",
                "pinyin": "yī"
            }),
        doesNotExistURL = apiURL
            .get("/api/char/a")
            .reply(404, {});


    beforeEach(() => {
        store = storeFactory();
    });

    // Testing fetching actions
    it("should successfully return", (done) => {
        fetch("http://localhost:8080/api/char/一")
            .then(res => res.json())
            .then(item => {
                expect(item.charTrad).to.equal("一");
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