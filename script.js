document.addEventListener('DOMContentLoaded' , () => {
   
var personagemleft = 0;
var personagembottom = 70;


var personaWidth = 300;
var personaHeight = 175;
//A altura e largura do Spritesheet
var spriteWidth = 417;
var spriteHeight = 674;
//Temos 2 linhas por 8 colunas no sprite sheet
var rows = 12;
var cols = 8; 

//A linha 0 (primeira) é para o movimento da direita
var trackRight = 0;
//A linha 1 (segunda) é para o movimento da esquerda
var trackLeft = 1; 

//Para obter a coluna de um sprite único dividiremos a coluna do sprite pelo número de colunas
//porque todas as sprites são iguais na largura e altura
var width = spriteWidth/cols;
//O mesmo para a altura dividiremos a altura pelo número de linhas
var height = spriteHeight/rows;

var curFrame = 0;
//O total de frames é 8
var frameCount = 4; 

//x and y coordenadas para renderizar o sprite
var x=0;
var y=0;
//x and y coordenadas do oanvas para obter um único frame
var srcX=0;
var srcY=0;
//ajustando o movimento esquerdo
var left = false;
//Assumindo que movimento iniciará para o lado direito
var right = true;
//Velocidade do movimento
var speed = 12;
//Getting the canvas
var canvas = document.getElementById('personagem');
//Configurando largura e altura do canvas
personagem.width = personaWidth;
personagem.height = personaHeight;
//Estabelecendo conexão com canvas
var ctx = personagem.getContext("2d");
//Criando um objeto da imagem de seu personagem
var character = new Image();
//Informando o nome do arquivo sprite
character.src = "personagem.png";
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

function gravity(){
    
        personagem.style.marginBottom=0+"px";
    
}

function jump(){

    personagembottom=30;
    console.log( personagembottom+=30)
    personagem.style.marginBottom=personagembottom+'px';
    setTimeout(() => {
        gravity();
      }, 200);
}

document.addEventListener('keyup', control)
document.addEventListener('keydown', (e) => {

    switch(e.keyCode){
        case 68:
            andar('left');
            break;
        
        case 65:
            andar('right');
            break;
        }
    }
  );

function control(e) {
    switch(e.keyCode){
    case 68:
        andar('left');
        break;
    
    case 65:
        andar('right');
        break;

    case 32:
        jump();
        break;
    }
}

})