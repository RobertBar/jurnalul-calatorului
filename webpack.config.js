const path = require('path');

module.exports = {
    entry: "./src/assets/scripts/App.js",
    output: {
        path: path.resolve(__dirname, "src/temp/scripts"),
        filename: "App.js"
    },
    module: {
        rules: [
            {
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            }
        ]
    }
}  