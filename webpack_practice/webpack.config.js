const html_webpack_plugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/app.js',
    output: {
        path: __dirname + '/build',
        filename: 'bundle.js'
    },

    devServer: {
        port: 5000
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' }
                ]
            }
        ]
    },

    plugins: [
        new html_webpack_plugin({
            template: './src/index.html'
        })
    ]
}