/* 


operadores lógicos
       EN    PT 
&& -> AND -> E  (DOIS E COMERCIAL) todas as expressoes precisam ser verdadeira para retornar verdadeiro

| | - > or -> ou

! -> Not -> NÃO


*/

/* 
&& -> and -> E
const expressaoAnd = true && true && true && false;
console.log(expressaoAnd) //* me retornou falso, porque nenhuma é verdadeira  

*/

const usuario = 'luiz';
const senha = 12345;
                     //true                    //false
const vaiLogar = usuario === 'luiz' && senha === '123457';
console.log(vaiLogar)
