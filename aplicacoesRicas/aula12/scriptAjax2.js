//executa a função anônima depois que toda a página for carregada
window.onload = function(){
    var url ="https://api.openweathermap.org/data/2.5/weather?";
    var minhaApi = "b057f5d433a32b396d7b1aadfa385aa3";
    var resultado;
    var cidade;

        cidades.onchange = function(){
            //cria obj ajax
            var ajax = null;
            //testa o navegador
            if(window.XMLHttpRequest){
                ajax = new XMLHttpRequest();
            }else if(window.ActiveXObject){
                ajax = new ActiveXObject("Msxml2.XMLHTTP");
            }
        cidade = cidades.value;
        if(cidade != 0){
            //abri a pag via get 
            ajax.open("GET",url+'appid='+minhaApi+'&q='+cidade+'&units=metric&lang=pt',true);
            ajax.send(null);
            //identificar o estado do carregamento
            ajax.onreadystatechange = function(){
                //ver se chegou no navegador
                if(ajax.readyState ==4){
                    if(ajax.status == 200){
                        //console.log(ajax);
                        resultado = JSON.parse(ajax.responseText);
                        console.log(resultado);
                        console.log(resultado.name);
                        console.log(resultado.main.temp_min);
                        console.log(resultado.main.temp_max);
                        console.log(resultado.weather[0]);

                         //verifica se o conteudo ja chegou na página
                         console.log(ajax.responseText);

                         resultado = JSON.parse(ajax.responseText);
 
                         let nome = document.getElementById('cidade');
                         let min = document.getElementById('min');
                         let max = document.getElementById('max');
                         let desc = document.getElementById('desc');
 
                         nome.innerText = resultado.name;
                         min.innerText = resultado.main.temp_min;
                         max.innerText = resultado.main.temp_max;
                         desc.innerText = resultado.weather[0].description;
                    }
                }
            }
        }
    }
}

