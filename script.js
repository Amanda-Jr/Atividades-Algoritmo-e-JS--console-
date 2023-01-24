// | Exercício 01 | 


console.log ("-----Exercício 01 e 02----------")
const nome = 'Amanda'
let recebidos = 'livros'
let roupa = 'saia'
let estilo = 'idosa'
let idade = 17
let altura = 1.50
const estudante = true
const irma = true
let pet = false
let vegetariana = true


// | Exercício 02 | 

console.log (nome + ', ' + idade +' anos, ' + altura + ' de altura')
console.log (`Uma roupa que está vestindo hoje: ${roupa}`)
console.log (`Como se sente nessa roupa? ${estilo}`)
console.log (`Tem uma irmã? ${irma}`)
console.log (`Recebeu algo hoje? Sim, ${recebidos}!`)
console.log (`É estudante do Ensino médio? ${estudante}`)
console.log (`Vegetariana? ${vegetariana}`)
console.log (`Sua mãe te deixa ter algum pet? ${pet}`)


// | Exercício 03 | 

console.log ("-----Exercício 03----------")
var n = (16+24+17+71)/4
console.log ("A média entre 16, 24, 17 e 71 é "+ n)


// | Exercício 04 | 
//Pressione o botão "Ex 4" para executar a função

function soma() {
    console.log ("-----Exercício 04----------")
    let primeirovalor = parseInt(prompt( "Digite o primeiro valor"))
    let segundovalor = parseInt(prompt( "Digite o segundo valor" ))
    let res = primeirovalor + segundovalor
    console.log(`A soma de ${primeirovalor} e ${segundovalor} é igual a ${res}`) 
}


// | Exercício 05 | 

console.log ("-----Exercício 05----------")
let saldoMara = 2700.80
let saldoJoao =  650.40
let saldoAmanda = 93.10
let saldoDory = 7354.70
let saldoWill = 3.90

console.log(saldoAmanda > saldoMara)
console.log(saldoDory == saldoWill)
console.log(saldoJoao > saldoAmanda)
console.log(saldoMara < saldoDory)
console.log(saldoWill >= saldoJoao)


// | Exercício 06 | 
//Pressione o botão "Ex 6" para executar a função

function aula () {
    console.log ("-----Exercício 06----------")
    let dia = prompt("Que dia é hoje?")
    if (dia == "quarta" || dia == "sábado" ) {
        console.log("Hoje é dia de aula do Reprograma Teens!")
    } else {
        console.log("Hoje não tem aula do Reprograma Teens, mas não esqueça de rever o conteúdo da aula anterior!")
    }
}



// | Exercício 07| 

console.log ("-----Exercício 07----------")
let $altura = 1.50
let $massa = 45

console.log ($massa/$altura)


// | Exercício 08|

console.log ("-----Exercício 08----------")
let number = 4

for(let count=1; count<=10 ; count++) {
    console.log("4 x "+ count +" = " + (number*count));
}


// | Exercício 09|

console.log ("-----Exercício 09----------")
let n1 = 50
let n2 = 25
let n3 = n1*n2

console.log (n3) 



// | Exercício 10|
//Pressione o botão "Ex 10" para executar a função

function calculadora () {
    console.log ("-----Exercício 10----------")
    let operacao = prompt ("Digite 1 para fazer uma soma, 2 para fazer uma subtração, 3 para fazer uma multiplição e 4 para fazer uma divisão")
    let primeiroValor = parseFloat(prompt( "Digite o primeiro valor"))
    let segundoValor = parseFloat(prompt( "Digite o segundo valor" ))

    if (operacao==1) {
    let resultado = primeiroValor + segundoValor
    console.log (primeiroValor + " + " + segundoValor + " = " + resultado)
    } else if (operacao==2) {
    let resultado = primeiroValor - segundoValor
    console.log (primeiroValor + " - " + segundoValor + " = " + resultado)
    } else if (operacao==3) {
    let resultado = primeiroValor * segundoValor
    console.log (primeiroValor + " x " + segundoValor + " = " + resultado)
    } else if (operacao==4) {
    let resultado = primeiroValor / segundoValor
    console.log (primeiroValor + " / " + segundoValor + " = " + resultado )
    } else {
    console.log ("Opção Inválida")
    }
  
}


// | Exercício 11|
//Pressione o botão "Ex 11" para executar a função

function diaDaSemana() {
    console.log ("-----Exercício 11----------")
    let dia = prompt("Diga um número de 1 a 7")
    const semana = ["undefined", "Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]
    //(semana[dia]) = dia
    console.log( ` O ${dia}° dia da semana é ${semana[dia]}`)   
}


// | Exercício 12|
//Pressione o botão "Ex 12" para executar a função

function boletim () {
    console.log ("-----Exercício 12----------")
    let nota1 = parseFloat(prompt("Qual foi a sua primeira nota?"))
    let nota2 = parseFloat(prompt("Qual foi a sua segunda nota?"))
    let nota3 = parseFloat(prompt("Qual foi a sua terceira nota?"))
    let media = (nota1+nota2+nota3)/3
    let mediaFim = media.toFixed(2)

    if (mediaFim >= 7 && mediaFim <= 10) {
        console.log(`Sua média foi ${mediaFim} e você foi aprovado. Parabéns!`)
    } else if (mediaFim >= 5) {
        console.log (`Sua média foi ${mediaFim} e você está de recuperação.`)
    } else {
        console.log(`Sua média foi ${mediaFim} e você está reprovado.`)
    }
}


// | Exercício 13|
//Pressione o botão "Ex 13" para executar a função

function maioridade() {
    console.log ("-----Exercício 13----------")
    const anoAtual = 2021
    let ano = parseInt (prompt ("Digite o ano do seu nascimento"))
    let idadeUsuario = anoAtual - ano
    if (idadeUsuario >= 18) {
        console.log("Você tem "+ idadeUsuario +" anos e é maior de idade")
    } else if( idadeUsuario >= 0){
        console.log("Você tem "+ idadeUsuario +" anos e é menor de idade")
    } else {
        console.log("Dado inválido")
    }
}


// | Exercício 14|
//Pressione o botão "Ex 14" para executar a função

function tempoDeHoje() {
    console.log ("-----Exercício 14----------")

    let tempo = prompt("Como está o tempo? ensolarado, nublado ou chuvoso?")
    if (tempo == "ensolarado") {
        console.log("Dias ensolarados são perfeitos para ir à praia. Porque não aproveita?")
    } else if (tempo == "nublado") {
        console.log("Dias nublados são perfeitos para ir ao parque. Porque não aproveita?")
    } else if (tempo == "chuvoso") {
        console.log("Dias chuvosos são perfeitos para maratonar séries. Porque não aproveita?")
    } else {
        console.log("Dados não correspondentes")

    }
}

    
// | Exercício 15|

console.log ("-----Exercício 15----------")
let contador1 = 4

while(contador1 < 15){
    contador1 = contador1+1
    console.log(contador1)
} 

let contador2 = 21

while(contador2 > 10){
    contador2 = contador2-1
    console.log(contador2)
} 
