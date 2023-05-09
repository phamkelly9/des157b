(function(){
    'use strict';

    // add your script here
    var map = L.map('map').setView([37.338207, -121.886330], 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);  

    var mitsuwa = L.marker([37.315140, -121.977660]).addTo(map);
    mitsuwa.bindPopup("<b>Mitsuwa</b><br>This is where I go to get mochi ice cream.");

    var sunright = L.marker([37.356470, -122.017510]).addTo(map);
    sunright.bindPopup("<b>Sunright</b><br>This is where I go if I want boba!");

    var row = L.marker([37.319859, -121.948990]).addTo(map);
    row.bindPopup("<b>Santana Row</b><br>I go here to shop.");

    var circle = L.circle([37.334789, -121.888138], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 500
    }).addTo(map);

    circle.bindPopup("<b>Japantown</b><br>This is where I go if I want sushi or halo halo.")

    
    
}());