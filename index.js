const configURL = "https://maps.googleapis.com/maps/api/js?key=";
const fruitversion = "v1.0.6";

let portx = process.env.PORT;
if (portx == null || portx == "") {
  portx = 8000;
}

const express = require('express');
const cookieParser = require('cookie-parser')
const request = require("request");
const flatMap = require('array.prototype.flatmap');
const replaceAll = require("string.prototype.replaceall");
const path = require("path");

const app = express();
app.use(cookieParser())
app.use(express.static('public'));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.get('/', function(req, res) {   
	res.render("index", { versionfruit: fruitversion, layoutgmaps: configURL });
})

app.get('/index.htm', function(req, res) {   
	res.render("index", { versionfruit: fruitversion, layoutgmaps: configURL });
})

app.get('/store.htm', function(req, res) {   
	res.render("store", { versionfruit: fruitversion, layoutgmaps: configURL });
})

let skuList = {['a']: 'b'};

app.get('/check.htm', function(req, res) {   
	flatMap.shim();
	replaceAll.shim();
	const args = process.argv.slice(2);
	let itempick = req.cookies.itempick;

	if ( itempick === "iphone" ) {
		skuList = {
			['MLKP3LL/A']: 'iPhone 13 Pro Max, 128GB, Sierra Blue',
			['MLKN3LL/A']: 'iPhone 13 Pro Max, 128GB, Gold',
			['MLKM3LL/A']: 'iPhone 13 Pro Max, 128GB, Silver',
			['MLKL3LL/A']: 'iPhone 13 Pro Max, 128GB, Graphite',
			['MLKV3LL/A']: 'iPhone 13 Pro Max, 256GB, Sierra Blue',
			['MLKU3LL/A']: 'iPhone 13 Pro Max, 256GB, Gold',
			['MLKT3LL/A']: 'iPhone 13 Pro Max, 256GB, Silver',
			['MLKR3LL/A']: 'iPhone 13 Pro Max, 256GB, Graphite',
			['MLL03LL/A']: 'iPhone 13 Pro Max, 512GB, Sierra Blue',
			['MLKY3LL/A']: 'iPhone 13 Pro Max, 512GB, Gold',
			['MLKX3LL/A']: 'iPhone 13 Pro Max, 512GB, Silver',
			['MLKW3LL/A']: 'iPhone 13 Pro Max, 512GB, Graphite',
			['MLL53LL/A']: 'iPhone 13 Pro Max, 1TB, Sierra Blue',
			['MLL43LL/A']: 'iPhone 13 Pro Max, 1TB, Gold',
			['MLL33LL/A']: 'iPhone 13 Pro Max, 1TB, Silver',
			['MLL23LL/A']: 'iPhone 13 Pro Max, 1TB, Graphite',
			['MLTT3LL/A']: 'iPhone 13 Pro, 128GB, Sierra Blue',
			['MLTR3LL/A']: 'iPhone 13 Pro, 128GB, Gold',
			['MLTQ3LL/A']: 'iPhone 13 Pro, 128GB, Silver',
			['MLTP3LL/A']: 'iPhone 13 Pro, 128GB, Graphite',
			['MLU03LL/A']: 'iPhone 13 Pro, 256GB, Sierra Blue',
			['MLTY3LL/A']: 'iPhone 13 Pro, 256GB, Gold',
			['MLTX3LL/A']: 'iPhone 13 Pro, 256GB, Silver',
			['MLTW3LL/A']: 'iPhone 13 Pro, 256GB, Graphite',
			['MLU73LL/A']: 'iPhone 13 Pro, 512GB, Sierra Blue',
			['MLU43LL/A']: 'iPhone 13 Pro, 512GB, Gold',
			['MLU33LL/A']: 'iPhone 13 Pro, 512GB, Silver',
			['MLU13LL/A']: 'iPhone 13 Pro, 512GB, Graphite',
			['MLUD3LL/A']: 'iPhone 13 Pro, 1TB, Sierra Blue',
			['MLUC3LL/A']: 'iPhone 13 Pro, 1TB, Gold',
			['MLUA3LL/A']: 'iPhone 13 Pro, 1TB, Silver',
			['MLU93LL/A']: 'iPhone 13 Pro, 1TB, Graphite',
			['MLML3LL/A']: 'iPhone 13, 128GB, Midnight',
			['MLMT3LL/A']: 'iPhone 13, 128GB, Blue',
			['MLMN3LL/A']: 'iPhone 13, 128GB, Pink',
			['MLMM3LL/A']: 'iPhone 13, 128GB, Starlight',
			['MLMQ3LL/A']: 'iPhone 13, 128GB, Red',
			['MLMU3LL/A']: 'iPhone 13, 256GB, Midnight',
			['MLN13LL/A']: 'iPhone 13, 256GB, Blue',
			['MLMY3LL/A']: 'iPhone 13, 256GB, Pink',
			['MLMX3LL/A']: 'iPhone 13, 256GB, Starlight',
			['MLN03LL/A']: 'iPhone 13, 256GB, Red',
			['MLN23LL/A']: 'iPhone 13, 512GB, Midnight',
			['MLN83LL/A']: 'iPhone 13, 512GB, Blue',
			['MLN43LL/A']: 'iPhone 13, 512GB, Pink',
			['MLN33LL/A']: 'iPhone 13, 512GB, Starlight',
			['MLN53LL/A']: 'iPhone 13, 512GB, Red',
			['MLHM3LL/A']: 'iPhone 13 Mini, 128GB, Midnight',
			['MLHR3LL/A']: 'iPhone 13 Mini, 128GB, Blue',
			['MLHP3LL/A']: 'iPhone 13 Mini, 128GB, Pink',
			['MLHN3LL/A']: 'iPhone 13 Mini, 128GB, Starlight',
			['MLHQ3LL/A']: 'iPhone 13 Mini, 128GB, Red',
			['MLHT3LL/A']: 'iPhone 13 Mini, 256GB, Midnight',
			['MLHX3LL/A']: 'iPhone 13 Mini, 256GB, Blue',
			['MLHV3LL/A']: 'iPhone 13 Mini, 256GB, Pink',
			['MLHU3LL/A']: 'iPhone 13 Mini, 256GB, Starlight',
			['MLHW3LL/A']: 'iPhone 13 Mini, 256GB, Red',
			['MLHY3LL/A']: 'iPhone 13 Mini, 512GB, Midnight',
			['MLJ33LL/A']: 'iPhone 13 Mini, 512GB, Blue',
			['MLJ13LL/A']: 'iPhone 13 Mini, 512GB, Pink',
			['MLJ03LL/A']: 'iPhone 13 Mini, 512GB, Starlight',
			['MLJ23LL/A']: 'iPhone 13 Mini, 512GB, Red',
		}
	}
	if ( itempick === "iphold" ) {
		skuList = {
/* 			['MHGF3LL/A']: 'iPhone SE, 64GB, White',
			['MHGE3LL/A']: 'iPhone SE, 64GB, Black',
			['MHGG3LL/A']: 'iPhone SE, 64GB, Red',
			['MHGJ3LL/A']: 'iPhone SE, 128GB, White',
			['MHGH3LL/A']: 'iPhone SE, 128GB, Black',
			['MHGK3LL/A']: 'iPhone SE, 128GB, Red', */
			['MHCV3LL/A']: 'iPhone 11, 64GB, Purple',
			['MHCU3LL/A']: 'iPhone 11, 64GB, Yellow',
			['MHCW3LL/A']: 'iPhone 11, 64GB, Green',
			['MHCQ3LL/A']: 'iPhone 11, 64GB, White',
			['MHCP3LL/A']: 'iPhone 11, 64GB, Black',
			['MHCR3LL/A']: 'iPhone 11, 64GB, Red',
			['MHD23LL/A']: 'iPhone 11, 128GB, Purple',
			['MHD13LL/A']: 'iPhone 11, 128GB, Yellow',
			['MHD33LL/A']: 'iPhone 11, 128GB, Green',
			['MHCY3LL/A']: 'iPhone 11, 128GB, White',
			['MHCX3LL/A']: 'iPhone 11, 128GB, Black',
			['MHD03LL/A']: 'iPhone 11, 128GB, Red',
			['MJNE3LL/A']: 'iPhone 12, 64GB, Purple',
			['MGH93LL/A']: 'iPhone 12, 64GB, Blue',
			['MGHA3LL/A']: 'iPhone 12, 64GB, Green',
			['MGH73LL/A']: 'iPhone 12, 64GB, White',
			['MGH63LL/A']: 'iPhone 12, 64GB, Black',
			['MGH83LL/A']: 'iPhone 12, 64GB, Red',
			['MJNF3LL/A']: 'iPhone 12, 128GB, Purple',
			['MGHF3LL/A']: 'iPhone 12, 128GB, Blue',
			['MGHG3LL/A']: 'iPhone 12, 128GB, Green',
			['MGHD3LL/A']: 'iPhone 12, 128GB, White',
			['MGHC3LL/A']: 'iPhone 12, 128GB, Black',
			['MGHE3LL/A']: 'iPhone 12, 128GB, Red',
			['MJNG3LL/A']: 'iPhone 12, 256GB, Purple',
			['MGHL3LL/A']: 'iPhone 12, 256GB, Blue',
			['MGHM3LL/A']: 'iPhone 12, 256GB, Green',
			['MGHJ3LL/A']: 'iPhone 12, 256GB, White',
			['MGHH3LL/A']: 'iPhone 12, 256GB, Black',
			['MGHK3LL/A']: 'iPhone 12, 256GB, Red',
			['MJQ83LL/A']: 'iPhone 12 Mini, 64GB, Purple',
			['MG8J3LL/A']: 'iPhone 12 Mini, 64GB, Blue',
			['MG8K3LL/A']: 'iPhone 12 Mini, 64GB, Green',
			['MG8G3LL/A']: 'iPhone 12 Mini, 64GB, White',
			['MG8F3LL/A']: 'iPhone 12 Mini, 64GB, Black',
			['MG8H3LL/A']: 'iPhone 12 Mini, 64GB, Red',
			['MJQ93LL/A']: 'iPhone 12 Mini, 128GB, Purple',
			['MG8P3LL/A']: 'iPhone 12 Mini, 128GB, Blue',
			['MG8Q3LL/A']: 'iPhone 12 Mini, 128GB, Green',
			['MG8M3LL/A']: 'iPhone 12 Mini, 128GB, White',
			['MG8L3LL/A']: 'iPhone 12 Mini, 128GB, Black',
			['MG8N3LL/A']: 'iPhone 12 Mini, 128GB, Red',
			['MJQA3LL/A']: 'iPhone 12 Mini, 256GB, Purple',
			['MG8V3LL/A']: 'iPhone 12 Mini, 256GB, Blue',
			['MG8W3LL/A']: 'iPhone 12 Mini, 256GB, Green',
			['MG8T3LL/A']: 'iPhone 12 Mini, 256GB, White',
			['MG8R3LL/A']: 'iPhone 12 Mini, 256GB, Black',
			['MG8U3LL/A']: 'iPhone 12 Mini, 256GB, Red',
		}
	}
	if ( itempick === "ipad" ) {
		skuList = {
			['MK2K3LL/A']: 'iPad, 64GB, Wi-Fi, Space Gray',
			['MK2L3LL/A']: 'iPad, 64GB, Wi-Fi, Silver',
			['MK2N3LL/A']: 'iPad, 256GB, Wi-Fi, Space Gray',
			['MK2P3LL/A']: 'iPad, 256GB, Wi-Fi, Silver',
			['MK663LL/A']: 'iPad, 64GB, Wi-Fi/Cellular, Space Gray',
			['MK673LL/A']: 'iPad, 64GB, Wi-Fi/Cellular, Silver',
			['MK693LL/A']: 'iPad, 256GB, Wi-Fi/Cellular, Space Gray',
			['MK6A3LL/A']: 'iPad, 256GB, Wi-Fi/Cellular, Silver',
			['MK7M3LL/A']: 'iPad Mini, 64GB, Wi-Fi, Space Gray',
			['MLWL3LL/A']: 'iPad Mini, 64GB, Wi-Fi, Pink',
			['MK7R3LL/A']: 'iPad Mini, 64GB, Wi-Fi, Purple',
			['MK7P3LL/A']: 'iPad Mini, 64GB, Wi-Fi, Starlight',
			['MK7T3LL/A']: 'iPad Mini, 256GB, Wi-Fi, Space Gray',
			['MLWR3LL/A']: 'iPad Mini, 256GB, Wi-Fi, Pink',
			['MK7X3LL/A']: 'iPad Mini, 256GB, Wi-Fi, Purple',
			['MK7V3LL/A']: 'iPad Mini, 256GB, Wi-Fi, Starlight',
			['MK893LL/A']: 'iPad Mini, 64GB, Wi-Fi/Cellular, Space Gray',
			['MLX43LL/A']: 'iPad Mini, 64GB, Wi-Fi/Cellular, Pink',
			['MK8E3LL/A']: 'iPad Mini, 64GB, Wi-Fi/Cellular, Purple',
			['MK8C3LL/A']: 'iPad Mini, 64GB, Wi-Fi/Cellular, Starlight',
			['MK8F3LL/A']: 'iPad Mini, 256GB, Wi-Fi/Cellular, Space Gray',
			['MLX93LL/A']: 'iPad Mini, 256GB, Wi-Fi/Cellular, Pink',
			['MK8K3LL/A']: 'iPad Mini, 256GB, Wi-Fi/Cellular, Purple',
			['MK8H3LL/A']: 'iPad Mini, 256GB, Wi-Fi/Cellular, Starlight',
/* 			['MYFM2LL/A']: 'iPad Air, 64GB, Wi-Fi, Space Gray',
			['MYFN2LL/A']: 'iPad Air, 64GB, Wi-Fi, Silver',
			['MYFR2LL/A']: 'iPad Air, 64GB, Wi-Fi, Green',
			['MYFP2LL/A']: 'iPad Air, 64GB, Wi-Fi, Rose Gold',
			['MYFQ2LL/A']: 'iPad Air, 64GB, Wi-Fi, Sky Blue',
			['MYFT2LL/A']: 'iPad Air, 256GB, Wi-Fi, Space Gray',
			['MYFW2LL/A']: 'iPad Air, 256GB, Wi-Fi, Silver',
			['MYG02LL/A']: 'iPad Air, 256GB, Wi-Fi, Green',
			['MYFX2LL/A']: 'iPad Air, 256GB, Wi-Fi, Rose Gold',
			['MYFY2LL/A']: 'iPad Air, 256GB, Wi-Fi, Sky Blue',
			['MYHX2LL/A']: 'iPad Air, 64GB, Wi-Fi/Cellular, Space Gray',
			['MYHY2LL/A']: 'iPad Air, 64GB, Wi-Fi/Cellular, Silver',
			['MYJ22LL/A']: 'iPad Air, 64GB, Wi-Fi/Cellular, Green',
			['MYJ02LL/A']: 'iPad Air, 64GB, Wi-Fi/Cellular, Rose Gold',
			['MYJ12LL/A']: 'iPad Air, 64GB, Wi-Fi/Cellular, Sky Blue',
			['MYJ32LL/A']: 'iPad Air, 256GB, Wi-Fi/Cellular, Space Gray',
			['MYJ42LL/A']: 'iPad Air, 256GB, Wi-Fi/Cellular, Silver',
			['MYJ72LL/A']: 'iPad Air, 256GB, Wi-Fi/Cellular, Green',
			['MYJ62LL/A']: 'iPad Air, 256GB, Wi-Fi/Cellular, Sky Blue',
			['MYJ52LL/A']: 'iPad Air, 256GB, Wi-Fi/Cellular, Rose Gold', */
			['MHQR3LL/A']: 'iPad Pro 11", 128GB, Wi-Fi, Space Gray',
			['MHQT3LL/A']: 'iPad Pro 11", 128GB, Wi-Fi, Silver',
			['MHQU3LL/A']: 'iPad Pro 11", 256GB, Wi-Fi, Space Gray',
			['MHQV3LL/A']: 'iPad Pro 11", 256GB, Wi-Fi, Silver',
			['MHQW3LL/A']: 'iPad Pro 11", 512GB, Wi-Fi, Space Gray',
			['MHQX3LL/A']: 'iPad Pro 11", 512GB, Wi-Fi, Silver',
			['MHQY3LL/A']: 'iPad Pro 11", 1TB, Wi-Fi, Space Gray',
			['MHR03LL/A']: 'iPad Pro 11", 1TB, Wi-Fi, Silver',
			['MHR23LL/A']: 'iPad Pro 11", 2TB, Wi-Fi, Space Gray',
			['MHR33LL/A']: 'iPad Pro 11", 2TB, Wi-Fi, Silver',
			['MHMT3LL/A']: 'iPad Pro 11", 128GB, Wi-Fi/Cellular, Space Gray',
			['MHMU3LL/A']: 'iPad Pro 11", 128GB, Wi-Fi/Cellular, Silver',
			['MHMV3LL/A']: 'iPad Pro 11", 256GB, Wi-Fi/Cellular, Space Gray',
			['MHMW3LL/A']: 'iPad Pro 11", 256GB, Wi-Fi/Cellular, Silver',
			['MHMX3LL/A']: 'iPad Pro 11", 512GB, Wi-Fi/Cellular, Space Gray',
			['MHMY3LL/A']: 'iPad Pro 11", 512GB, Wi-Fi/Cellular, Silver',
			['MHN03LL/A']: 'iPad Pro 11", 1TB, Wi-Fi/Cellular, Space Gray',
			['MHN13LL/A']: 'iPad Pro 11", 1TB, Wi-Fi/Cellular, Silver',
			['MHN23LL/A']: 'iPad Pro 11", 2TB, Wi-Fi/Cellular, Space Gray',
			['MHN33LL/A']: 'iPad Pro 11", 2TB, Wi-Fi/Cellular, Silver',
			['MHNF3LL/A']: 'iPad Pro 12.9", 128GB, Wi-Fi, Space Gray',
			['MHNG3LL/A']: 'iPad Pro 12.9", 128GB, Wi-Fi, Silver',
			['MHNH3LL/A']: 'iPad Pro 12.9", 256GB, Wi-Fi, Space Gray',
			['MHNJ3LL/A']: 'iPad Pro 12.9", 256GB, Wi-Fi, Silver',
			['MHNK3LL/A']: 'iPad Pro 12.9", 512GB, Wi-Fi, Space Gray',
			['MHNL3LL/A']: 'iPad Pro 12.9", 512GB, Wi-Fi, Silver',
			['MHNM3LL/A']: 'iPad Pro 12.9", 1TB, Wi-Fi, Space Gray',
			['MHNN3LL/A']: 'iPad Pro 12.9", 1TB, Wi-Fi, Silver',
			['MHNP3LL/A']: 'iPad Pro 12.9", 2TB, Wi-Fi, Space Gray',
			['MHNQ3LL/A']: 'iPad Pro 12.9", 2TB, Wi-Fi, Silver',
			['MHNR3LL/A']: 'iPad Pro 12.9", 128GB, Wi-Fi/Cellular, Space Gray',
			['MHNT3LL/A']: 'iPad Pro 12.9", 128GB, Wi-Fi/Cellular, Silver',
			['MHNW3LL/A']: 'iPad Pro 12.9", 256GB, Wi-Fi/Cellular, Space Gray',
			['MHNX3LL/A']: 'iPad Pro 12.9", 256GB, Wi-Fi/Cellular, Silver',
			['MHNY3LL/A']: 'iPad Pro 12.9", 512GB, Wi-Fi/Cellular, Space Gray',
			['MHP03LL/A']: 'iPad Pro 12.9", 512GB, Wi-Fi/Cellular, Silver',
			['MHP13LL/A']: 'iPad Pro 12.9", 1TB, Wi-Fi/Cellular, Space Gray',
			['MHP23LL/A']: 'iPad Pro 12.9", 1TB, Wi-Fi/Cellular, Silver',
			['MHP43LL/A']: 'iPad Pro 12.9", 2TB, Wi-Fi/Cellular, Space Gray',
			['MHP53LL/A']: 'iPad Pro 12.9", 2TB, Wi-Fi/Cellular, Silver',
		}
	}
	if ( itempick === "mac" ) {
		skuList = {
			['MGN63LL/A']: '13" MB Air 256GB, Space Gray',
			['MGN93LL/A']: '13" MB Air 256GB, Gold',
			['MGND3LL/A']: '13" MB Air 256GB, Silver',
			['MGN73LL/A']: '13" MB Air 512GB, Space Gray',
			['MGNA3LL/A']: '13" MB Air 512GB, Gold',
			['MGNE3LL/A']: '13" MB Air 512GB, Silver',
			['MYD82LL/A']: '13" MB Pro 256GB, Space Gray',
			['MYDA2LL/A']: '13" MB Pro 256GB, Silver',
			['MYD92LL/A']: '13" MB Pro 512GB, Space Gray',
			['MYDC2LL/A']: '13" MB Pro 512GB, Silver',
			['MKGR3LL/A']: '14" MB Pro M1 Pro, 8/14 Cores, 512GB/16GB, Silver',
			['MKGP3LL/A']: '14" MB Pro M1 Pro, 8/14 Cores, 512GB/16GB, Space Gray',
			['MKGT3LL/A']: '14" MB Pro M1 Pro, 10/16 Cores, 1TB/16GB, Silver',
			['MKGQ3LL/A']: '14" MB Pro M1 Pro, 10/16 Cores, 1TB/16GB, Space Gray',
			['MK1E3LL/A']: '16" MB Pro M1 Pro, 10/16 Cores, 512GB/16GB, Silver',
			['MK183LL/A']: '16" MB Pro M1 Pro, 10/16 Cores, 512GB/16GB, Space Gray',
			['MK1F3LL/A']: '16" MB Pro M1 Pro, 10/16 Cores, 1TB/16GB, Silver',
			['MK193LL/A']: '16" MB Pro M1 Pro, 10/16 Cores, 1TB/16GB, Space Gray',
			['MK1H3LL/A']: '16" MB Pro M1 Max, 10/32 Cores, 1TB/32GB, Silver',
			['MK1A3LL/A']: '16" MB Pro M1 Max, 10/32 Cores, 1TB/32GB, Space Gray',
			['MGNR3LL/A']: 'Mac Mini, 256GB/8GB',
			['MGNT3LL/A']: 'Mac Mini, 512GB/8GB',
			['MJV93LL/A']: '24" iMac, 8/7 Cores, 256GB/8GB, Blue',
			['MJV83LL/A']: '24" iMac, 8/7 Cores, 256GB/8GB, Green',
			['MJVA3LL/A']: '24" iMac, 8/7 Cores, 256GB/8GB, Pink',
			['MGTF3LL/A']: '24" iMac, 8/7 Cores, 256GB/8GB, Silver',
			['MGPK3LL/A']: '24" iMac, 8/8 Cores, +USB-3/Ethernet, 256GB/8GB, Blue',
			['MGPH3LL/A']: '24" iMac, 8/8 Cores, +USB-3/Ethernet, 256GB/8GB, Green',
			['MGPM3LL/A']: '24" iMac, 8/8 Cores, +USB-3/Ethernet, 256GB/8GB, Pink',
			['MGPC3LL/A']: '24" iMac, 8/8 Cores, +USB-3/Ethernet, 256GB/8GB, Silver',
			['MGPL3LL/A']: '24" iMac, 8/8 Cores, +USB-3/Ethernet, 512GB/8GB, Blue',
			['MGPJ3LL/A']: '24" iMac, 8/8 Cores, +USB-3/Ethernet, 512GB/8GB, Green',
			['MGPN3LL/A']: '24" iMac, 8/8 Cores, +USB-3/Ethernet, 512GB/8GB, Pink',
			['MGPD3LL/A']: '24" iMac, 8/8 Cores, +USB-3/Ethernet, 512GB/8GB, Silver',
		}
	}
	if ( itempick === "other" ) {
		skuList = {
			['MK0U3LL/A']: 'Studio Display, standard glass, tilt-adjustable',
			['MK0Q3LL/A']: 'Studio Display, standard glass, tilt-and height-adjustable',
			['MMYQ3LL/A']: 'Studio Display, standard glass, VESA mount adapter',
			['MMYW3LL/A']: 'Studio Display, nano-texture glass, tilt-adjustable',
			['MMYV3LL/A']: 'Studio Display, nano-texture glass, tilt-and height-adjustable',
			['MMYX3LL/A']: 'Studio Display, nano-texture glass, VESA mount adapter',
			['MV7N2AM/A']: 'AirPods 2nd Gen',
			['MME73AM/A']: 'AirPods 3rd Gen',
			['MLWK3AM/A']: 'AirPods Pro',
			['MX532AM/A']: 'AirTag, 1/pk',
			['MX542AM/A']: 'AirTag, 4/pk',
			['MK0C2AM/A']: 'Pencil, 1st Gen',
			['MU8F2AM/A']: 'Pencil, 2nd Gen',
			['MHXH3AM/A']: 'MagSafe Charger, 1m',
			['MJWY3AM/A']: 'MagSafe Battery Pack',
			['MMX62AM/A']: 'Lightning to 3.5mm Jack Adapter',
			['MHJA3AM/A']: '20W USB-C Power Adapter',
			['MY1W2AM/A']: '30W USB-C Power Adapter',
			['MKU63AM/A']: '67W USB-C Power Adapter',
			['MX0J2AM/A']: '96W USB-C Power Adapter',
			['MLYU3AM/A']: '140W USB-C Power Adapter', 
			['MLYV3AM/A']: 'USB-C to MagSafe 3 Cable, 2m',
			['MM0A3AM/A']: 'USB-C to Lightning Cable, 1m',
			['MQGH2AM/A']: 'USB-C to Lightning Cable, 2m',
			['MXLY2AM/A']: 'Lightning to USB Cable, 1m',
			['MD819AM/A']: 'Lightning to USB Cable, 2m',
			['MM093AM/A']: 'USB-C Cable, 1m',
			['MLL82AM/A']: 'USB-C Cable, 2m',
		}
	}

	let storeNumber = req.cookies.storenum;

	const query =
	  Object.keys(skuList)
		.map((k, i) => `parts.${i}=${encodeURIComponent(k)}`)
		.join("&") + `&searchNearby=false&store=${storeNumber}`;

	let options = {
	  method: "GET",
	  url: 'https://www.apple.com/shop/fulfillment-messages?' + query,
	};

	let checkstr = '';
	let city = '';
	let state = '';
	let storeurl = '';
	let address = '';
	let zip = '';

	request(options, function (error, response) {
		if (error) throw new Error(error);

		const body = JSON.parse(response.body);
		
		const storesArray = body.body.content.pickupMessage.stores;

		const statusArray = storesArray.flatMap((store) => {
			city = store.city;
			state = store.state;
			storeurl = store.hoursUrl;
			address = store.address.address2;
			zip = store.address.postalCode;
			
			for (const [key, value] of Object.entries(skuList)) {
				try {
					const product = store.partsAvailability[key];
					if (product.pickupDisplay === "available") {
						checkstr = checkstr.concat("<span style='color:green;font-weight:bold;'>", `${value}`, "</span><br/>");
					} else {
						checkstr = checkstr.concat("<span style='color:red'>", `${value}`, "</span><br/>");
					};
				} catch (e) {
					checkstr = checkstr.concat("<span style='color:gray'>", `${value}`, "</span><br/>");
				};
			};
		});
		
		res.render("check", { 
			versionfruit: fruitversion, 
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

let server = app.listen(portx, function () {
	let host = server.address().address
	let port = server.address().port

	console.log("Fruit Picker server listening on port %s", host, port)
})