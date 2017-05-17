/**
 * Created by rroman681 on 5/11/17.
 * Primarily for code chunking: keep the API-level router stuff in a separate file.
 */
const express = require("express");

const router = express.Router();

const routerWithDB = db => {
    const character = db.collection("character"),
        vocabulary = db.collection("vocabulary");

    // Get a specific character
    router.get("/char/:char", (req, res) => {
        const char = req.params.char;

        // Allow for both simplified and traditional, so can search either one
        character.find({$or: [{charTrad: char}, {charSimp: char}]})
            .toArray()
            .then(results => {
                results.length > 0 ?
                    res.status(200).json(results[0]) :
                    res.status(204).send("None found :(\n");
            });
    })
        //Delete character
        .delete("/char/:char", (req, res) => {
            const char = req.params.char;
            character.deleteMany({$or: [{charTrad: char}, {charSimp: char}]})
                .then(results => {
                    res.send(results);
                });
        })
        //Get all characters
        .get("/char", (req, res) => {
            character.find({})
                .toArray()
                .then(results => {
                    results.length > 0 ? res.send(results) : res.send("None found :(\n");
                })
        })
        // Insert a character
        .post("/char", (req, res) => {
            console.log(req.body);
            character.insertOne(req.body)
                .then(result => {
                    res.send(result);
                })
        });

    return router;
};

module.exports = routerWithDB;