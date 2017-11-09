const path = require('path');

module.exports = {
    entry: {
        App: "./src/assets/scripts/App.js",
        Vendor: "./src/assets/scripts/Vendor.js"
    },
    output: {
        path: path.resolve(__dirname, "src/temp/scripts"),
        filename: "[name].js"
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