function TrafficLighter() {
    const redLight = document.querySelector('#traffic-lighter__light_red');
    const greenLight = document.querySelector('#traffic-lighter__light_green');
    const yellowLight = document.querySelector('#traffic-lighter__light_yellow');

}
function toggleRed() {
    redLight.classList.add('active');
    greenLight.classList.remove('active');
    yellowLight.classList.remove('active');
   
}
redLight.onclick

export {TrafficLighter}