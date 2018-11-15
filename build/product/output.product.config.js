const dirVars = require('../base/dirVars.config.js');

module.exports = {
    filename: `${dirVars.staticDirName}/js/[name].[contenthash:8].js`,
    path:     dirVars.distDir
};