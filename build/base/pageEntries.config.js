const dirVars = require('./dirVars.config.js');

let Glob = require("glob").Glob;

let globOptions = {
    cwd: dirVars.pagesDir, // 在pages目录里找
    sync: true, // 这里不能异步，只能同步
};
let mg = new Glob('**/!(_)*+(.html|.js)', globOptions);

let found = mg.found;
// console.log('found', found);

// 剔除含'_'或者含'/_'这种的文件
let foundFiltered = found.filter(item => {
    return !item.match(/^_.*|\/_.*/);
});

let foundHtml = [];
let foundJs = [];
foundFiltered.forEach(item => {
   item.match(/.*.html$/) ? foundHtml.push(item) : null;
   item.match(/.*.js/) ? foundJs.push(item) : null;
});

let founds = {
    html: foundHtml,
    js: foundJs
};

// console.log('founds', founds);

/**
 * @doc 页面入口
 * @author Heanes
 * @time 2018-11-05 17:24:58 周一
 */
module.exports = founds;