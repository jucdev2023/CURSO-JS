// avaliação de curto circuito
/*

&& - > false && false -> false " o valor mesmo"  // ele me retorna o valor false

*/

console.log("juliana silva" && "maria" && 0);
// aqui ele vai me rertornar o utlimo valor, que no caso é 0
// nesse caso, o ultimo valor é false, entao ele me retornou o ultimo valor false

// Em javaScript tudo é avaliado, ou em verdadeiro ou em falso. !!

/*
  FALSY 
- false (valores literal)
----------------------------------
0
" " ' ' `` (se a string estiver vazia é avaliada em false
null / undefined
NaN / not a number

---------------------------------------------------
qualquer coisa diferente desses valores ai, é true

---------------------------------------------------
console.log("juliana" && "joao" && "");
 primeiro ele vai checar se o juliana é true, depois joao e depois a string vazia e vai me retornar ela
*/