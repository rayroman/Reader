/**
 * Created by rroman681 on 5/3/17.
 */
const path = require("path");

module.exports = {
    entry: "./app/index.js", // will change this after testing
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, "build")
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                // transpile only browser stuff
                include: path.join(__dirname, "app"),
                use: [
                    {
                        loader: "babel-loader",
                        options: ["react", "es2015"]
                    }
                ]
            }
        ]
    }
};