/* 


#######operadores lógicos#####

&& -> AND -> E  (DOIS E COMERCIAL) todas as expressoes precisam ser verdadeira para retornar verdadeiro

| | - > or -> ou

! -> Not -> NÃO
- são utilizados para checar mais de uma comparaçao



*/

/* 
&& -> and -> E
const expressaoAnd = true && true && true && false;
console.log(expressaoAnd) //* me retornou falso, porque nenhuma é verdadeira  

*/

/* const usuario = 'Luiz';
const senha = 12345;

const vaiLogar = usuario === 'Luiz' || senha === 123456;
console.log(vaiLogar)
*/

// console.log(!!false); //invertendo o valor do false, se negar duas vezes ele passa a ser false" ele retorna pro valor original


// - console.log("juliana silva" && "maria" && 0); // aqui ele vai retornar o valor falso
// - console.log ("pedro santos" && true && 232131231) // aqui ele vai me rertornar o utlimo valor, que no caso é  "joao santos"

//console.log("luiz" && "" && "maria")
// const expressaoAnd = true && true && true && true && false
const expressaoOr = true || false;
//     console.log(expressaoAnd);
console.log(expressaoOr);
