module.exports = {
    entry: "./src/index.js",
    mode: "development",
    module: {
        rules: [
        {
            test: /\.(js)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
        }
        ]
    },
    resolve: {
        extensions: ['*', '.js']
    },
    output: {
        path: __dirname + "/dist",
        publicPath: "/",
        filename: "bundle.js"
    },
    devServer: {
        contentBase: "./dist",
    },
    externals: {
        "fs":'require("fs")',
    },
    target: "electron-main"
};