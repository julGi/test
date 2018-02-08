const path = require('path');
var webpack = require('webpack');
const config = {
    entry: './src/main.js',
    watch: false,
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.js',
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015'] 
            }
        }]
    }
};
module.exports = config;