const dirVars = require('../base/dirVars.config.js');

module.exports = {
    filename: `${dirVars.staticDirName}/js/[name].[contenthash:8].js`,
    path:     dirVars.distDir,
    // 在无需使用publicPath时，不配置publicPath(不要写空字符串)或者将其设置为undefined可以得到根据html得到相对路径效果
    publicPath: undefined
};