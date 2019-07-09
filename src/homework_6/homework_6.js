import './homework_6.css';
import './font-awesome.min.css';

let btns = document.getElementsByClassName('page-nav__switcher');
let par = document.getElementsByClassName('page-nav');
if(btns.length>0) {
    btns[0].onclick = function() {
        par[0].classList.toggle("opened");
      }
}