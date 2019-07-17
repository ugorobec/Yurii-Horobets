import './homework_7.scss';
let btns = document.getElementsByClassName('hamburger');
let par = document.getElementsByClassName('page-header');
if(btns.length>0) {
    btns[0].onclick = function() {
        par[0].classList.toggle("opened");
      }
}