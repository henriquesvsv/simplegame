document.addEventListener('DOMContentLoaded' , () => {
   
const personagem  = document.querySelector('.personagem');
var personagemleft = 0;

function andar(direcao){
    switch(direcao){
        case 'right':
            personagemleft-=20;
            personagem.style.left=personagemleft+'px';
            console.log(personagemleft);
            break;
        case 'left':
            personagemleft+=20;
            personagem.style.left=personagemleft+'px';
            console.log(personagemleft);
            break;
       
       
    }
    
}

document.addEventListener('keyup', control)
document.addEventListener('keypress', control)

function control(e) {
    switch(e.keyCode){
    case 68:
        andar('left');
        break;
    
    case 65:
        andar('right');
        break;
    }
}

})