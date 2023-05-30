// resolução do professor, que criou uma varTemp, uma maneira mais antiga de resolver
//ele basicamente criou uma variavel temporaria para armazenar o valor da variavel A
let varA = 'A'
let varB = 'B'
let varC = 'C'

const varATemp = varA
varA = varB
varB = varC
varC = varATemp 

console.log (varA, varB, varC)