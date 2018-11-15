console.log('pages/index.js');

import '../public/static/css/index/index.css';


let mainMatch = document.querySelectorAll('.main');
let headerMath = document.querySelectorAll('.header');
mainMatch[0].innerText = 'main-after-modify1';

headerMath[0].addEventListener('click', function () {
    mainMatch[0].innerText = 'main-after-modify2';
});

console.log('hello, Heanes! I change this file again');

