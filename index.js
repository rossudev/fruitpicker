'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var configURL = "https://maps.googleapis.com/maps/api/js?key=";

var express = require('express');
var cookieParser = require('cookie-parser');
var request = require("request");
var flatMap = require('array.prototype.flatmap');
var replaceAll = require("string.prototype.replaceall");
var path = require("path");

var app = express();
app.use(cookieParser());
app.use(express.static('public'));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.get('/', function (req, res) {
	res.render("index", { layoutgmaps: configURL });
});

app.get('/index.htm', function (req, res) {
	res.render("index", { layoutgmaps: configURL });
});

app.get('/store.htm', function (req, res) {
	res.render("store", { layoutgmaps: configURL });
});

var skuList = _defineProperty({}, 'a', 'b');

app.get('/check.htm', function (req, res) {
	flatMap.shim();
	replaceAll.shim();
	var args = process.argv.slice(2);
	var itempick = req.cookies.itempick;

	if (itempick === "iphone") {
		var _skuList2;

		skuList = (_skuList2 = {}, _defineProperty(_skuList2, 'MLKP3LL/A', 'iPhone 13 Pro Max, 128GB, Sierra Blue'), _defineProperty(_skuList2, 'MLKN3LL/A', 'iPhone 13 Pro Max, 128GB, Gold'), _defineProperty(_skuList2, 'MLKM3LL/A', 'iPhone 13 Pro Max, 128GB, Silver'), _defineProperty(_skuList2, 'MLKL3LL/A', 'iPhone 13 Pro Max, 128GB, Graphite'), _defineProperty(_skuList2, 'MLKV3LL/A', 'iPhone 13 Pro Max, 256GB, Sierra Blue'), _defineProperty(_skuList2, 'MLKU3LL/A', 'iPhone 13 Pro Max, 256GB, Gold'), _defineProperty(_skuList2, 'MLKT3LL/A', 'iPhone 13 Pro Max, 256GB, Silver'), _defineProperty(_skuList2, 'MLKR3LL/A', 'iPhone 13 Pro Max, 256GB, Graphite'), _defineProperty(_skuList2, 'MLL03LL/A', 'iPhone 13 Pro Max, 512GB, Sierra Blue'), _defineProperty(_skuList2, 'MLKY3LL/A', 'iPhone 13 Pro Max, 512GB, Gold'), _defineProperty(_skuList2, 'MLKX3LL/A', 'iPhone 13 Pro Max, 512GB, Silver'), _defineProperty(_skuList2, 'MLKW3LL/A', 'iPhone 13 Pro Max, 512GB, Graphite'), _defineProperty(_skuList2, 'MLL53LL/A', 'iPhone 13 Pro Max, 1TB, Sierra Blue'), _defineProperty(_skuList2, 'MLL43LL/A', 'iPhone 13 Pro Max, 1TB, Gold'), _defineProperty(_skuList2, 'MLL33LL/A', 'iPhone 13 Pro Max, 1TB, Silver'), _defineProperty(_skuList2, 'MLL23LL/A', 'iPhone 13 Pro Max, 1TB, Graphite'), _defineProperty(_skuList2, 'MLTT3LL/A', 'iPhone 13 Pro, 128GB, Sierra Blue'), _defineProperty(_skuList2, 'MLTR3LL/A', 'iPhone 13 Pro, 128GB, Gold'), _defineProperty(_skuList2, 'MLTQ3LL/A', 'iPhone 13 Pro, 128GB, Silver'), _defineProperty(_skuList2, 'MLTP3LL/A', 'iPhone 13 Pro, 128GB, Graphite'), _defineProperty(_skuList2, 'MLU03LL/A', 'iPhone 13 Pro, 256GB, Sierra Blue'), _defineProperty(_skuList2, 'MLTY3LL/A', 'iPhone 13 Pro, 256GB, Gold'), _defineProperty(_skuList2, 'MLTX3LL/A', 'iPhone 13 Pro, 256GB, Silver'), _defineProperty(_skuList2, 'MLTW3LL/A', 'iPhone 13 Pro, 256GB, Graphite'), _defineProperty(_skuList2, 'MLU73LL/A', 'iPhone 13 Pro, 512GB, Sierra Blue'), _defineProperty(_skuList2, 'MLU43LL/A', 'iPhone 13 Pro, 512GB, Gold'), _defineProperty(_skuList2, 'MLU33LL/A', 'iPhone 13 Pro, 512GB, Silver'), _defineProperty(_skuList2, 'MLU13LL/A', 'iPhone 13 Pro, 512GB, Graphite'), _defineProperty(_skuList2, 'MLUD3LL/A', 'iPhone 13 Pro, 1TB, Sierra Blue'), _defineProperty(_skuList2, 'MLUC3LL/A', 'iPhone 13 Pro, 1TB, Gold'), _defineProperty(_skuList2, 'MLUA3LL/A', 'iPhone 13 Pro, 1TB, Silver'), _defineProperty(_skuList2, 'MLU93LL/A', 'iPhone 13 Pro, 1TB, Graphite'), _defineProperty(_skuList2, 'MLML3LL/A', 'iPhone 13, 128GB, Midnight'), _defineProperty(_skuList2, 'MLMT3LL/A', 'iPhone 13, 128GB, Blue'), _defineProperty(_skuList2, 'MLMN3LL/A', 'iPhone 13, 128GB, Pink'), _defineProperty(_skuList2, 'MLMM3LL/A', 'iPhone 13, 128GB, Starlight'), _defineProperty(_skuList2, 'MLMQ3LL/A', 'iPhone 13, 128GB, Red'), _defineProperty(_skuList2, 'MLMU3LL/A', 'iPhone 13, 256GB, Midnight'), _defineProperty(_skuList2, 'MLN13LL/A', 'iPhone 13, 256GB, Blue'), _defineProperty(_skuList2, 'MLMY3LL/A', 'iPhone 13, 256GB, Pink'), _defineProperty(_skuList2, 'MLMX3LL/A', 'iPhone 13, 256GB, Starlight'), _defineProperty(_skuList2, 'MLN03LL/A', 'iPhone 13, 256GB, Red'), _defineProperty(_skuList2, 'MLN23LL/A', 'iPhone 13, 512GB, Midnight'), _defineProperty(_skuList2, 'MLN83LL/A', 'iPhone 13, 512GB, Blue'), _defineProperty(_skuList2, 'MLN43LL/A', 'iPhone 13, 512GB, Pink'), _defineProperty(_skuList2, 'MLN33LL/A', 'iPhone 13, 512GB, Starlight'), _defineProperty(_skuList2, 'MLN53LL/A', 'iPhone 13, 512GB, Red'), _defineProperty(_skuList2, 'MLHM3LL/A', 'iPhone 13 Mini, 128GB, Midnight'), _defineProperty(_skuList2, 'MLHR3LL/A', 'iPhone 13 Mini, 128GB, Blue'), _defineProperty(_skuList2, 'MLHP3LL/A', 'iPhone 13 Mini, 128GB, Pink'), _defineProperty(_skuList2, 'MLHN3LL/A', 'iPhone 13 Mini, 128GB, Starlight'), _defineProperty(_skuList2, 'MLHQ3LL/A', 'iPhone 13 Mini, 128GB, Red'), _defineProperty(_skuList2, 'MLHT3LL/A', 'iPhone 13 Mini, 256GB, Midnight'), _defineProperty(_skuList2, 'MLHX3LL/A', 'iPhone 13 Mini, 256GB, Blue'), _defineProperty(_skuList2, 'MLHV3LL/A', 'iPhone 13 Mini, 256GB, Pink'), _defineProperty(_skuList2, 'MLHU3LL/A', 'iPhone 13 Mini, 256GB, Starlight'), _defineProperty(_skuList2, 'MLHW3LL/A', 'iPhone 13 Mini, 256GB, Red'), _defineProperty(_skuList2, 'MLHY3LL/A', 'iPhone 13 Mini, 512GB, Midnight'), _defineProperty(_skuList2, 'MLJ33LL/A', 'iPhone 13 Mini, 512GB, Blue'), _defineProperty(_skuList2, 'MLJ13LL/A', 'iPhone 13 Mini, 512GB, Pink'), _defineProperty(_skuList2, 'MLJ03LL/A', 'iPhone 13 Mini, 512GB, Starlight'), _defineProperty(_skuList2, 'MLJ23LL/A', 'iPhone 13 Mini, 512GB, Red'), _skuList2);
	}
	if (itempick === "iphold") {
		var _skuList3;

		skuList = (_skuList3 = {}, _defineProperty(_skuList3, 'MHGF3LL/A', 'iPhone SE, 64GB, White'), _defineProperty(_skuList3, 'MHGE3LL/A', 'iPhone SE, 64GB, Black'), _defineProperty(_skuList3, 'MHGG3LL/A', 'iPhone SE, 64GB, Red'), _defineProperty(_skuList3, 'MHGJ3LL/A', 'iPhone SE, 128GB, White'), _defineProperty(_skuList3, 'MHGH3LL/A', 'iPhone SE, 128GB, Black'), _defineProperty(_skuList3, 'MHGK3LL/A', 'iPhone SE, 128GB, Red'), _defineProperty(_skuList3, 'MHCV3LL/A', 'iPhone 11, 64GB, Purple'), _defineProperty(_skuList3, 'MHCU3LL/A', 'iPhone 11, 64GB, Yellow'), _defineProperty(_skuList3, 'MHCW3LL/A', 'iPhone 11, 64GB, Green'), _defineProperty(_skuList3, 'MHCQ3LL/A', 'iPhone 11, 64GB, White'), _defineProperty(_skuList3, 'MHCP3LL/A', 'iPhone 11, 64GB, Black'), _defineProperty(_skuList3, 'MHCR3LL/A', 'iPhone 11, 64GB, Red'), _defineProperty(_skuList3, 'MHD23LL/A', 'iPhone 11, 128GB, Purple'), _defineProperty(_skuList3, 'MHD13LL/A', 'iPhone 11, 128GB, Yellow'), _defineProperty(_skuList3, 'MHD33LL/A', 'iPhone 11, 128GB, Green'), _defineProperty(_skuList3, 'MHCY3LL/A', 'iPhone 11, 128GB, White'), _defineProperty(_skuList3, 'MHCX3LL/A', 'iPhone 11, 128GB, Black'), _defineProperty(_skuList3, 'MHD03LL/A', 'iPhone 11, 128GB, Red'), _defineProperty(_skuList3, 'MJNE3LL/A', 'iPhone 12, 64GB, Purple'), _defineProperty(_skuList3, 'MGH93LL/A', 'iPhone 12, 64GB, Blue'), _defineProperty(_skuList3, 'MGHA3LL/A', 'iPhone 12, 64GB, Green'), _defineProperty(_skuList3, 'MGH73LL/A', 'iPhone 12, 64GB, White'), _defineProperty(_skuList3, 'MGH63LL/A', 'iPhone 12, 64GB, Black'), _defineProperty(_skuList3, 'MGH83LL/A', 'iPhone 12, 64GB, Red'), _defineProperty(_skuList3, 'MJNF3LL/A', 'iPhone 12, 128GB, Purple'), _defineProperty(_skuList3, 'MGHF3LL/A', 'iPhone 12, 128GB, Blue'), _defineProperty(_skuList3, 'MGHG3LL/A', 'iPhone 12, 128GB, Green'), _defineProperty(_skuList3, 'MGHD3LL/A', 'iPhone 12, 128GB, White'), _defineProperty(_skuList3, 'MGHC3LL/A', 'iPhone 12, 128GB, Black'), _defineProperty(_skuList3, 'MGHE3LL/A', 'iPhone 12, 128GB, Red'), _defineProperty(_skuList3, 'MJNG3LL/A', 'iPhone 12, 256GB, Purple'), _defineProperty(_skuList3, 'MGHL3LL/A', 'iPhone 12, 256GB, Blue'), _defineProperty(_skuList3, 'MGHM3LL/A', 'iPhone 12, 256GB, Green'), _defineProperty(_skuList3, 'MGHJ3LL/A', 'iPhone 12, 256GB, White'), _defineProperty(_skuList3, 'MGHH3LL/A', 'iPhone 12, 256GB, Black'), _defineProperty(_skuList3, 'MGHK3LL/A', 'iPhone 12, 256GB, Red'), _defineProperty(_skuList3, 'MJQ83LL/A', 'iPhone 12 Mini, 64GB, Purple'), _defineProperty(_skuList3, 'MG8J3LL/A', 'iPhone 12 Mini, 64GB, Blue'), _defineProperty(_skuList3, 'MG8K3LL/A', 'iPhone 12 Mini, 64GB, Green'), _defineProperty(_skuList3, 'MG8G3LL/A', 'iPhone 12 Mini, 64GB, White'), _defineProperty(_skuList3, 'MG8F3LL/A', 'iPhone 12 Mini, 64GB, Black'), _defineProperty(_skuList3, 'MG8H3LL/A', 'iPhone 12 Mini, 64GB, Red'), _defineProperty(_skuList3, 'MJQ93LL/A', 'iPhone 12 Mini, 128GB, Purple'), _defineProperty(_skuList3, 'MG8P3LL/A', 'iPhone 12 Mini, 128GB, Blue'), _defineProperty(_skuList3, 'MG8Q3LL/A', 'iPhone 12 Mini, 128GB, Green'), _defineProperty(_skuList3, 'MG8M3LL/A', 'iPhone 12 Mini, 128GB, White'), _defineProperty(_skuList3, 'MG8L3LL/A', 'iPhone 12 Mini, 128GB, Black'), _defineProperty(_skuList3, 'MG8N3LL/A', 'iPhone 12 Mini, 128GB, Red'), _defineProperty(_skuList3, 'MJQA3LL/A', 'iPhone 12 Mini, 256GB, Purple'), _defineProperty(_skuList3, 'MG8V3LL/A', 'iPhone 12 Mini, 256GB, Blue'), _defineProperty(_skuList3, 'MG8W3LL/A', 'iPhone 12 Mini, 256GB, Green'), _defineProperty(_skuList3, 'MG8T3LL/A', 'iPhone 12 Mini, 256GB, White'), _defineProperty(_skuList3, 'MG8R3LL/A', 'iPhone 12 Mini, 256GB, Black'), _defineProperty(_skuList3, 'MG8U3LL/A', 'iPhone 12 Mini, 256GB, Red'), _skuList3);
	}
	if (itempick === "ipad") {
		var _skuList4;

		skuList = (_skuList4 = {}, _defineProperty(_skuList4, 'MK2K3LL/A', 'iPad, 64GB, Wi-Fi, Space Gray'), _defineProperty(_skuList4, 'MK2L3LL/A', 'iPad, 64GB, Wi-Fi, Silver'), _defineProperty(_skuList4, 'MK2N3LL/A', 'iPad, 256GB, Wi-Fi, Space Gray'), _defineProperty(_skuList4, 'MK2P3LL/A', 'iPad, 256GB, Wi-Fi, Silver'), _defineProperty(_skuList4, 'MK663LL/A', 'iPad, 64GB, Wi-Fi/Cellular, Space Gray'), _defineProperty(_skuList4, 'MK673LL/A', 'iPad, 64GB, Wi-Fi/Cellular, Silver'), _defineProperty(_skuList4, 'MK693LL/A', 'iPad, 256GB, Wi-Fi/Cellular, Space Gray'), _defineProperty(_skuList4, 'MK6A3LL/A', 'iPad, 256GB, Wi-Fi/Cellular, Silver'), _defineProperty(_skuList4, 'MK7M3LL/A', 'iPad Mini, 64GB, Wi-Fi, Space Gray'), _defineProperty(_skuList4, 'MLWL3LL/A', 'iPad Mini, 64GB, Wi-Fi, Pink'), _defineProperty(_skuList4, 'MK7R3LL/A', 'iPad Mini, 64GB, Wi-Fi, Purple'), _defineProperty(_skuList4, 'MK7P3LL/A', 'iPad Mini, 64GB, Wi-Fi, Starlight'), _defineProperty(_skuList4, 'MK7T3LL/A', 'iPad Mini, 256GB, Wi-Fi, Space Gray'), _defineProperty(_skuList4, 'MLWR3LL/A', 'iPad Mini, 256GB, Wi-Fi, Pink'), _defineProperty(_skuList4, 'MK7X3LL/A', 'iPad Mini, 256GB, Wi-Fi, Purple'), _defineProperty(_skuList4, 'MK7V3LL/A', 'iPad Mini, 256GB, Wi-Fi, Starlight'), _defineProperty(_skuList4, 'MK893LL/A', 'iPad Mini, 64GB, Wi-Fi/Cellular, Space Gray'), _defineProperty(_skuList4, 'MLX43LL/A', 'iPad Mini, 64GB, Wi-Fi/Cellular, Pink'), _defineProperty(_skuList4, 'MK8E3LL/A', 'iPad Mini, 64GB, Wi-Fi/Cellular, Purple'), _defineProperty(_skuList4, 'MK8C3LL/A', 'iPad Mini, 64GB, Wi-Fi/Cellular, Starlight'), _defineProperty(_skuList4, 'MK8F3LL/A', 'iPad Mini, 256GB, Wi-Fi/Cellular, Space Gray'), _defineProperty(_skuList4, 'MLX93LL/A', 'iPad Mini, 256GB, Wi-Fi/Cellular, Pink'), _defineProperty(_skuList4, 'MK8K3LL/A', 'iPad Mini, 256GB, Wi-Fi/Cellular, Purple'), _defineProperty(_skuList4, 'MK8H3LL/A', 'iPad Mini, 256GB, Wi-Fi/Cellular, Starlight'), _defineProperty(_skuList4, 'MYFM2LL/A', 'iPad Air, 64GB, Wi-Fi, Space Gray'), _defineProperty(_skuList4, 'MYFN2LL/A', 'iPad Air, 64GB, Wi-Fi, Silver'), _defineProperty(_skuList4, 'MYFR2LL/A', 'iPad Air, 64GB, Wi-Fi, Green'), _defineProperty(_skuList4, 'MYFP2LL/A', 'iPad Air, 64GB, Wi-Fi, Rose Gold'), _defineProperty(_skuList4, 'MYFQ2LL/A', 'iPad Air, 64GB, Wi-Fi, Sky Blue'), _defineProperty(_skuList4, 'MYFT2LL/A', 'iPad Air, 256GB, Wi-Fi, Space Gray'), _defineProperty(_skuList4, 'MYFW2LL/A', 'iPad Air, 256GB, Wi-Fi, Silver'), _defineProperty(_skuList4, 'MYG02LL/A', 'iPad Air, 256GB, Wi-Fi, Green'), _defineProperty(_skuList4, 'MYFX2LL/A', 'iPad Air, 256GB, Wi-Fi, Rose Gold'), _defineProperty(_skuList4, 'MYFY2LL/A', 'iPad Air, 256GB, Wi-Fi, Sky Blue'), _defineProperty(_skuList4, 'MYHX2LL/A', 'iPad Air, 64GB, Wi-Fi/Cellular, Space Gray'), _defineProperty(_skuList4, 'MYHY2LL/A', 'iPad Air, 64GB, Wi-Fi/Cellular, Silver'), _defineProperty(_skuList4, 'MYJ22LL/A', 'iPad Air, 64GB, Wi-Fi/Cellular, Green'), _defineProperty(_skuList4, 'MYJ02LL/A', 'iPad Air, 64GB, Wi-Fi/Cellular, Rose Gold'), _defineProperty(_skuList4, 'MYJ12LL/A', 'iPad Air, 64GB, Wi-Fi/Cellular, Sky Blue'), _defineProperty(_skuList4, 'MYJ32LL/A', 'iPad Air, 256GB, Wi-Fi/Cellular, Space Gray'), _defineProperty(_skuList4, 'MYJ42LL/A', 'iPad Air, 256GB, Wi-Fi/Cellular, Silver'), _defineProperty(_skuList4, 'MYJ72LL/A', 'iPad Air, 256GB, Wi-Fi/Cellular, Green'), _defineProperty(_skuList4, 'MYJ62LL/A', 'iPad Air, 256GB, Wi-Fi/Cellular, Sky Blue'), _defineProperty(_skuList4, 'MYJ52LL/A', 'iPad Air, 256GB, Wi-Fi/Cellular, Rose Gold'), _defineProperty(_skuList4, 'MHQR3LL/A', 'iPad Pro 11", 128GB, Wi-Fi, Space Gray'), _defineProperty(_skuList4, 'MHQT3LL/A', 'iPad Pro 11", 128GB, Wi-Fi, Silver'), _defineProperty(_skuList4, 'MHQU3LL/A', 'iPad Pro 11", 256GB, Wi-Fi, Space Gray'), _defineProperty(_skuList4, 'MHQV3LL/A', 'iPad Pro 11", 256GB, Wi-Fi, Silver'), _defineProperty(_skuList4, 'MHQW3LL/A', 'iPad Pro 11", 512GB, Wi-Fi, Space Gray'), _defineProperty(_skuList4, 'MHQX3LL/A', 'iPad Pro 11", 512GB, Wi-Fi, Silver'), _defineProperty(_skuList4, 'MHQY3LL/A', 'iPad Pro 11", 1TB, Wi-Fi, Space Gray'), _defineProperty(_skuList4, 'MHR03LL/A', 'iPad Pro 11", 1TB, Wi-Fi, Silver'), _defineProperty(_skuList4, 'MHR23LL/A', 'iPad Pro 11", 2TB, Wi-Fi, Space Gray'), _defineProperty(_skuList4, 'MHR33LL/A', 'iPad Pro 11", 2TB, Wi-Fi, Silver'), _defineProperty(_skuList4, 'MHMT3LL/A', 'iPad Pro 11", 128GB, Wi-Fi/Cellular, Space Gray'), _defineProperty(_skuList4, 'MHMU3LL/A', 'iPad Pro 11", 128GB, Wi-Fi/Cellular, Silver'), _defineProperty(_skuList4, 'MHMV3LL/A', 'iPad Pro 11", 256GB, Wi-Fi/Cellular, Space Gray'), _defineProperty(_skuList4, 'MHMW3LL/A', 'iPad Pro 11", 256GB, Wi-Fi/Cellular, Silver'), _defineProperty(_skuList4, 'MHMX3LL/A', 'iPad Pro 11", 512GB, Wi-Fi/Cellular, Space Gray'), _defineProperty(_skuList4, 'MHMY3LL/A', 'iPad Pro 11", 512GB, Wi-Fi/Cellular, Silver'), _defineProperty(_skuList4, 'MHN03LL/A', 'iPad Pro 11", 1TB, Wi-Fi/Cellular, Space Gray'), _defineProperty(_skuList4, 'MHN13LL/A', 'iPad Pro 11", 1TB, Wi-Fi/Cellular, Silver'), _defineProperty(_skuList4, 'MHN23LL/A', 'iPad Pro 11", 2TB, Wi-Fi/Cellular, Space Gray'), _defineProperty(_skuList4, 'MHN33LL/A', 'iPad Pro 11", 2TB, Wi-Fi/Cellular, Silver'), _defineProperty(_skuList4, 'MHNF3LL/A', 'iPad Pro 12.9", 128GB, Wi-Fi, Space Gray'), _defineProperty(_skuList4, 'MHNG3LL/A', 'iPad Pro 12.9", 128GB, Wi-Fi, Silver'), _defineProperty(_skuList4, 'MHNH3LL/A', 'iPad Pro 12.9", 256GB, Wi-Fi, Space Gray'), _defineProperty(_skuList4, 'MHNJ3LL/A', 'iPad Pro 12.9", 256GB, Wi-Fi, Silver'), _defineProperty(_skuList4, 'MHNK3LL/A', 'iPad Pro 12.9", 512GB, Wi-Fi, Space Gray'), _defineProperty(_skuList4, 'MHNL3LL/A', 'iPad Pro 12.9", 512GB, Wi-Fi, Silver'), _defineProperty(_skuList4, 'MHNM3LL/A', 'iPad Pro 12.9", 1TB, Wi-Fi, Space Gray'), _defineProperty(_skuList4, 'MHNN3LL/A', 'iPad Pro 12.9", 1TB, Wi-Fi, Silver'), _defineProperty(_skuList4, 'MHNP3LL/A', 'iPad Pro 12.9", 2TB, Wi-Fi, Space Gray'), _defineProperty(_skuList4, 'MHNQ3LL/A', 'iPad Pro 12.9", 2TB, Wi-Fi, Silver'), _defineProperty(_skuList4, 'MHNR3LL/A', 'iPad Pro 12.9", 128GB, Wi-Fi/Cellular, Space Gray'), _defineProperty(_skuList4, 'MHNT3LL/A', 'iPad Pro 12.9", 128GB, Wi-Fi/Cellular, Silver'), _defineProperty(_skuList4, 'MHNW3LL/A', 'iPad Pro 12.9", 256GB, Wi-Fi/Cellular, Space Gray'), _defineProperty(_skuList4, 'MHNX3LL/A', 'iPad Pro 12.9", 256GB, Wi-Fi/Cellular, Silver'), _defineProperty(_skuList4, 'MHNY3LL/A', 'iPad Pro 12.9", 512GB, Wi-Fi/Cellular, Space Gray'), _defineProperty(_skuList4, 'MHP03LL/A', 'iPad Pro 12.9", 512GB, Wi-Fi/Cellular, Silver'), _defineProperty(_skuList4, 'MHP13LL/A', 'iPad Pro 12.9", 1TB, Wi-Fi/Cellular, Space Gray'), _defineProperty(_skuList4, 'MHP23LL/A', 'iPad Pro 12.9", 1TB, Wi-Fi/Cellular, Silver'), _defineProperty(_skuList4, 'MHP43LL/A', 'iPad Pro 12.9", 2TB, Wi-Fi/Cellular, Space Gray'), _defineProperty(_skuList4, 'MHP53LL/A', 'iPad Pro 12.9", 2TB, Wi-Fi/Cellular, Silver'), _skuList4);
	}
	if (itempick === "mac") {
		var _skuList5;

		skuList = (_skuList5 = {}, _defineProperty(_skuList5, 'MGN63LL/A', '13" MBA, 256GB, Space Gray'), _defineProperty(_skuList5, 'MGN93LL/A', '13" MBA, 256GB, Gold'), _defineProperty(_skuList5, 'MGND3LL/A', '13" MBA, 256GB, Silver'), _defineProperty(_skuList5, 'MGN73LL/A', '13" MBA, 512GB, Space Gray'), _defineProperty(_skuList5, 'MGNA3LL/A', '13" MBA, 512GB, Gold'), _defineProperty(_skuList5, 'MGNE3LL/A', '13" MBA, 512GB, Silver'), _defineProperty(_skuList5, 'MKGR3LL/A', '14" MBP, M1 Pro, 8/14 Cores, 512GB/16GB, Silver'), _defineProperty(_skuList5, 'MKGP3LL/A', '14" MBP, M1 Pro, 8/14 Cores, 512GB/16GB, Space Gray'), _defineProperty(_skuList5, 'MKGT3LL/A', '14" MBP, M1 Pro, 10/16 Cores, 1TB/16GB, Silver'), _defineProperty(_skuList5, 'MKGQ3LL/A', '14" MBP, M1 Pro, 10/16 Cores, 1TB/16GB, Space Gray'), _defineProperty(_skuList5, 'MK1E3LL/A', '16" MBP, M1 Pro, 10/16 Cores, 512GB/16GB, Silver'), _defineProperty(_skuList5, 'MK183LL/A', '16" MBP, M1 Pro, 10/16 Cores, 512GB/16GB, Space Gray'), _defineProperty(_skuList5, 'MK1F3LL/A', '16" MBP, M1 Pro, 10/16 Cores, 1TB/16GB, Silver'), _defineProperty(_skuList5, 'MK193LL/A', '16" MBP, M1 Pro, 10/16 Cores, 1TB/16GB, Space Gray'), _defineProperty(_skuList5, 'MK1H3LL/A', '16" MBP, M1 Max, 10/32 Cores, 1TB/32GB, Silver'), _defineProperty(_skuList5, 'MK1A3LL/A', '16" MBP, M1 Max, 10/32 Cores, 1TB/32GB, Space Gray'), _defineProperty(_skuList5, 'MGNR3LL/A', 'Mac Mini, 256GB/8GB'), _defineProperty(_skuList5, 'MGNT3LL/A', 'Mac Mini, 512GB/8GB'), _defineProperty(_skuList5, 'MJV93LL/A', '24" iMac, 8/7 Cores, 256GB/8GB, Blue'), _defineProperty(_skuList5, 'MJV83LL/A', '24" iMac, 8/7 Cores, 256GB/8GB, Green'), _defineProperty(_skuList5, 'MJVA3LL/A', '24" iMac, 8/7 Cores, 256GB/8GB, Pink'), _defineProperty(_skuList5, 'MGTF3LL/A', '24" iMac, 8/7 Cores, 256GB/8GB, Silver'), _defineProperty(_skuList5, 'MGPK3LL/A', '24" iMac, 8/8 Cores, +USB-3/Ethernet, 256GB/8GB, Blue'), _defineProperty(_skuList5, 'MGPH3LL/A', '24" iMac, 8/8 Cores, +USB-3/Ethernet, 256GB/8GB, Green'), _defineProperty(_skuList5, 'MGPM3LL/A', '24" iMac, 8/8 Cores, +USB-3/Ethernet, 256GB/8GB, Pink'), _defineProperty(_skuList5, 'MGPC3LL/A', '24" iMac, 8/8 Cores, +USB-3/Ethernet, 256GB/8GB, Silver'), _defineProperty(_skuList5, 'MGPL3LL/A', '24" iMac, 8/8 Cores, +USB-3/Ethernet, 512GB/8GB, Blue'), _defineProperty(_skuList5, 'MGPJ3LL/A', '24" iMac, 8/8 Cores, +USB-3/Ethernet, 512GB/8GB, Green'), _defineProperty(_skuList5, 'MGPN3LL/A', '24" iMac, 8/8 Cores, +USB-3/Ethernet, 512GB/8GB, Pink'), _defineProperty(_skuList5, 'MGPD3LL/A', '24" iMac, 8/8 Cores, +USB-3/Ethernet, 512GB/8GB, Silver'), _skuList5);
	}
	if (itempick === "other") {
		var _skuList6;

		skuList = (_skuList6 = {}, _defineProperty(_skuList6, 'MV7N2AM/A', 'AirPods 2nd Gen'), _defineProperty(_skuList6, 'MME73AM/A', 'AirPods 3rd Gen'), _defineProperty(_skuList6, 'MLWK3AM/A', 'AirPods Pro'), _defineProperty(_skuList6, 'MX532AM/A', 'AirTag, 1/pk'), _defineProperty(_skuList6, 'MX542AM/A', 'AirTag, 4/pk'), _defineProperty(_skuList6, 'MK0C2AM/A', 'Pencil, 1st Gen'), _defineProperty(_skuList6, 'MU8F2AM/A', 'Pencil, 2nd Gen'), _defineProperty(_skuList6, 'MHXH3AM/A', 'MagSafe Charger, 1m'), _defineProperty(_skuList6, 'MJWY3AM/A', 'MagSafe Battery Pack'), _defineProperty(_skuList6, 'MMX62AM/A', 'Lightning to 3.5mm Jack Adapter'), _defineProperty(_skuList6, 'MHJA3AM/A', '20W USB-C Power Adapter'), _defineProperty(_skuList6, 'MY1W2AM/A', '30W USB-C Power Adapter'), _defineProperty(_skuList6, 'MKU63AM/A', '67W USB-C Power Adapter'), _defineProperty(_skuList6, 'MX0J2AM/A', '96W USB-C Power Adapter'), _defineProperty(_skuList6, 'MLYU3AM/A', '140W USB-C Power Adapter'), _defineProperty(_skuList6, 'MLYV3AM/A', 'USB-C to MagSafe 3 Cable, 2m'), _defineProperty(_skuList6, 'MM0A3AM/A', 'USB-C to Lightning Cable, 1m'), _defineProperty(_skuList6, 'MQGH2AM/A', 'USB-C to Lightning Cable, 2m'), _defineProperty(_skuList6, 'MXLY2AM/A', 'Lightning to USB Cable, 1m'), _defineProperty(_skuList6, 'MD819AM/A', 'Lightning to USB Cable, 2m'), _defineProperty(_skuList6, 'MM093AM/A', 'USB-C Cable, 1m'), _defineProperty(_skuList6, 'MLL82AM/A', 'USB-C Cable, 2m'), _skuList6);
	}

	var control = "MYD92LL/A";
	var storeNumber = req.cookies.storenum;

	var query = Object.keys(skuList).map(function (k, i) {
		return 'parts.' + i + '=' + encodeURIComponent(k);
	}).join("&") + ('&searchNearby=false&store=' + storeNumber);

	var options = {
		method: "GET",
		url: 'https://www.apple.com/shop/fulfillment-messages?' + query
	};

	var checkstr = '';
	var city = '';
	var state = '';
	var storeurl = '';
	var address = '';
	var zip = '';

	request(options, function (error, response) {
		if (error) throw new Error(error);

		var body = JSON.parse(response.body);

		var storesArray = body.body.content.pickupMessage.stores;

		var statusArray = storesArray.flatMap(function (store) {
			city = store.city;
			state = store.state;
			storeurl = store.hoursUrl;
			address = store.address.address2;
			zip = store.address.postalCode;

			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				for (var _iterator = Object.entries(skuList)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var _step$value = _slicedToArray(_step.value, 2),
					    key = _step$value[0],
					    value = _step$value[1];

					var product = store.partsAvailability[key];
					if (product.pickupDisplay === "available") {
						checkstr = checkstr.concat("<span style='color:green;font-weight:bold;'>", '' + value, "</span><br/>");
					} else {
						checkstr = checkstr.concat("<span style='color:red'>", '' + value, "</span><br/>");
					};
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

			;
		});

		res.render("check", {
			layoutgmaps: configURL,
			invcheck: checkstr,
			citychk: city,
			statechk: state,
			storeurlchk: storeurl,
			addresschk: address,
			zipchk: zip
		});
	});
});

var server = app.listen(8081, function () {
	var host = server.address().address;
	var port = server.address().port;

	console.log("Fruit Picker server listening on port %s", host, port);
});