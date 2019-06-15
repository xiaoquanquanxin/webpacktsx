const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
console.log('webpack.common.js // loading  ...........................................');
console.log(path.resolve(__dirname, '../dist'));
module.exports = {
    entry: {
        app: path.resolve(__dirname, '../src/index.tsx'),
    },
    output: {
        filename: '[name].[hash:8].bundle.js',
        path: path.resolve(__dirname, '../dist')
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.js$/,
                use: ['babel-loader'],
                exclude: '/node_moduels/'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'postcss-loader'],
            },
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    plugins: [
        // new CleanWebpackPlugin(['dist/*']) for < v2 versions of CleanWebpackPlugin
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Production',
            template: path.resolve(__dirname, '../src/template.html'),
        }),
    ],

};


