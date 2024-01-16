let listaDeNumerosSorteados = []
let numeroLimite = 10
let numeroAleatorio = gerarNumeroAleatorio()
let tentativas = 1

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag)
    campo.innerHTML = texto
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2}) 
}

function focoBt() {
    let chute = document.querySelector('input')
    chute.focus()
}

focoBt()

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo Adivinha')
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10')    
}

exibirMensagemInicial()

function verificarChute() {
    let chute = document.querySelector('input').value
    if(chute == numeroAleatorio) {
        exibirTextoNaTela('h1', 'Você acertou!')
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa' 
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`
        exibirTextoNaTela('p', mensagemTentativas)
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else {
        if(chute > numeroAleatorio){
            exibirTextoNaTela('p', 'O número secreto é menor!')    
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior!')
        }
        tentativas++
        limpaCampo()
        focoBt()
    }
} 

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1)
    let quantidadeDeNumerosNaLista = listaDeNumerosSorteados.length
    if (quantidadeDeNumerosNaLista == numeroLimite) {
        listaDeNumerosSorteados = []
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido) ) {
         gerarNumeroAleatorio()
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido)
        return numeroEscolhido
    }
}

function limpaCampo() {
    chute = document.querySelector('input')
    chute.value = ''
}

function reiniciarJogo() {
    exibirMensagemInicial()
    numeroAleatorio = gerarNumeroAleatorio()
    limpaCampo()
    focoBt()
    tentativas = 1
    document.getElementById('reiniciar').setAttribute('disabled', true)
}
