const erro = []
const sorteando = Math.floor(Math.random() * 100) + 1;
console.log(sorteando)
const tentativa = 6

const inNumero = document.getElementById('inNumero')

const btnApostar = document.getElementById('btnApostar')
const btnJogarNovamente = document.getElementById('btnJogar')

const outErros = document.getElementById('outErros')
const outChances = document.getElementById('outChances')

const outDica = document.getElementById('outDica') 


const apostarNumeros = () => {
    const numero = Number(inNumero.value)
    const numeroDigitado = 
    if(numero === 0 || isNaN(numero)){
       alert("Número inválido")
       return;
    }

    if(numero === sorteando){
        alert("Você acertou!")
        btnApostar.disabled = true
        outDica.textContent = 'Parabéns!! Você Acertou!'
    }else{
        if(numero === ){
            alert("Esse número já foi digitado")
        }
        // console.log("Errou")
    }
}

btnApostar.addEventListener('click', apostarNumeros)

const jogarNovamente = () => {
    window.location.reload()
}

btnJogarNovamente.addEventListener('click', jogarNovamente)