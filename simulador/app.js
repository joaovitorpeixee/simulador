/**
 * Simulador de operadores lógicos
 * @author João vitor souto balbino 
 */

// Variáveis
let receive // Variável que armazena o valor recebido pela função.
// Variáveis usada na lógica para ligar e desligar as chaves e também na lógica para acender ou apagar a lâmpada.
let sw1 = false
let sw2 = false

// Variáveis para capturar a página HTML.

let identify = window.location.pathname
console.log(identify) // Apoio ao entendimento da lógica (página HTML)

// Variável para identificar a quebra da lâmpada
let broken = false

function sw(receive) {
    //console.log(receive) // Apoio a lógica (teste da função)

    // Lógica das chaves
    if (receive === 1 && sw1 === false) {
        document.getElementById('sw1').src = "imagens/swon.png"
        sw1 = true
    } else if (receive === 1 && sw1 === true) {
        document.getElementById('sw1').src = "imagens/swoff.png"
        sw1 = false
    } else if (receive === 2 && sw2 === false) {
        document.getElementById('sw2').src = "imagens/swon.png"
        sw2 = true
    } else if (receive === 2 && sw2 === true) {
        document.getElementById('sw2').src = "imagens/swoff.png"
        sw2 = false
    }


    // Lógica para quebrar a lâmpada
    if (receive === 3) {
        // Reproduzindo áudio no JavaScript
        let beep = new Audio()
        beep.src = "glassbreaking.wav"
        beep.play()
        document.getElementById('lamp').src = "imagens/broken.jpg"
        broken = true
    }

    // ATENÇÃO: No GitHub acrescentar o nome do repositório antes da página nas estruturas abaixo Exemple: /simulador/and.html no lugar de /and.html

    // Lógica do operador AND
    if (identify === "/simulador/and.html" && broken !== true) {
        if (sw1 === true && sw2 === true) {
            document.getElementById('lamp').src = "imagens/on.jpg"
        } else {
            document.getElementById('lamp').src = "imagens/off.jpg"
        }
    }

    // Lógica do operador OR
    if (identify === "/simulador/or.html" && broken !== true) {
        if (sw1 === true || sw2 === true) {
            document.getElementById('lamp').src = "imagens/on.jpg"
        } else {
            document.getElementById('lamp').src = "imagens/off.jpg"
        }
    }
    // Lógica do operador NOT
    if (identify === "/simulador/not.html" && broken !== true) {
        if (!sw1) {
            document.getElementById('lamp').src = "imagens/on.jpg"
        } else {
            document.getElementById('lamp').src = "imagens/off.jpg"
        }
    }
}


// Atualizar automaticamente o ano no rodapé.

let ano = document.getElementById('copyrightYear')
let anoAtual = new Date().getFullYear()
ano.textContent = anoAtual