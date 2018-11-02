const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    module:       {
        rules: [
            {
                test: /\.css$/,
                use:  ['style-loader', 'css-loader']
            }
        ]
    },
    plugins:      [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Caching'
        }),
        new webpack.HashedModuleIdsPlugin()
    ],
    output:       {
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