const content = require('./content.ejs');
const layout = require('layout/normal/html.js');
const pageTitle = 'article list page'; // 页面名称

const articleContent = require('../../../components/article/list.ejs');

module.exports = layout.init({
    pageTitle: pageTitle,
}).run(content({
    pageTitle,
    content: articleContent()
}));
