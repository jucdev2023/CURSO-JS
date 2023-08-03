

//* vamos precisar manipular o botão enviar, para que ele não envie o formulário
//* tudo que ocorre no navegador é considerado um evento

//* exemplo de eventos no navegador: mexer o mouse, clicar em um lugar no navegador, quando eu digito no input, quando eu redimensiono. tem evento pra praticamente tudo. podemos colocar um espião no evento -> exemplo: quando o mouse se mexer faça isso e etc..

//* Escopo global: onde tudo está

//* tudo que estiver dentro do escopo da minha função vai estar protegido do escopo global



//* o que precisamos nesse momento é não atualizar a página
//* primeira coisa que vamos fazer é selecionar o nosso formulário, atrabés da classe que colocamos la no html.


/* //EXPLICANDO O CÓDIGO

//* modo moderno que vamos utilizar pra selecionar coisas em javaScript. que é muito similar ao que o Jquery faz. Usando o document.querySelector


const form = document.querySelector('.form') //* selecionando a classe form, la do html com o document.querySelector. podemos selecionar tanto uma classe, como um id

- A gente criou uma variável para armazenar o form
- vamos colocar espiões, isso é um evento.

 //* temos algumas maneiras de colocar espiões 

 form.onsubmit = function (evento) { //* selecionamos o form, e depois o que vamos capturar, ele vai recerber uma função, com o parametro evento.
 
    evento.preventDefault() //* nesse evento você previne o navegador de atualizar
 
        
        
    } 


    
*/

//* sempre que você usa o sinal de igual, precisamos terminar com ponto e virgula. ;

function meuEscopo() {
    const form = document.querySelector('.form');
    form.onsubmit = function (evento) {
        evento.preventDefault()
        alert(1)
        
    };
}
meuEscopo();