document.addEventListener('DOMContentLoaded' , () => {
   
const personagem  = document.querySelector('.personagem');
var personagemleft = 0;

function andar(){
    personagemleft+=20;
    personagem.style.left=personagemleft+'px';
    console.log(personagemleft);
}

document.addEventListener('keyup', control)
document.addEventListener('keypress', control)

function control(e) {
    if (e.keyCode === 32) {
        andar()
    }
}

})