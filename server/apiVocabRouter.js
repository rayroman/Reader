/**
 * Created by rroman681 on 5/20/17.
 * Primarily for code chunking: keep the API-level router stuff in a separate file.
 * Use for vocabulary API
 */
const express = require("express");
const router = express.Router();

const vocabRouterWithDB = db => {
    const vocabulary = db.collection("vocabulary");

    // Get a specific vocabulary item
    router.get("/vocabulary/:vocab", (req, res) => {
        const vocab = req.params.vocab;

        // Allow for both simplified and traditional, so can search either one
        vocabulary.find({$or: [
            {"item.traditional": vocab},
            {"item.simplified": vocab}
        ]})
            .toArray()
            .then(results => {
                results.length > 0 ?
                    res.status(200).json(results[0]) :
                    res.status(204).send("None found :(\n");
            });
    });
    return router;
};

module.exports = vocabRouterWithDB;