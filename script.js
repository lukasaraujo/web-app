// function initMap() {
//   // The location of Uluru
//   let uluru = {lat: -25.344, lng: 131.036};
//   // The map, centered at Uluru
//   let map = new google.maps.Map(
//       document.getElementById('map'), {zoom: 15, center: uluru});
//   // The marker, positioned at Uluru
//   let marker = new google.maps.Marker({position: uluru, map: map});
//   }


// if (navigator.geolocation) {
//   console.log('Geolocation is supported!');
// }
// else {
//   console.log('Geolocation is not supported for this Browser/OS.');
// }

// window.onload = function() {
//   let startPos;
//   let geoSuccess = function(position) {
//     startPos = position;
//     document.getElementById('startLat').innerHTML = startPos.coords.latitude;
//     document.getElementById('startLon').innerHTML = startPos.coords.longitude;
//   };
//   navigator.geolocation.getCurrentPosition(geoSuccess);
// };


let mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
 
mapboxgl.accessToken = 'pk.eyJ1IjoibHVrYXNhcmF1anUiLCJhIjoiY2pscTFzMzB3MmI1dTNxbW5lcjJyN21xOSJ9.opWDhg7esLTpGwWwWcxFXQ';
let map = new mapboxgl.Map({
container: 'body',
style: 'mapbox://styles/mapbox/streets-v10'
});
