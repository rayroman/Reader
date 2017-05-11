/**
 * Created by rroman681 on 5/11/17.
 */
const MongoClient = require("mongodb").MongoClient,
    express = require("express"),
    url = "mongodb://localhost:27017/reader",
    routerWithDB = require("./apiRouter");

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

MongoClient.connect(url)
    .then(db => {
        app.use("/api", routerWithDB(db));
        console.log("Successfully connected to MongoDB server!");
        app.get("/", (req, res) => {
                res.send("Welcome!\n");
            });
        app.listen(8080, () => {
            console.log("Express server listening on port 8080!");
        })
    })
    .catch(err => {
        console.log(err.stack);
    });