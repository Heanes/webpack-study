const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

const dateNow = new Date();
const dateStr = dateNow.getFullYear() + '-' + ((dateNow.getMonth()+1) + '').substr(-2, 2) + '-' + ('0' + dateNow.getDate()).substr(-2, 2) + ' ' + dateNow.getHours() + ':' + dateNow.getMinutes() + ':' + dateNow.getSeconds() + ' 周' + dateNow.getDay();

module.exports = {
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.css$/,
                use:  ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Caching'
        }),
        new webpack.ProvidePlugin({
            join: ['lodash', 'join']
        }),

        // 生成文件添加自定义banner
        new webpack.BannerPlugin({
            banner:  (options) => {
                options.author = 'Heanes';
                options.time = dateStr;
                return `@author: ${options.author}\n@time: ${options.time}`;
            },
            exclude: [
                /^vendors\..*\.js$/     // 排除vendors
            ]
        })
    ],
    output: {
        filename: '[name].[contenthash].js',
        path:     path.resolve(__dirname, 'dist')
    },
    optimization: {
        runtimeChunk: 'single',
        splitChunks:  {
            cacheGroups: {
                vendor: {
                    test:   /[\\/]node_modules[\\/]/,
                    name:   'vendors',
                    chunks: 'all'
                }
            }
        }
    }
};