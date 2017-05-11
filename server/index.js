/**
 * Created by rroman681 on 5/11/17.
 */
const MongoClient = require("mongodb").MongoClient,
    express = require("express"),
    url = "mongodb://localhost:27017/reader";

const app = express();

/***
 * Logs the method and URL
 * @param req
 * @param res
 * @param next
 */
const logRequest = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
};

/**
 * Supplies middleware with whatever mongodb database
 * @param db
 */
const routesWithCollection = db => {
    app.use(logRequest);

    app.get("/", (req, res) => {
        res.send("Hello world!\n");
    }).listen(8080, () => {
        console.log("Listening on port 8080!");
    });
};