let index1 = new Worker('index1.js');

function calcularQuadrado(){
    
    index1.postMessage(document.getElementById('inputNumber1').value);

}

index1.addEventListener('message', function(event){
    const quadrado = event.data;
    document.getElementById('resultado1').textContent=('O quadrado do seu número é:' + quadrado);
});

//------------------------------------------------------------------

let index2 = new Worker('index2.js');

function calcularFatorial(){
    
    index2.postMessage(document.getElementById('inputNumber2').value);

}

index2.addEventListener('message', function(event){
    const fatorial = event.data;
    document.getElementById('resultado2').textContent=('Seu fatorial será de: ' + fatorial);
});
