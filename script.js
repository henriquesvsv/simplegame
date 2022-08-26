document.addEventListener('DOMContentLoaded' , () => {
    var personagem = document.getElementById('personagem');

var personagemleft = 0;
var personagembottom = 70;


var personaWidth = 300;
var personaHeight = 175;
//A altura e largura do Spritesheet
var spriteWidth = 192;
var spriteHeight = 100;
//Temos 2 linhas por 8 colunas no sprite sheet
var rows = 3;
var cols = 3; 

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
var frameCount = 3; 

//x and y coordenadas para renderizar o sprite
var x=300;
var y=50;
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
var canvas = document.getElementById('bunny');
//Configurando largura e altura do canvas
canvas.width = personaWidth;
canvas.height = personaHeight;
//Estabelecendo conexão com canvas
var ctx = canvas.getContext("2d");
//Criando um objeto da imagem de seu personagem
var character = new Image();
//Informando o nome do arquivo sprite
character.src = "bunny.png";

function updateFrame(){
    ctx.clearRect(x,y,width,height);

    //Updating the frame index
    curFrame = ++curFrame % frameCount;
    //Calculating the x coordinate for spritesheet
    srcX = curFrame * width;
    }

    function draw(){
        //Updating the frame
        updateFrame();
        //Drawing the image
        ctx.drawImage(character,srcX,srcY,width,height,0,50,width,height);
        ctx.clearRect(x,y,width,height);

        }


    function drawLeft(){
        //Updating the frame
        updateFrame();
        //Drawing the image
        ctx.drawImage(character,0,height,width,height,x,y,width,height);

    }

function andar(direcao){
    switch(direcao){
        case 'right':
            personagemleft-=20;
            personagem.style.left=personagemleft+'px';
           setTimeout( draw, 100)
            ctx.clearRect(x,y,personaWidth,height);

            console.log(personagemleft);
            break;
        case 'left':
            personagemleft+=20;
            personagem.style.left=personagemleft+'px';
            setTimeout( drawLeft, 100)
            ctx.clearRect(x,height,personaWidth,personaHeight);
            

            console.log(personagemleft);
            break;
       
       
    }
       ctx.clearRect(x,y,width,height);
 
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