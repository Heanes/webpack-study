const dirVars = require('./dirVars.config.js');

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

let pageEntries = require('./pageEntries.config');
let entriesJs = require('./entry.config');
let entriesHtml = pageEntries.html;

let htmlWebpackPluginArr = [];

entriesHtml.forEach(item => {
    console.log('item', item);

    let htmlWebpackPluginOption = {
        filename: item,
        template: './src/pages/_template/normal.html',
        chunks: ['manifest', 'vendors', 'common'],
        xhtml: true,
    };

    let entryJs = item.match(/[^\\]*(?=\.html$)/)[0];

    let entryJsFile = entriesJs[entryJs];
    if(entryJsFile){
        htmlWebpackPluginOption.chunks.push(entryJs);

        console.log('entry', entryJs);
        let requireFile = `../../${dirVars.srcRootDirName}/${dirVars.pagesDirName}/${entryJs}`;
        console.log('requireFile', requireFile);
    }

    // 如果子页面下有html文件，则使用此html作为template，否则使用默认公共模版
    htmlWebpackPluginArr.push(
        new HtmlWebpackPlugin(htmlWebpackPluginOption),
    );
    console.log('\n');
});

let utils = require('../utils/utils');

let plugins = [
    // 清理构建目录
    new CleanWebpackPlugin([dirVars.distDirName], {
        root: dirVars.rootDir,       //根目录
    }),

    // 输出html
    ...htmlWebpackPluginArr,

    // 将对象暴露给webpack
    new webpack.ProvidePlugin({
        $: 'jQuery',
        join: ['lodash', 'join']
    }),

    // 生成文件添加自定义banner
    new webpack.BannerPlugin({
        banner:  (options) => {
            options.author = 'Heanes';
            options.time = utils.getFormatDate();
            return `@author: ${options.author}\n@time: ${options.time}`;
        },
        exclude: [
            /^vendors\..*\.js$/     // 排除vendors
        ]
    })
];

module.exports = plugins;