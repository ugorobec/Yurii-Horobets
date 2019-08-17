import './homework_13.scss';
import {SliderController} from './scripts/slidercontroller';

function renderForm() {
    const slaiderForm = document.createElement('form');
    const textField = document.createElement('input');
    const inputButton = document.createElement('input');
    slaiderForm.classList.add('slider_form');
    inputButton.setAttribute('value', 'Add slides');
    slaiderForm.setAttribute('method', 'post');
    inputButton.setAttribute('type', 'submit');
    textField.setAttribute('type', 'number');
    textField.setAttribute('name', 'field');
    slaiderForm.appendChild(textField);
    slaiderForm.appendChild(inputButton);
    document.querySelector('body').appendChild(slaiderForm);
    slaiderForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const slider = new SliderController(document.querySelector('body'), textField.value);
    })
}

renderForm();


//const slider = new SliderController(document.querySelector('body'));








