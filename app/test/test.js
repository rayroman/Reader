/**
 * Created by rroman681 on 5/17/17.
 */
import {expect} from "chai";
import C from "../constants"
import {isTrad} from "../store/reducers";
const sinon = require("sinon");

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