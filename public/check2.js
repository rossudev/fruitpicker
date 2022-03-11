initMap();
const whatpage = true;

let currtime = new Date().toLocaleString("en-US", { dateStyle: "short", timeStyle: "short" });

let newItem = getCookie('itemname');
const elemx = document.querySelector('#thingname');
elemx.innerText = newItem + " availability as of " + currtime;

/* let newlocc = new google.maps.LatLng(parseFloat(newStLat), parseFloat(newStLon));
newMark(locc); */