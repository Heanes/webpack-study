const dirVars = require('./dirVars.config.js');

/**
 * @doc module定义
 * @author Heanes
 * @time 2018-11-05 17:04:40 周一
 */
module.exports = {
    rules: [
        // ejs 模版文件
        {
            test: /\.ejs$/,
            include: dirVars.srcRootDir,
            loader: 'ejs-loader',
        },
        // 图片等资源文件
        {
            // 图片加载器，雷同file-loader，更适合图片，可以将较小的图片转成base64，减少http请求
            // 如下配置，将小于8192byte的图片转成base64码
            test: /\.(png|jpg|jpeg|gif)$/,
            include: dirVars.srcRootDir,
            // loader: 'url-loader?limit=8192&name=./static/img/[hash].[ext]',
            loader: 'url-loader',
            options: {
                limit: 8192,
                name: './static/img/[hash].[ext]',
            },
        },
    ],
};