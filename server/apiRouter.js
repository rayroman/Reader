/**
 * Created by rroman681 on 5/11/17.
 * Primarily for code chunking: keep the API-level router stuff in a separate file.
 */
import express from "express";


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
                results ? res.send(results) : res.send("None found :(\n");
            });
    })
        //Get all characters
        .get("/char", (req, res) => {
            character.find({})
                .toArray()
                .then(results => {
                    res.send(results);
                })
        })
        // Insert a character
        .post("/char", (req, res) => {
            character.insertOne(req.body)
                .then(result => {
                    res(result);
                })
        })
};

export default routerWithDB;