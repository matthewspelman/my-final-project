console.log('This file is responsible for running your JavaScript')

//google maps api setup here

navigator.geolocation.getCurrentPosition(handleResponse)

function handleResponse(position) {
  console.log(position)
  buildMap(position.coords.latitude, position.coords.longitude)
}

function buildMap(latitude, longitude) {
  var map = new google.maps.Map(document.querySelector('#map'), {
    center: {
      lat: latitude,
      lng: longitude,
    },
    zoom: 12,
})

  var marker = new google.maps.Marker({
    position: {
      lat: latitude,
      lng: longitude,
    },
    map: map,
  })
}

//MEDITATION MARKERS HERE
function renderMeditationCenterMarkers(centers) {
	centers.forEach(function(center) {
		var centerLat = center.lat / 1000000
		var centerLng = center.lng / 1000000
    
		var marker 
    });
}


//chat bot
//https://hubot.github.com/

