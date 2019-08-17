export class Slider{
    constructor(targetElement){
      this.targetElement = targetElement;
      
      this.slides = [];
      this.renderSlide();
      
      
    }
  
    renderSlide(){
      const slide = document.createElement('div');
     
      slide.classList.add('slide');
      slide.textContent = this.number;
      this.targetElement.appendChild(slide);
      this.slides.push(slide); 
    }
  }