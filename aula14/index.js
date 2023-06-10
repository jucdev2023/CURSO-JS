
let num1 = 0.7;
let num2 = 0.1;

num1 += num2; // 0.8
num1 += num2; // 0.9
num1 += num2; // 1.0
num1 += num2; // 1.1
num1 += num2; // 1.2
num1 += num2; // 1.3
num1 += num2; // 1.4
num1 += num2; // 1.5
num1 += num2; // 1.6
num1 += num2; // 1.7
num1 += num2; // 1.8
num1 += num2; // 1.9
num1 += num2; // 2.0




num1 = parseFloat(num1.toFixed(2)) // pode utilizar parsefloat e Number


console.log(num1)
console.log(Number.isInteger(num1))

// console.log(num1.toString() + num2);
// num1 = num1.toString();
//console.log (num1.toString(2))
//console.log (num1.toFixed()) 
//console.log (Number.isInteger(num1)) = ele vai retornar para mim true o false | se é inteiro ou não
//console.log(Number.isNaN(num1)) = se essa conta for um NaN ele vai me retornar um true
   //let temp = num1 + '5'; = não faça conta com string

   //console.log(Number.isInteger(num1)) = é um método em JavaScript que verifica se um valor é um número inteiro. Ele retorna true



/* 
ANOTAÇÕES QUE FAÇO DURANTE A AULA
   
---------------------------------------------------------------------------------------------------------------------------------------------------------
  -> console.log (num1.toString + num2) -> converter o num1 e convertendo para uma string, porem, quando eu faço isso eu não estou editando a minha variável número, ela ainda continua sendo um Number, basicamente eu só estou retornando um valor temporariamente

  1-console.log (num1.toString() + num2)
  2-caso eu queira realmente altera o meu num1 para uma string -> num1 = num1.toString();
  3- Outra coisa que o toString pode fazer -> 3.1- caso eu queria o valor em número binário, eu posso continuar usando o toString, eu coloco toString(2), e ai eu vejo a representação binária de um número

  assim como string, number tbm tem várias coisas associadas a ele
  se eu quiser alterar para uma string de fato, -> num1 = num1.toString( )

  -4 valores literais, o valor que voce põe, sem a váriavel -> let num1 = 10 <- um valor literal
  5- As contas em javaScript segue um padrão IEEE 754-2008
  6- podemos resolver a imprecisão do valor fazendo contas



  -------------------------------------------------------------------------------------------------------------------------------------------------------


 
*/