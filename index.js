const configURL = "https://maps.googleapis.com/maps/api/js?key=";
const fruitversion = "v1.0.9";

let portx = process.env.PORT;
if (portx == null || portx == "") {
	portx = 8000;
}

const cookieParser = require('cookie-parser')
const request = require("request");
const flatMap = require('array.prototype.flatmap');
const path = require("path");
const products = require("./products.js");

const express = require('express');
const app = express();
app.use(cookieParser())
app.use(express.static('public'));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

const sqlite3 = require('sqlite3').verbose(); //SQL database used to cache results and re-serve them if less than 5 minutes have passed.
let db = new sqlite3.Database("cachedb" , (error) => {
	if (error) {
		console.log("Error Occurred - " + err.message);
	};
});

let tableDB = `CREATE TABLE IF NOT EXISTS checks (
id INTEGER PRIMARY KEY,
time INTEGER,
store TEXT,
type TEXT,
checkstr TEXT,
city TEXT,
state TEXT,
storeurl TEXT,
address TEXT,
zip TEXT );`;
	
db.run(tableDB, (error) => {
	if (error) {
		console.log('Some Error Occured');
	};
});

let checkrender = function (error, res, fruitversion, configURL, checkstr, city, state, storeurl, address, zip, timecheck ) {
	if (error) {
		console.log(error);
		return;
	};
	
	res.render("check", { //`./views/check.pug`
		versionfruit: fruitversion, 
		layoutgmaps: configURL, 
		invcheck: checkstr, 
		citychk: city, 
		statechk: state, 
		storeurlchk: storeurl, 
		addresschk: address,
		zipchk: zip,
		timechk: timecheck
	});
};

const checkDB = (selectDB) => {
	return new Promise((resolve, reject) => {
		db.serialize( () => {
			db.get(selectDB, (err, row) => {
				if (err) {
					reject(err);
				};
				resolve(row);
			});
		});
	});
};

let updateDB = function (error, checkstr, city, state, storeurl, address, zip, storeNumber, itemPick) {
	if (error) {
		console.log(error);
		return;
	};

	let oldTime = Date.now() - 300000; //Five minutes ago
	let deleteRows = `DELETE FROM checks WHERE time <= ${oldTime};`;
	let insertDB = `INSERT INTO checks ( time, store, type, checkstr, city, state, storeurl, address, zip ) VALUES (
	${Date.now()},
	"${storeNumber}",
	"${itemPick}",
	"${checkstr}",
	"${city}",
	"${state}",
	"${storeurl}",
	"${address}",
	"${zip}" );`;

	db.run(deleteRows);
	db.run(insertDB);
};


app.get('/', function(req, res) {   
	res.render("index", { versionfruit: fruitversion, layoutgmaps: configURL }); //`./views/index.pug`
})

app.get('/index.htm', function(req, res) {   
	res.render("index", { versionfruit: fruitversion, layoutgmaps: configURL }); //`./views/index.pug`
})

app.get('/store.htm', function(req, res) {   
	res.render("store", { versionfruit: fruitversion, layoutgmaps: configURL }); //`./views/store.pug`
})

app.get('/check.htm', function(req, res) {
	let storeNumber = req.cookies.storenum;
	let itemPick = req.cookies.itempick;
	let thisTime = Date.now() - 300000; //Five minutes ago
	
	let selectDB = `SELECT * FROM checks WHERE time >= ${thisTime} AND store = '${storeNumber}' AND type = '${itemPick}'`;
	let promise = checkDB(selectDB).then(result => {
		let checkstr = '';
		let city = '';
		let state = '';
		let storeurl = '';
		let address = '';
		let zip = '';
		let timecheck = new Date().toLocaleString("en-US", { dateStyle: "short", timeStyle: "short" });
			
		if ( result ) {
			checkstr = result.checkstr;
			city = result.city;
			state = result.state;
			storeurl = result.storeurl;
			address = result.address;
			zip = result.zip;
			timecheck = result.time;
			fixtime = new Date(timecheck).toLocaleString("en-US", { dateStyle: "short", timeStyle: "short" });

			checkrender( null, res, fruitversion, configURL, checkstr, city, state, storeurl, address, zip, fixtime );
		} else {
			let skuList = skuFunc(itemPick); //This function and the array of products is in `./products.js`
			const query =
			  Object.keys(skuList)
				.map((k, i) => `parts.${i}=${encodeURIComponent(k)}`)
				.join("&") + `&searchNearby=false&store=${storeNumber}`;

			let options = {
			  method: "GET",
			  url: 'https://apple.com/shop/fulfillment-messages?' + query,
			};

			request(options, function (error, response) {
				if (error) throw new Error(error);

				const body = JSON.parse(response.body);
				const storesArray = body.body.content.pickupMessage.stores;

				const statusArray = storesArray.flatMap((store) => { //This array of all US stores is in `./public/allstores.js`
					city = store.city;
					state = store.state;
					storeurl = store.hoursUrl;
					address = store.address.address2;
					zip = store.address.postalCode;

					for (const [key, value] of Object.entries(skuList)) {
						try {
							const product = store.partsAvailability[key];
							let redorgreen = "key2"; //Default red color to show unavailability of the product
							if (product.pickupDisplay === "available") {
								redorgreen = "key1"; //Green colored to show product is currently available
							};
							checkstr = checkstr.concat("<a class='key ", redorgreen, "' href='https://www.apple.com/shop/", `${value[1]}`, "' target='_blank' title='", `${value[2]}`, " - ", `${key}`,"'>", `${value[0]}`, "</a><br/>");
						} catch (e) {
							checkstr = checkstr.concat("<span class='key key3'>", `${value[0]}`, "</span><br/>"); //Gray colored line if the checking operation fails
						};
					};
				});
						
				checkrender( null, res, fruitversion, configURL, checkstr, city, state, storeurl, address, zip, timecheck );
				updateDB( null, checkstr, city, state, storeurl, address, zip, storeNumber, itemPick );
			});
		};
	});
});

let server = app.listen(portx, function () {
	let host = server.address().address
	let port = server.address().port

	console.log("Fruit Picker server listening on port %s", host, port)
})