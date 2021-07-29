import demo from './demo'

let count = 0;
document.getElementById('count_value').innerHTML = count;

document.getElementById('counter').addEventListener('click', ()=>{
    document.getElementById('count_value').innerHTML = count;
    count++;
})

console.log('Hello, Welcome to my project');
