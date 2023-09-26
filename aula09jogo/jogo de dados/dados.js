
//Caminho das imagens
let imgDadosJogador=[
    'imagens/dadoVermelho1.png',
    'imagens/dadoVermelho2.png',
    'imagens/dadoVermelho3.png',
    'imagens/dadoVermelho4.png',
    'imagens/dadoVermelho5.png',
    'imagens/dadoVermelho6.png'
]

//Caminho das imagens
let imgDadosComputador=[
    'imagens/dadoPreto1.png',
    'imagens/dadoPreto2.png',
    'imagens/dadoPreto3.png',
    'imagens/dadoPreto4.png',
    'imagens/dadoPreto5.png',
    'imagens/dadoPreto6.png'
]


function sortear(){
    tamanho = imgDadosComputador.length
    return parseInt(Math.random()*tamanho)
}


function gerarDados(array){
    //gera array numerico entre 0 e 5
    return [
        sortear(array),
        sortear(array),
        sortear(array)
    ]
}


function somarDados(arrayNumerico){
    // corrigindo o índice para o valor real dos pontos do dado somando 1
    return arrayNumerico.reduce((soma,numero)=> soma + (numero+1), 0)
}

function verificarGanhador(pontosJogador, pontosComputador){
    let texto 
    if (pontosJogador>pontosComputador){
        texto = 'Você ganhou!'
    }
    else if(pontosComputador>pontosJogador){
       texto =' Você perdeu'
    }
    else{
       texto ='EMPATE'
    }
    document.getElementById("ganhador").innerHTML= texto
}


function mostrarDados(dJogador, dComputador){

    //montando a exibição dos dados do jogador
    document.getElementById('dadoJ1').src= imgDadosJogador[dJogador[0]]
    document.getElementById('dadoJ2').src= imgDadosJogador[dJogador[1]]
    document.getElementById('dadoJ3').src= imgDadosJogador[dJogador[2]]

    // montando a exibição dos dados do computador
    document.getElementById('dadoC1').src= imgDadosComputador[dComputador[0]]
    document.getElementById('dadoC2').src= imgDadosComputador[dComputador[1]]
    document.getElementById('dadoC3').src= imgDadosComputador[dComputador[2]]
}


function iniciarJogo(){
    //array de números para os dados
    let arrayJogador= gerarDados(imgDadosJogador)
    let arrayComputador=gerarDados(imgDadosComputador)
    
    //monta a imagem dos dados
    mostrarDados(arrayJogador,arrayComputador)

    //soma pontos do array numérico
    let pontosJogador= somarDados(arrayJogador)
    let pontosComputador=somarDados(arrayComputador)

    //verificaGanhador e retorna o resultado
    verificarGanhador(pontosJogador, pontosComputador)
}














