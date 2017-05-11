/**
 * Created by rroman681 on 5/11/17.
 * Primarily for code chunking: keep the API-level router stuff in a separate file.
 */
import express from "express";


const router = express.Router();

const routerWithDB = db => {
    const character = db.collection("character"),
        vocabulary = db.collection("vocabulary");
    
    router.get("/:char", (req, res) => {
        const char = req.params.char;

        // Allow for both simplified and traditional, so can search either one
        character.find({$or: [{charTrad: char}, {charSimp: char}]})
            .toArray()
            .then(results => {
                results ? res.send(results) : res.send("None found :(\n");
            });
    });
};