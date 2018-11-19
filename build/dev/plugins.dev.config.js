const pluginsConfig = require('../base/plugins.config.js');

const webpack = require('webpack');
pluginsConfig.push(
    new webpack.HotModuleReplacementPlugin()
);

module.exports = pluginsConfig;