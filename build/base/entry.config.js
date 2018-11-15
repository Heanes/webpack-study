const dirVars = require('./dirVars.config.js');

let pageEntries = require('./pageEntries.config');
let entries = {};
pageEntries.js.forEach(item => {
    let directory = item.match(/[^\\]*(?=\..*$)/)[0];
    entries[directory] = `./${dirVars.srcRootDirName}/${dirVars.pagesDirName}/${item}`;
});

// console.log('----------------------------------------');
// console.log(__filename, ':entries:\n', entries);
// console.log('----------------------------------------');

/**
 * @doc 定义入口
 * @author Heanes
 * @time 2018-11-05 17:04:48 周一
 */
module.exports = entries;