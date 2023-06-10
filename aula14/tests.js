let num1 = 0.7;
let num2 = 0.1;

num1 = ((num1 * 100) + (num2 * 100)) /100;
num1 = ((num1 * 100) + (num2 * 100)) /100;
num1 = ((num1 * 100) + (num2 * 100)) /100;
num1 = ((num1 * 100) + (num2 * 100)) /100;
num1 = ((num1 * 100) + (num2 * 100)) /100;
num1 = ((num1 * 100) + (num2 * 100)) /100;

console.log(num1)
console.log(Number.isInteger(num1))

/* 

resolvendo a imprecisão com conta
é mais complexo, porem não temos mais imprecisão
basicamente a gente fez o seguinte calculo ->

(0.7 * 100 + 0.1 * 100) /100

(70         +      10 )  /  100

          80/100
          0.8


*/