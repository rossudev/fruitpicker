let newStore = getCookie('storename');
let newLoc = getCookie('storeloc');
const elem = document.querySelector('#namestore');

let apptxt = "";
let aftertxt = "";

if ( newStore === "Apple Park Visitor Center" ) {
	apptxt = "";
} else {
	apptxt = "Apple ";
};

if ( !whatpage ) {
	aftertxt = " - " + newLoc;
};

elem.innerText = apptxt.concat( newStore, aftertxt );

const icon = {
	url: "favicon.png",
	scaledSize: new google.maps.Size(50, 50),
	origin: new google.maps.Point(0,0),
	anchor: new google.maps.Point(25, 25)
};

function newMark(locate,nameit) {
	const marker = new google.maps.Marker({
		position: locate,
		icon: icon,
		map: map,
		draggable: false,
		title: nameit,
		scaledSize: new google.maps.Size(10, 10)
	});
	
	const infowindow = new google.maps.InfoWindow({
		content: nameit,
		maxWidth: 200,
		disableAutoPan: true
	});
	
	infowindow.open(map, marker);
	return marker;
};

[ ['store1', "mi1"], ['store2', "mi2"], ['store3', "mi3"], ['store4', "mi4"], ['store5', "mi5"] ].forEach(function(lookStore) {
	let result = 0;
	let thisCook = getCookie(lookStore[0]);
	let thisMile = getCookie(lookStore[1]);

	for ( let [index,value] of allStores.entries() ) {
		if (value[0] == thisCook) {
			result = index;
			break;
		}
	}

	let rowNum = allStores[result][0];
	let rowLat = allStores[result][1];
	let rowLon = allStores[result][2];
	let rowName = allStores[result][3];
	let row1 = allStores[result][4];
	let row2 = allStores[result][5];
	let row3 = allStores[result][6];
	let row4 = allStores[result][7];
	let row5 = allStores[result][8];
	let mil1 = allStores[result][9];
	let mil2 = allStores[result][10];
	let mil3 = allStores[result][11];
	let mil4 = allStores[result][12];
	let mil5 = allStores[result][13];
	let loc = allStores[result][14];
	
	let anc = document.createElement('a');
	anc.setAttribute("class", "option");
	if ( whatpage ) {
		anc.setAttribute("href", "check.htm");
	} else {
		anc.setAttribute("href", "store.htm");
	};
	let onclicky = "return cook('".concat(
		rowNum,
		"', this, ",
		rowLat,
		", ",
		rowLon,
		", \"", 
		row1,
		"\", \"",
		row2,
		"\", \"",
		row3,
		"\", \"",
		row4,
		"\", \"",
		row5,
		"\", ",
		mil1, 
		", ",
		mil2, 
		", ",
		mil3, 
		", ",
		mil4, 
		", ",
		mil5, 
		", \"",
		rowName,
		"\", \"",
		loc,
		"\" );"
	);
	
	let thistext = rowName.concat(" (", thisMile, " mi)");
	
	anc.setAttribute("onClick", onclicky);
	anc.appendChild(document.createTextNode(thistext));
	let thisdiv = document.getElementById("neareststores");
	thisdiv.appendChild(anc);
	
	let locc = new google.maps.LatLng(rowLat, rowLon);
	let markerhere = newMark(locc,rowName);
});

let newlocc = new google.maps.LatLng(parseFloat(newStLat), parseFloat(newStLon));
newMark(newlocc, newStore);