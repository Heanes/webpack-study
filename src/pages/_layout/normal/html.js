const layout = require('./html.ejs'); // 整个页面布局的模板文件，主要是用来统筹各个公共组件的结构
const header = require('../../_include/header/html.ejs'); // 页头的模板
const footer = require('../../_include/footer/html.ejs'); // 页脚的模板


/* 整理渲染公共部分所用到的模板变量 */
let commonData = {
    pageTitle: '',
};

const moduleExports = {
    /* 处理各个页面传入而又需要在公共区域用到的参数 */
    init({pageTitle}) {
        commonData.pageTitle = pageTitle; // 比如说页面名称，会在<title>或面包屑里用到
        return this;
    },

    /* 整合各公共组件和页面实际内容，最后生成完整的HTML文档 */
    run(content) {
        const componentRenderData = Object.assign({}, commonData); // 页头组件需要加载css/js等，因此需要比较多的变量
        console.log(content);
        const renderData = {
            header:    header(componentRenderData),
            footer:    footer(componentRenderData),
            content,
            pageTitle: commonData.pageTitle
        };
        return layout(renderData);
    },
};

module.exports = moduleExports;
