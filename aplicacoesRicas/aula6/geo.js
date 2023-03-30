var lat;
var lon;

//declarar uma função chamada geolocation, que será responsável por obter localização do usuario
function getLocation(){
    //testar se não existe a localização
    if(!navigator.geolocation)
        return null
        //se ele passar pelo erro,pegamos a localização
        //esta função chama o metodo getCurrentPosition do objeto navigator.geolocation que solicita a posição atual do usuario. Quando a posição é obtida com sucesso, a função callback fornecida (uma função anonima, nesse caso) é chamada com um objeto position como argumento (que chamamos de pos)
        navigator.geolocation.getCurrentPosition(function(pos){
            //asseguir vamos selecionar o elemento HTML com o id "late" e atualizar o seu conteudo de texto(innerText) com a latitude obtida a partirdo objeto position (pos.coords.latitude)
            lat = document.getElementById("lat").innerText=pos.coords.latitude
            //asseguir vamos selecionar o elemento HTML com o id "lon" e atualizar o seu conteudo de texto(innerText) com a longitude obtida a partirdo objeto position (pos.coords.longitude)
            lon = document.getElementById("lon").innerText=pos.coords.longitude

            initMap();
        })
    
}
function initMap() {
    // The location of Uluru
    const uluru = { lat: lat, lng: lon };
    
    // The map, centered at Uluru
    map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
    }
    