/**
 * Created by rroman681 on 5/11/17.
 * Primarily for code chunking: keep the API-level router stuff in a separate file.
 * Use for character API
 */
const express = require("express");

const router = express.Router();

// Todo: Consolidate & compose the two API files
const charRouterWithDB = db => {
    const character = db.collection("character");

    // Get a specific character
    router.get("/character/:char", (req, res) => {
        const char = req.params.char;

        // Allow for both simplified and traditional, so can search either one
        character.find({$or: [
            {"item.traditional": char},
            {"item.simplified": char}
            ]})
            .toArray()
            .then(results => {
                results.length > 0 ?
                    res.status(200).json(results[0]) :
                    res.status(204).send("None found :(\n");
            });
    })
        //Delete character
        .delete("/character/:char", (req, res) => {
            const char = req.params.char;
            character.deleteMany({$or: [
                {"item.traditional": char},
                {"item.simplified": char}
            ]})
                .then(results => {
                    res.send(results);
                });
        })
        //Get all characters
        .get("/character", (req, res) => {
            character.find({})
                .toArray()
                .then(results => {
                    results.length > 0 ? res.send(results) : res.send("None found :(\n");
                })
        })
        // Insert a character
        .post("/character", (req, res) => {
            console.log(req.body);
            character.insertOne(req.body)
                .then(result => {
                    res.send(result);
                })
        });

    return router;
};

module.exports = charRouterWithDB;