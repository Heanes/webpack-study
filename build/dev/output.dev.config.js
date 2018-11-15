const dirVars = require('../base/dirVars.config.js');

module.exports = {
    filename: `${dirVars.staticDirName}/js/[name].[hash:8].js`,
    publicPath: '/',
    path:     dirVars.distDir,
};