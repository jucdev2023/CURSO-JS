

//* vamos precisar manipular o botão enviar, para que ele não envie o formulário
//* tudo que ocorre no navegador é considerado um evento

//* exemplo de eventos no navegador: mexer o mouse, clicar em um lugar no navegador, quando eu digito no input, quando eu redimensiono. tem evento pra praticamente tudo. podemos colocar um espião no evento -> exemplo: quando o mouse se mexer faça isso e etc..

//* Escopo global: onde tudo está

//* tudo que estiver dentro do escopo da minha função vai estar protegido do escopo global



//* o que precisamos nesse momento é não atualizar a página
//* primeira coisa que vamos fazer é selecionar o nosso formulário, atrabés da classe que colocamos la no html.


/* //EXPLICANDO O CÓDIGO

//* vamos utilizar pra selecionar coisas em javaScript. que é muito similar ao que o Jquery faz. Usando o document.querySelector


const form = document.querySelector('.form') //* selecionando a classe form, la do html com o document.querySelector. podemos selecionar tanto uma classe, como um id

- A gente criou uma variável para armazenar o form
- vamos colocar espiões, isso é um evento.

 //* temos algumas maneiras de colocar espiões 

 form.onsubmit = function (evento) { //* selecionamos o form, e depois o que vamos capturar, ele vai recerber uma função, com o parametro evento.
 
    evento.preventDefault() //* nesse evento você previne o navegador de atualizar
 
        
        
    } 


    
*/

/*
 jetio mais moderno
 function meuEscopo() {
    const form = document.querySelector('.form');
    
    
    function recebeEventoForm(evento) {
        evento.preventDefault();
        console.log(` form nao foi enviado ${contador}`)
        
    }
    form.addEventListener('submit', recebeEventoForm); // * nesse jeito mais moderno, nao precisamos usar o onsubmit, apenas submit, e ele vai receber uma função
}
meuEscopo();
*/



//* sempre que você usa o sinal de igual, precisamos terminar com ponto e virgula. ;

function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
   
   
   

    const pessoas = [];
    

    
    
    
    



    
    
    function recebeEventoForm(evento) {
        

        evento.preventDefault();
        
        const nome = form.querySelector('.nome');   //* buscando coisas que estao dentro do form
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');
       

       

        pessoas.push({ //* pegamos o array pessoas, e para adicionar coisas em um array é preciso colocar .push, fizemos o seguinte ->
            /*
               pessoas. push () e dentro do array colocamos os objetos
               nome:
               sobrenome:
               peso:
               altura:

               depois fizemos o seguinte

               nome: + a variavel nome.value
               sobrenome + a variavel sobrenome.value


               lembrando que para ver o que foi digitado no input é preciso usar o value. entao pegamos a variavel nome e colocamos o value


            */
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value


        })

        
        console.log(pessoas)
        resultado.innerHTML += `<P>${nome.value} </P>` //* colocando oque foi digitado dentro do input no documento html, esses valores foram armazenado na variavel resultado
        resultado.innerHTML += `<br>${sobrenome.value} </P>`
        resultado.innerHTML += `<br>${peso.value} </P>`
        resultado.innerHTML += `<br>${altura.value} </P>`
       



        
      

      
      

      
        

    
        

       
        
       
        
    
        
    };
    form.addEventListener('submit', recebeEventoForm); 
}
meuEscopo();