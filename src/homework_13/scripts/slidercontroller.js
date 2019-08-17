import {Slider} from './slider'
export class SliderController {
    constructor(targetElement, howMany = '7' ) {
        this.targetElement = targetElement;
       
        this.imagesBlocks = [];
        this.currentImageIndex = 0;
        this.slideImage = null;
        this.howMany = howMany;
        this.render();
        this.renderPrevNextBtn();
        this.addNewSlide();
    }
    render() {
        this.slider = document.createElement('div');
        this.slider.classList.add('slider');
        this.container = document.createElement('div');
        this.container.classList.add('container_slider');
        this.content = document.createElement('div');
        this.content.classList.add('container_button');
        this.slider.appendChild(this.content); 
        this.slider.appendChild(this.container); 
        this.targetElement.appendChild(this.slider); 

    }
    renderPrevNextBtn() {
        const showPrevBtn = document.createElement('button');
        const showNextBtn = document.createElement('button');
        showPrevBtn.classList.add('switch_button');
        showNextBtn.classList.add('switch_button');
        showPrevBtn.textContent = '<';
        showNextBtn.textContent = '>';
        this.content.appendChild(showPrevBtn);
        this.content.appendChild(showNextBtn);
    }
    addNewSlide() {
        for(let i = 0; i < this.howMany; i++){
          const slider = new Slider(this.container);     
          console.log(this.container) 
          this.imagesBlocks.push(slider);
        }  
    }
}
