/*

const array =  [1,2,3,4]; // eu nao posso reatribuir valor 

array.push(4);
array[0] = 'luiz'
array = 'outra'; //nao pode

*/

// um exemplo aqui, teriamos que criar várias variaveis
// seria legal a gente agrupar essas váriveis, em uma pessoa só, melhor que criar vairas variaveis


/*
const nome01 = 'luiz';
const sobrenome01 = 'miranda';
const idade01 = 33

const nome02 = 'Maria';
const sobrenome02 = 'Silva';
const idade02 = 50

*/

//quando eu preciso criar um objeto, eu uso as chaves
// eu posso criar atributo para essa pessoa1

/* const  pessoa1  = {
   nome: 'luiz',
   sobrenome: 'silva',
   idade: 25



};


const pessoa2 = {
    nome: 'fernanda',
    sobrenome: 'santos',
    idade: 45

};



console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa2.idade);
console.log(pessoa2.sobrenome);

*/

/* function criaPessoa (nome, sobrenome, idade) { //essa funçao ela retorna um objeto, uma fabrica de objetos
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
}

const pessoa1 = criaPessoa ('luiz', 'santos', 24)
const pessoa2 = criaPessoa ('luiza', 'silva', 33)
const pessoa3 = criaPessoa ('Marcelo', 'Miranda', 55)
const pessoa4 = criaPessoa ('Pedro', 'Ferreira', 30)
const pessoa5 = criaPessoa ('Otavio', 'FSouza', 29)
console.log(pessoa1.nome)
console.log(pessoa2.nome)

*/

const pessoa1 = {
    nome: 'luiz',
    sobrenome: 'silva',
    idade: 25,

 fala ( )  { //metodo fala que executa ações
    console.log(`${this.nome} ${this.sobrenome} está falando...`);

}
    
};

pessoa1.fala( );