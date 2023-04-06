addEventListener('message', function(event){
    const inputNumber2 = event.data;
    let fatorial = 1
    
    for(let i= 1 ; i<= inputNumber2; i++) {
        
     fatorial = fatorial * i ;
     postMessage(fatorial)
    }
});

