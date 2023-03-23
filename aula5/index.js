
var vcorfundo
var vcorfonte
var vnome

function defineCor(op,cor){
    if(op==1){
    document.body.style.backgroundColor=cor;
    vcorfundo = cor;
    }else{
    document.body.style.color=cor;
    vcorfonte = cor;
    }
    };

function gravar(){
    var visivel = document.getElementById('fconf');
    vnome = document.getElementById('fnome').ariaValueMax;
    localStorage.corfundo=vcorfundo;
    localStorage.corfonte=vcorfonte;
    localStorage.nome=vnome;
    visivel.style.display="none";/*oculta o formulário*/
    };

function inicia(){
    if(localStorage.nome){//se esse if for verdadeiro, significa que o localStorage já existe.
        vcorfundo=localStorage.corfundo;
        vcorfonte=localStorage.corFonte;
        vnome=localStorage.nome;
        //chamanos a função defineCor(op,cor)
        defineCor(1,vcorfundo);
        defineCor(2,vcorfonte);
        document.getElementById("Painel").innerHTML="Bem vindo "+ vnome +"<hr>"
    }
}
//e temos que fazer a chamada a essa função no final do script,depois que toda a página já foi carregada 

function mostrar(){
    var visivel = document.getElementById('fconf');
    visivel.style.display = "block";
};
/*ao definir o display como "block", o elemento se torna visivel e passa a ocupar toda a largura disponivel na linha, forçando quebras de linha antes e depois dele*/

window.addEventListener("load",inicia);