const prompt = require('prompt-sync');
const entrada = prompt();

const nomeCompleto = "Ana Caroline Camargo de Lima";
const anoNascimento = 2006;
let anoAtual = 2024;
const idade = 18;

console.log("Olá eu sou " + nomeCompleto + " estamos no ano de " + anoAtual + " minha idade é " + idade + ".");

let AnoAtual = 2025;
let Idade = 19;
const NomeCompleto = " Ana Caroline Camargo de Lima  ";
const Faculdade = " medicina ";

console.log("Olá meu nome é " + NomeCompleto + ", tenho " + Idade + " anos " +  "estamos no ano de " + AnoAtual + " gostaria de fazer faculdade na área de " + Faculdade);

console.log(`oi eu sou ${nomeCompleto} meu no de nascimento é ${anoNascimento} minha idade é ${idade}`)

const listaDeViagens = new Array(
  `Grécia`,
  `Itália`,
  `Espanha`,
  `Rio Grande do Norte`,
  `Noruega`
);

console.log (listaDeViagens);

console.log(listaDeViagens[4])
listaDeViagens.push("Coronel Vivida");
console.log(listaDeViagens);

listaDeViagens.splice(1,2);
console.log(listaDeViagens);

var NomeComprador = entrada("Qual o seu nome? ");
var idadeComprador = entrada("Qual é a sua idade? ");

if(idadeComprador < 18){
  
console.log(`Olá senhor (a) ${NomeComprador} sua idade não corresponde com as nossas diretrize`);
}

if(idadeComprador >= 18){
  console.log(`olá senhor (a) ${NomeComprador} qual destes países você gostaria de viajar?`)
  
}