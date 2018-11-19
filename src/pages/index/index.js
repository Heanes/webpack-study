console.log('index page');

require('@/public/static/css/index/index.css');

let $wrapper = document.querySelector('#wrapper');
$wrapper.appendChild(document.createTextNode('inserted text'));