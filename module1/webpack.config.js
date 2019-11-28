const path = require("path");
const webpack = require("webpack");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

const configFile = path.resolve(__dirname, "./tsconfig-web.json");

module.exports = {
    entry: "./src/index.ts",
    mode: "production",
    output: {
        filename: "index.js",
        path: path.join(__dirname, "dist"),
        library: "test"
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: "ts-loader",
                options: {
                    configFile,
                    projectReferences: true
                }
            }
        ]
    },
    resolve: {
        plugins: [
            new TsconfigPathsPlugin({
                configFile
            })
        ],
        extensions: [".tsx", ".ts", ".js"]
    },
    node: {
        fs: "empty"
    }
};
