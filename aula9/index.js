
//ECMAScript 2015 (ES6) é uma padronização da alinguagem javascript, DE ALGUM RECURSO QUE FOI INTRODUZIDO NA LINGUAGEM 
// string, number, undefined, null, boolean, symbol
const nome = 'luiz'; //string
const nome1 = "luiz";//string
const nome2 = `luiz`;//string

const num1 = 10//number
const num2 = 43.33//number

let nomeAluno; // undefined -> não aponta para local nenhum da memória
const sobrenomeAluno = null; // nulo -> não aponta para local nenhum na memroia, porem undefined e null são diferentes
const aprovado = true; // valor boolean, aluno aprovado, se ele reprovou, eu coloco false. vai muito alem de true ou false (valor lógico)


//se quiser ver o tipo ->
 
console.log(typeof nome, nome)

let a = 2;
const b = a;
console.log (a, b); // 2, 2
//uma cópia 
 a = 3
console.log (a, b) // 3, 2