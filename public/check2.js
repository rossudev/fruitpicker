initMap();
const whatpage = true;

//let currtime = new Date().toLocaleString("en-US", { dateStyle: "short", timeStyle: "short" });

let newItem = getCookie('itemname');
const elemx = document.querySelector('#availasof');
elemx.innerText = newItem + " availability as of ";