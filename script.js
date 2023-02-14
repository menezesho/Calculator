let total = 0;
let buffer = "0";
let operadorAnterior;

const visor = document.querySelector('.visor');

function botaoClick(valor){
    if(isNaN(valor)){
        tratarSimbolo(valor);
    }
    else{
        tratarNumero(valor);
    }
    visor.innerText = buffer;
}

function tratarSimbolo(simbolo) {
    switch(simbolo){
        case 'C':
            buffer = '0';
            total = 0;
            break;
        case '=':
            if(operadorAnterior === null){
                return;
            }
            totalBuffer(parseInt(buffer));
            operadorAnterior = null;
            buffer = total;
            total = 0;
            break;
        case '←':
            if(buffer.length === 1){
                buffer = '0';
            }
            else{
                buffer = buffer.substring(0, buffer.length - 1);
            }
            break;
        case '+':
        case '−':
        case '×':
        case '÷':
            realizarOperacao(simbolo);
            break;
    }
}

function realizarOperacao(simbolo) {
    if(buffer === '0'){
        return;
    }

    const intBuffer = parseInt(buffer);

    if(total === 0){
        total = intBuffer;
    }
    else{
        totalBuffer(intBuffer);
    }
    operadorAnterior = simbolo;
    buffer = '0';
}

function totalBuffer(intBuffer) {
    if(operadorAnterior === '+'){
        total += intBuffer;
    }
    else if(operadorAnterior === '−'){
        total -= intBuffer;
    }
    else if(operadorAnterior === '×'){
        total *= intBuffer;
    }
    else if(operadorAnterior === '÷'){
        total /= intBuffer;
    }
}

function tratarNumero(numeroString) {
    if(buffer === "0"){
        buffer = numeroString;
    }
    else{
        buffer += numeroString;
    }
}

function inicio() {
    document.querySelector('.botoes').addEventListener('click', function(event){
        botaoClick(event.target.innerText);
    })
}

inicio();