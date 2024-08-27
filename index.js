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

const idadeComprador = 24;

if(idadeComprador < 18){
  console.log("Infelizmente você é menor de idade e não podemos vender sua passagem")
}

if(idadeComprador >= 18){
  console.log("Qual o seu destino?")
}