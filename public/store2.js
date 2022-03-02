'use strict';

initMap();

var newStore = getCookie('storename');
var elem = document.querySelector('#namestore');
elem.innerText = "Apple " + newStore;