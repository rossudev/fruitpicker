"use strict";

function getCookie(cName) {
	const name = cName + "=";
	const cDecoded = decodeURIComponent(document.cookie);
	const cArr = cDecoded .split('; ');
	let res;
	cArr.forEach(val => {
		if (val.indexOf(name) === 0) res = val.substring(name.length);
	})
	return res;
}

function setCookie(cName, cValue, expDays) {
		let date = new Date();
		date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
		const expires = "expires=" + date.toUTCString();
		document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
}

function thingie (pickitem, linkx) {
	setCookie('itempick', pickitem, 30);
	let x = linkx.innerText || linkx.textContent;
	setCookie('itemname', x, 30);
}

let newStLon = 14.425728;
let newStLat = 40.821142;
newStLat = getCookie('storelat');
newStLon = getCookie('storelon');

let map;

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