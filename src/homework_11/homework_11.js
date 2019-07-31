import './homework_11.scss'
const btn = document.createElement('button');
btn.innerHTML = 'Add paragraph';
document.querySelector('body').appendChild(btn);
btn.style.borderRadius = '5px';
btn.style.display = 'block';
btn.style.marginTop = '150px';
btn.classList.add('btn');




btn.onclick = function () {
    let text = prompt ('Enter text here');
    let p = document.createElement('p');
    p.classList.add('random-text')
    document.body.appendChild(p);
    p.appendChild(document.createTextNode(text)); 
}