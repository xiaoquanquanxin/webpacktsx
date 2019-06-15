const merge = require('webpack-merge');
const webpackCommon = require('./webpack.common.js');
console.log('webpack.dev.js     //loading ........................................');
const webpackDevConfiguration = merge(webpackCommon, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist'
    }
});

console.log(webpackDevConfiguration);
module.exports = webpackDevConfiguration;