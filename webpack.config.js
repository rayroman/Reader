/**
 * Created by rroman681 on 5/3/17.
 */
const path = require("path");

module.exports = {
    entry: "./app/components/App.js", // will change this after testing
    output: {
        filename: "bundle.js",
        path: "build"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                // transpile both browser components and server stuff
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