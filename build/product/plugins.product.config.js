const dirVars = require('../base/dirVars.config.js');

const pluginsConfig = require('../base/plugins.config.js');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

pluginsConfig.push(
    new MiniCssExtractPlugin({
        filename: `${dirVars.staticDirName}/css/[name].[contenthash:8].css`,
    })
);

module.exports = pluginsConfig;