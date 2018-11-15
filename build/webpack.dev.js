module.exports = {
    entry: require('./base/entry.config.js'),

    output: require('./dev/output.dev.config.js'),

    module: require('./dev/module.dev.config.js'),

    resolve: require('./base/resolve.config.js'),

    plugins: require('./dev/plugins.dev.config.js'),

    externals: require('./base/externals.config.js'),

    devServer: require('./dev/devServer.config.js'),

    optimization: require('./dev/optimization.dev.config.js'),

    mode: 'development',

    devtool: 'eval-source-map'
};