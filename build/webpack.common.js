const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
console.log(  path.resolve(__dirname, '../src/web/index.tsx') );
console.log('webpack.common.js // loading  ...........................................');
module.exports = {
    entry: {
        // "src/app": path.resolve(__dirname, '../src/index.tsx'),
        "app": path.resolve(__dirname, '../src/web/index.tsx'),
        // "servers/app": path.resolve(__dirname, '../servers/entities.ts')
    },
    output: {
        filename: '[name].[hash:8].bundle.js',
        path: path.resolve(__dirname, '../dist'),
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
                // use: ['style-loader', 'postcss-loader', 'css-loader'],
                // use: [ 'style-loader', 'postcss-loader' ]
                use: ['style-loader',  'css-loader'],
            },
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.css']
    },
    plugins: [
        // new CleanWebpackPlugin(['dist/*']) for < v2 versions of CleanWebpackPlugin
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Production',
            template: path.resolve(__dirname, '../src/web/template.html'),
        }),
    ],

};


