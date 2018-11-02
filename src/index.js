import _ from 'lodash';
//import Print from './print';

console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode');
}

function component() {
    var element = document.createElement('div');
    var btn = document.createElement('button');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    btn.innerHTML = 'Click me and look at the console!';
    //element.onclick = Print.bind(null, 'Hello webpack!');

    element.appendChild(btn);

    return element;
}

let element = component(); // 当 print.js 改变导致页面重新渲染时，重新获取渲染的元素
document.body.appendChild(element);