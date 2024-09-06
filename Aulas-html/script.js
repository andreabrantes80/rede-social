const tela = document.querySelector("#tela");
const pincel = tela.getContext("2d");
pincel.fillStyle="lightgray";
pincel.fillRect(0,0,600,400);

let corAtual = 0;
const cores=["blue","red","green","orange","white"];

function desenhaCirculo(evento){

    const posX = evento.pageX - tela.offsetLeft;
    const posY = evento.pageY - tela.offsetTop;
    pincel.fillStyle=cores[corAtual];
    pincel.beginPath();
    pincel.arc(posX,posY,10,0,2*Math.PI);
    pincel.fill();
}

tela.onclick = desenhaCirculo;
tela.oncontextmenu = mudaCores;


function mudaCores(){
    corAtual=corAtual+1;
    if(corAtual>= cores.length){
        corAtual=0;
    }
    return false;
}