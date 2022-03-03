let newStore = getCookie('storename');
const elem = document.querySelector('#namestore');

let apptxt = "";
if ( newStore === "Apple Park Visitor Center" ) {
	apptxt = "";
} else {
	apptxt = "Apple ";
};

elem.innerText = apptxt + newStore;

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
		"\" );"
	);
	
	let thistext = rowName.concat(" (", thisMile, " mi)");
	
	anc.setAttribute("onClick", onclicky);
	anc.appendChild(document.createTextNode(thistext));
	let thisdiv = document.getElementById("neareststores");
	thisdiv.appendChild(anc);
});