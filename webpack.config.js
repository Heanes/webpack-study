/**
 * @doc 此文件主要作用为当作webStorm的code assistance
 * @author Heanes
 * @time 2018-11-15 23:53:37 周四
 */
module.exports = {
    entry: require('./build/base/entry.config.js'),

    output: require('./build/dev/output.dev.config.js'),

    module: require('./build/dev/module.dev.config.js'),

    resolve: require('./build/base/resolve.config.js'),

    plugins: require('./build/dev/plugins.dev.config.js'),

    externals: require('./build/base/externals.config.js'),

    devServer: require('./build/dev/devServer.config.js'),

    optimization: require('./build/dev/optimization.dev.config.js'),

    mode: 'development',

    devtool: 'eval-source-map'
};