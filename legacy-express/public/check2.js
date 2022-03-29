initMap();
const whatpage = true;

let newItem = getCookie('itemname');
const elemx = document.querySelector('#availasof');
elemx.innerText = newItem + " availability as of ";