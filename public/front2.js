'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

initMap();

var ul = document.getElementById("hideul");
for (var h = 0; h < allStores.length; h++) {
	var rowStore = allStores[h];
	var rowNum = rowStore[0];
	var rowLat = rowStore[1].toString();
	var rowLon = rowStore[2].toString();
	var rowName = rowStore[3];
	var row1 = rowStore[4];
	var row2 = rowStore[5];
	var row3 = rowStore[6];
	var row4 = rowStore[7];
	var row5 = rowStore[8];

	var _li = document.createElement('li');
	ul.appendChild(_li);

	var anc = document.createElement('a');
	anc.setAttribute("class", "option");
	anc.setAttribute("href", "store.htm");
	var onclicky = "return cook('".concat(rowNum, "', this, ", rowLat, ", ", rowLon, ", \"", row1, "\", \"", row2, "\", \"", row3, "\", \"", row4, "\", \"", row5, "\");");
	anc.setAttribute("onClick", onclicky);
	anc.appendChild(document.createTextNode(rowName));
	_li.appendChild(anc);
};

var input = document.getElementById("myInput");
var li = document.querySelectorAll("#hideul li");

var suggest = function suggest() {
	var val = input.value.trim(),
	    reg = new RegExp(val, "i");
	[].concat(_toConsumableArray(li)).forEach(function (el) {
		return el.style.display = val && reg.test(el.textContent) ? "block" : "none";
	});
};

input.addEventListener("input", suggest);

var storenum = "";

function setCookie(cName, cValue, expDays) {
	var date = new Date();
	date.setTime(date.getTime() + expDays * 24 * 60 * 60 * 1000);
	var expires = "expires=" + date.toUTCString();
	document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
}

setCookie('storenum', storenum, 30);