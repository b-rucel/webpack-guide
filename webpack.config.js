var path = require('path');

module.exports = {
    cache: true,
    entry: path.resolve(__dirname, 'src/main.js'),

    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },

    module: {
        loaders: [
            { test: /\.(js|jsx)?$/, exclude: /node_modules/, loader: "babel?cacheDirectory" },
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.(jpg|png)$/i, loader: "url?limit=50000" }
        ]
    },

    devServer: {
        contentBase: path.resolve(__dirname, 'build'),
        historyApiFallback: true
    }
};