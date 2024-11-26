let geojsonFeature;


var map = L.map('mapa').setView([19.29102, -99.498533], 17);

// L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     maxZoom: 19,
//     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
// }).addTo(map);

///OSCURITO
L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.{ext}', {
	minZoom: 0,
	maxZoom: 20,
	attribution: false,
	ext: 'png'
}).addTo(map);


fetch('map.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // Parse JSON response
  })
  .then(data => {
    geojsonFeature = data; // Store the parsed JSON data into the variable
    console.log(geojsonFeature); // Optionally log to the console for debugging
    L.geoJSON(geojsonFeature).addTo(map); //añadir las líneas al mapa
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });

  var marker = L.marker([19.29102, -99.498533]).addTo(map);
  var circle = L.circle([19.29102, -99.498533], {
    color: '#ffA500',
    fillColor: '#00ff00',
    fillOpacity: 0.5,
    radius: 50
}).addTo(map);

var polygon = L.polygon([
    [19.291406, -99.502227],
    [19.291395, -99.501479],
    [19.291302, -99.501479],
    [19.291309, -99.502224],
],{
  color: '#800080',
  fillColor: '#ff00ff',
  fillOpacity: 0.5,
  radius: 50
}).addTo(map);

marker.bindPopup("<b>UAM Lerma</b><br>").openPopup();
circle.bindPopup("punto de reunión");
polygon.bindPopup("G8");



var myIcon = L.icon({
    iconUrl: 'https://www.comunicacionsocial.uam.mx/identidaduam/images/el-emblema.jpg',
    iconSize: [80, 80],
    iconAnchor: [10, 94],
    popupAnchor: [3, 80]
    
});



L.marker([19.291869, -99.500079], {icon: myIcon}).addTo(map);
