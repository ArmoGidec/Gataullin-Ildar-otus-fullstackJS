const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

/**@type {import('webpack').Configuration} */
const config = {
    devtool: 'inline-source-map',
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[hash].js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    },
    module: {
        rules: [{
            test: /\.(js|ts)x?$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    },
    plugins: [new CleanWebpackPlugin(), new HtmlWebpackPlugin({
        template: './src/public/index.html'
    })],
    devServer: {
        historyApiFallback: true
    },
};

module.exports = config;