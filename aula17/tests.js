function soma (x=2, y=4) {
    const resultado = x * y
    return resultado // tudo que está abaixo de return nao é mais executado
}
console.log(soma()) 