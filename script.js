//initializations
initMap();

//create observer
let observer = new IntersectionObserver((entries, observer) => { 
    entries.forEach(entry => {
        //console.log(entry);
        if(entry.isIntersecting){
        //console.log(entry.target.dataset.name);
        play(entry.target.dataset.name);
        observer.unobserve(entry.target);
        }
    });
}, {threshold: 0.3});
//observe all sections
document.querySelectorAll('.section').forEach(p => { observer.observe(p) });

cityText = document.getElementById("city-text");
var mapAnimation = {
    play: function(){
        setTimeout(mapAnimation.campinas, 1000);
        setTimeout(mapAnimation.curitiba, 6000);
    },
    curitiba: function(){
        cityText.innerHTML += ' mas me mudei para <a onclick="mapCuritiba()" href="#city">Curitiba</a> aos 5 anos';
        mapCuritiba();
    },
    campinas: function(){
        setTimeout(() => {
            cityText.innerHTML = 'Nasci em <a onclick="mapCampinas()" href="#city">Campinas</a>,';
        }, 1000);
        mapCampinas();
    }
}
var prod_anim = {
    play: function(){
        //delayed play
        setTimeout(function(){
            document.getElementById("prod_design-video").play();
        }, 1000);
    }
}
var keys_anim = {
    play: function(){
        //delayed play
        setTimeout(function(){
            document.getElementById("keys-video").play();
        }, 1000);
    }
}


var video = {
    board: document.getElementById("board-video"),
    city: mapAnimation,
    prod_design: prod_anim,
    keys: document.getElementById("keys-video")
}

function play(section){
    if(section in video){
        video[section].play();
    }
}

var map;
function initMap(){
    //initialize map
    map = L.map('map', { scrollWheelZoom: false }).setView([-22.91549, -47.06526], 3);

    var Stamen_Toner = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.{ext}', {
        attribution: '<a href="http://stamen.com">Stamen Design</a>',
        subdomains: 'abcd',
        minZoom: 0,
        maxZoom: 20,
        ext: 'png'
    });
    Stamen_Toner.addTo(map);
}
function mapCuritiba(){
    map.flyTo([-25.44316, -49.27255], 12);
}
function mapCampinas(){
    map.flyTo([-22.91549, -47.06526], 12);
}