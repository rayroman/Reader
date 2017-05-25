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
    devServer: {
        inline: true,
        historyApiFallback: true,
        contentBase: "./build",
        port: 3000
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                // transpile only browser stuff
                include: path.join(__dirname, "app"),
                loader: "babel-loader",
                options: {
                    presets: ["react", "es2015"]
                }
            },
            {
                test: /\.scss$/,
                exclude: /(node_modules)/,
                use: [{
                    loader: "style-loader"
                },{
                    loader: "css-loader"
                },{
                    loader: "sass-loader"
                }]
            }
        ]
    }
};