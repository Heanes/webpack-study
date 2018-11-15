console.log('pages/index/index.js');

import '../../public/static/css/index/index.css';

import {util1, util2, util3} from '../../public/static/js/utils';
util1();


let mainMatch = document.querySelectorAll('.main');
let headerMatch = document.querySelectorAll('.header');
console.log(mainMatch[0].innerText);
mainMatch[0].innerText = 'main-after-modify1';

headerMatch[0].addEventListener('click', function () {
    mainMatch[0].innerText = 'main-after-modify2';
});
