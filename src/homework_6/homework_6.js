import './homework_6.css';
import './font-awesome.min.css';

var btns = document.getElementsByClassName('page-nav__switcher');
var par = document.getElementsByClassName('page-nav');
btns[0].onclick = function() {
  par[0].classList.add("opened");
  console.log ('ПРивет');
}
btns[1].onclick = function() {
    par[0].classList.remove("opened");
  }

