var vcorfundo
var vcorfonte
var vnome = 'fnome'

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
    vnome = document.getElementById('fnome').ariaValueMax;
    localStorage.corfundo=vcorfundo;
    localStorage.corfonte=vcorfonte;
    localStorage.nome=vnome;
    };
