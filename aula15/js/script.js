 const numero = Number(prompt('digite um número'))
 const numeroTitulo = document.getElementById('numero-titulo');
 const raizQuadrada  = document.getElementById ('raiz-quadrada');
  let notNumber = document.getElementById('notNumber')
  let numeroInteiro = document.getElementById('numeroInteiro')
  let baixo = document.getElementById('baixo')
  let cima = document.getElementById('cima')
  let casasDecimais = document.getElementById('casasDecimais')
 
 

 numeroTitulo.innerHTML = numero;
 raizQuadrada.innerHTML = Math.sqrt(numero);
 notNumber.innerHTML = Number.isNaN(numero)
 numeroInteiro.innerHTML = Number.isInteger(numero) 
 baixo.innerHTML = Math.floor(numero) // arredondando pra baixo
 cima.innerHTML = Math.ceil(numero) // arredondando para cima
 casasDecimais.innerHTML = numero.toFixed(2)

 

