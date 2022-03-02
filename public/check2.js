"use strict";

initMap();
var currtime = new Date().toLocaleString("en-US", { dateStyle: "short", timeStyle: "short" });

var newItem = getCookie('itemname');
var elemx = document.querySelector('#thingname');
elemx.innerText = newItem + " availability as of " + currtime;

var newStore = getCookie('storename');
var elem = document.querySelector('#namestore');
elem.innerText = "Apple " + newStore;