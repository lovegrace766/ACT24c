var map = L.map("map").setView([8.359581, 124.868626], 14);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


// Create a circle


var circle = L.circle([8.360413, 124.868446], {
    color: 'red',
    fillColor: 'rgba(165, 13, 13, 0.85)',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);


// Creating a polygon


var polygon = L.polygon([
    [8.36939, 124.86756],
    [8.37738, 124.86640],
    [8.38493, 124.87764]
]).addTo(map);


// Create a marker
var marker = L.marker([8.36901, 124.88211]).addTo(map);


// Working with Pops
marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
circle.bindPopup("I am a circle.");
polygon.bindPopup("I am a polygon.");


// Stand alone pop up
var popup = L.popup()
    .setLatLng([8.359581, 124.868626])
    .setContent("I am a standalone popup.")
    .openOn(map);

// Dealing with events
// function onMapClick(e) {
//     alert("You clicked the map at " + e.latlng);
// }

// map.on('click', onMapClick);

var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);
