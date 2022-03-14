const configURL = "https://maps.googleapis.com/maps/api/js?key=";
const fruitversion = "v1.0.7";

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
const products = require("./products.js");

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

app.get('/check.htm', function(req, res) {   
	flatMap.shim();
	replaceAll.shim();
	const args = process.argv.slice(2);
	let itempick = req.cookies.itempick;
	let skuList = skuFunc(itempick);
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