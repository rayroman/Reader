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

app.use(logRequest);