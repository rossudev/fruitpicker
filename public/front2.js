initMap();

let ul = document.getElementById("hideul");
for (let h = 0; h < allStores.length; h++) {
	let rowStore = allStores[h];
	let rowNum = rowStore[0];
	let rowLat = rowStore[1].toString();
	let rowLon = rowStore[2].toString();
	let rowName = rowStore[3];
	let row1 = rowStore[4];
	let row2 = rowStore[5];
	let row3 = rowStore[6];
	let row4 = rowStore[7];
	let row5 = rowStore[8];
	let mile1 = rowStore[9];
	let mile2 = rowStore[10];
	let mile3 = rowStore[11];
	let mile4 = rowStore[12];
	let mile5 = rowStore[13];
	let storeLoc = rowStore[14];
	let longName = rowName.concat( ", ", storeLoc );
	
	let li = document.createElement('li');
	ul.appendChild(li);
	
	let anc = document.createElement('a');
	anc.setAttribute("class", "option");
	anc.setAttribute("href", "store.htm");
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
		mile1, 
		", ",
		mile2, 
		", ",
		mile3, 
		", ",
		mile4, 
		", ",
		mile5, 
		", \"",
		rowName,
		"\", \"",
		storeLoc,
		"\" );"
	);
	anc.setAttribute("onClick", onclicky);
	anc.appendChild(document.createTextNode(longName));
	li.appendChild(anc);
};

const input = document.getElementById("myInput");
const li = document.querySelectorAll("#hideul li");

const suggest = () => {
	const val = input.value.trim(),    
	reg = new RegExp(val, "i");    
	[...li].forEach(el => el.style.display = val && reg.test(el.textContent) ? "block" : "none");
};

input.addEventListener("input", suggest);

let storenum = "";

function setCookie(cName, cValue, expDays) {
	let date = new Date();
	date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
	const expires = "expires=" + date.toUTCString();
	document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
}

setCookie('storenum', storenum, 30);