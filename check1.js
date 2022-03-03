"use strict";

function getCookie(cName) {
	var name = cName + "=";
	var cDecoded = decodeURIComponent(document.cookie); //to be careful
	var cArr = cDecoded.split('; ');
	var res = void 0;
	cArr.forEach(function (val) {
		if (val.indexOf(name) === 0) res = val.substring(name.length);
	});
	return res;
}

function setCookie(cName, cValue, expDays) {
	var date = new Date();
	date.setTime(date.getTime() + expDays * 24 * 60 * 60 * 1000);
	var expires = "expires=" + date.toUTCString();
	document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
}

function thingie(pickitem) {
	setCookie('itempick', pickitem, 30);
}

var newStLat = -23.452297;
var newStLon = 151.950487;
newStLat = getCookie('storelat');
newStLon = getCookie('storelon');

var map = void 0;

function initMap() {
	map = new google.maps.Map(document.getElementById("map"), {
		center: {
			lat: parseFloat(newStLat),
			lng: parseFloat(newStLon)
		},
		zoom: 18,
		mapTypeId: 'hybrid'
	});
}