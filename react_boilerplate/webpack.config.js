const path = require('path');
const html_webpack_plugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',

    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    devServer: {
        port: 5000
    },

    resolve: {
        extensions: ['.js', '.jsx']
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: ['babel-loader'],
                exclude: /node_modules/
            }
        ]
    },

    plugins: [
        new html_webpack_plugin({
            template: './src/index.html'
        })
    ]

}