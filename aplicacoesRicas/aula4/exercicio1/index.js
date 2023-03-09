//Criamos a variavel para receber um valor
var pessoa = window.prompt("Entre com seu nome: ");
var endereco = window.prompt("Informe seu endereço: ");
var cpf = window.prompt("Seu cpf: ");
var NumDep = window.prompt("Quantas pessoas moram com você: ");


//Vamos criar o localStorage. Ele vem do window. No caso vamos usar o SetItem.
//window.localStorage.setItem("nome", nome);

//Podemos escrever de uma maneira mais curta
localStorage.setItem("nome", pessoa);
localStorage.setItem("endereço", endereco);
localStorage.setItem("cpf", cpf);
localStorage.setItem("Numero de dependentes", NumDep);

//Para recuperar o valor armazenado em uma key do localStorage, usamos o gerItem;
//alert(localStorage.getItem("nome"))

//Se ao invés de apresentar a key em uma janela alert, e quiser apresentar na página podemos utilizar o document.write:
//document.write("Seja Bem vindo: " + pessoa);

//Exercicio: ultilize o mesmo procedimento e crie variáveis para endereço, cpf, numero de dependentes

document.write("<br><h2>Seja Bem vindo: " + pessoa +"<br>Você Mora em: "+endereco+"<br>Seu cpf é: "+cpf+"<br>Morando com "+NumDep+" pessoas"+"</h2>");