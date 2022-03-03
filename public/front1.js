"use strict";
let map;

function initMap() {
	map = new google.maps.Map(document.getElementById("map"), {
		center: {
			lat: 37.33486,
			lng: -122.00895
		},
		zoom: 18,
		mapTypeId: 'satellite'
	});
}