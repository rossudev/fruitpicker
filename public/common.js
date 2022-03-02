'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

['store1', 'store2', 'store3', 'store4', 'store5'].forEach(function (lookStore) {
	var result = 0;
	var thisCook = getCookie(lookStore);

	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = allStores.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var _step$value = _slicedToArray(_step.value, 2),
			    index = _step$value[0],
			    value = _step$value[1];

			if (value[0] == thisCook) {
				result = index;
				break;
			}
		}
	} catch (err) {
		_didIteratorError = true;
		_iteratorError = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion && _iterator.return) {
				_iterator.return();
			}
		} finally {
			if (_didIteratorError) {
				throw _iteratorError;
			}
		}
	}

	var rowNum = allStores[result][0];
	var rowLat = allStores[result][1];
	var rowLon = allStores[result][2];
	var rowName = allStores[result][3];
	var row1 = allStores[result][4];
	var row2 = allStores[result][5];
	var row3 = allStores[result][6];
	var row4 = allStores[result][7];
	var row5 = allStores[result][8];

	var anc = document.createElement('a');
	anc.setAttribute("class", "option");
	anc.setAttribute("href", "check.htm");
	var onclicky = "return cook('".concat(rowNum, "', this, ", rowLat, ", ", rowLon, ", \"", row1, "\", \"", row2, "\", \"", row3, "\", \"", row4, "\", \"", row5, "\");");
	anc.setAttribute("onClick", onclicky);
	anc.appendChild(document.createTextNode(rowName));
	var thisdiv = document.getElementById("neareststores");
	thisdiv.appendChild(anc);
});