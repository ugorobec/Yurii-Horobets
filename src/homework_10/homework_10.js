import './homework_10.scss';
const newUser = document.forms.user;



newUser.onsubmit = function formSubmit(e){
    e.preventDefault();
    let newUser = {
        name: e.target[0].value,
        password: e.target[1].value,
        adress: e.target[2].value,
        adress2: e.target[3].value,
        city: e.target[4].value,
        state: e.target[5].value,
        zip: e.target[6].value
   
    }
    for (let field of e.target) {
        
        console.log(field);
    }
    
  
}












