const dirVars = require('../base/dirVars.config');

const path = require('path');

module.exports = {
    alias: {
        // 定义src源目录别名
        '@': dirVars.srcRootDir,
        layout: path.resolve(dirVars.layoutDir),
    }
};