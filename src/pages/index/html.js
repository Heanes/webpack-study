const content = require('./content.ejs');
const layout = require('layout/normal/html.js');

let pageTitle = 'index pages';

const articleList = require('@/components/article/list.ejs')();

module.exports = layout.init({
    pageTitle: pageTitle,
}).run(content(
    {
        pageTitle: 'index page inline title',
        articleList
    })
);

