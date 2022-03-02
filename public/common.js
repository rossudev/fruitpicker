[ 'store1', 'store2', 'store3', 'store4', 'store5' ].forEach(function(lookStore) {
	let result = 0;
	let thisCook = getCookie(lookStore);

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
		"\");"
	);
	anc.setAttribute("onClick", onclicky);
	anc.appendChild(document.createTextNode(rowName));
	let thisdiv = document.getElementById("neareststores");
	thisdiv.appendChild(anc);
});