/* eslint-disable no-undef */

import React, { useRef, useEffect, useState, useContext, Component } from 'react';
import ReactDOM from 'react-dom';
import parse from "html-react-parser";
import Axios from 'axios';
import './index.css';
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { allStores } from './allStores';
import { skuFunc } from './products';
const StoreContext = React.createContext('');
const flatMap = require('array.prototype.flatmap');

///////////////////////////////
/////////// Config ////////////
///////////////////////////////

const mapsKey = "";
const fruitversion = "v1.1.1";
const itemList = [ 
	["iphone", "iPhone 13", ], 
	["iphold", "iPhone SE, 11, 12" ], 
	["ipad", "iPad" ], 
	["mac", "Mac" ], 
	["other", "Miscellaneous" ]
];

function loadScript() {
	const input = document.getElementById("myInput");
	const li = document.querySelectorAll("#hideul li");
	const formm = document.getElementById("myForm");

	const suggest = () => {
		const val = input.value.trim(),    
		reg = new RegExp(val, "i");    
		[...li].forEach(el => el.style.display = val && reg.test(el.textContent) ? "block" : "none");
	};
	
	const clears = () => {
		[...li].forEach(el => el.style.display = "none" );
	};

	input.addEventListener("input", suggest);
	formm.addEventListener("reset", clears);
}

window.onload = loadScript;

/////////////////////////////////////////
/////////// Parent Component ////////////
/////////////////////////////////////////

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		  storeRow: {storeID: 'R000'},
		  itemPick: 'none',
		  result: '',
		  checking: false
		};

		this.changeStore = (newRow) => {
			this.setState( state => ({ storeRow: newRow, result: '' }) );
			itemList.forEach(resetItem);
			document.getElementById("myInput").scrollIntoView();
		};

		this.changeResult = (itemPick) => {
			this.setState( state => ({ itemPick: itemPick }) );
			itemList.forEach(resetItem);

			const itemChoice = document.getElementById(itemPick);
			itemChoice.setAttribute("style","font-size:22pt; padding:2em 1em 2em 1em; text-decoration:underline;");

			const skuList = skuFunc(itemPick); //This function and the array of products is in `./products.js`

			let myPromise = new Promise(function(myResolve, myReject) {
				this.setState( state => ({ checking: true }) );

				const whichStore = this.state.storeRow.storeID;
				const query = Object.keys(skuList).map((k, i) => `parts.${i}=${encodeURIComponent(k)}`).join("&") + `&searchNearby=false&store=${whichStore}`;

				let response = Axios.get('https://cors-anywhere.herokuapp.com/https://apple.com/shop/fulfillment-messages?' + query, { headers: { 'X-Requested-With': 'XMLHttpRequest' } });

				myResolve(response);
			}.bind(this));
	
			myPromise.then(function(value) {
				const timecheck = new Date().toLocaleString("en-US", { dateStyle: "short", timeStyle: "short" });
				let checkstr = "<div className='box spacer allitems'><p className='asof'>Availability as of " + timecheck + "</p><table className='box key'><tr><td className='key1'>Available</td></tr><tr><td className='key2'>Unavailable</td></tr></table><br/><div>";
				
				const storesArray = value.data.body.content.pickupMessage.stores;
				const statusArray = storesArray.flatMap((store) => {
					for (const [key, value] of Object.entries(skuList)) {
						try {
							const product = store.partsAvailability[key];
							let redorgreen = "key2"; //Default red color to show unavailability of the product
							if (product.pickupDisplay === "available") {
								redorgreen = "key1"; //Green colored to show product is currently available
							};
							checkstr = checkstr.concat("<a className='key ", redorgreen, "' href='https://www.apple.com/shop/", `${value[1]}`, "' target='_blank' title='", `${value[2]}`, " - ", `${key}`,"'>", `${value[0]}`, "</a><br/>");
						} catch (e) {
							checkstr = checkstr.concat("<span className='key key3'>", `${value[0]}`, "</span><br/>"); //Gray colored line if the checking operation fails
						};
					};
				});

				itemList.forEach(resetItem);
				checkstr = checkstr.concat("</div></div>");
				this.setState( state => ({ result: checkstr, checking: false }) );
				document.getElementById("myInput").scrollIntoView();
			}.bind(this));
		};
	};

	render() {
		return (
			<div id="App">
				<MapApp />
				<div id="rightside">
					<div id="topFrame">
						<h1><a href="https://github.com/rossuber/fruitpicker">FRUIT PICKER {fruitversion}</a></h1>
					</div>
					<div id="bottomFrame">
						<StoreContext.Provider value={this.state}>
							<StoreFind changeStore={this.changeStore} />
							<br/>
							<PickedStore />
							<CheckInventory />
							<br/>
							<ItemSelection changeResult={this.changeResult} />
							<br/>
							<ClosestStores changeStore={this.changeStore} />
						</StoreContext.Provider>
					</div>
				</div>
			</div>
		);
	};
};

////////////////////////////
/////////// Map ////////////
////////////////////////////

const changeMap = (props) => {
	const mapOptions = {
		center: {
			lat: props.latitude,
			lng: props.longitude
		},
		zoom: 18,
		mapTypeId: 'hybrid'
	};
	
	const map = new google.maps.Map(document.getElementById("map"), mapOptions);
	allStores.forEach(newMark, [map, props]);
};

function newMark(item, index, arr) {
	let locc = new google.maps.LatLng(item[1], item[2]);
	let nameit = item[3];
	
	const icon = {
		url: process.env.PUBLIC_URL + "/favicon.png",
		scaledSize: new google.maps.Size(50, 50),
		origin: new google.maps.Point(0,0),
		anchor: new google.maps.Point(25, 25)
	};
	
	const marker = new google.maps.Marker({
		position: locc,
		icon: icon,
		map: this[0],
		draggable: false,
		title: nameit,
		scaledSize: new google.maps.Size(10, 10)
	});

	const newProps = { 
		storeID: item[0], 
		latitude: item[1], 
		longitude: item[2], 
		name: item[3], 
		st1: item[4], 
		st2: item[5], 
		st3: item[6], 
		st4: item[7], 
		st5: item[8], 
		mi1: item[9], 
		mi2: item[10], 
		mi3: item[11], 
		mi4: item[12], 
		mi5: item[13], 
		loc: item[14] 
	};

/* 	google.maps.event.addListener(marker, 'click', function(evt) {
		changeMap(newProps);
		document.getElementById("myForm").reset();
		this.changeStore(newProps);
	}); */

	[ this[1].st1, this[1].st2, this[1].st3, this[1].st4, this[1].st5 ].forEach( awayStore => {
		const newResult = awayStore === item[0] || this[1].storeID === item[0];
		if ( newResult ) {
			const infowindow = new google.maps.InfoWindow({
				content: nameit,
				maxWidth: 200,
				disableAutoPan: true
			});

			infowindow.open(this[0], marker);
		};
	});
};

const render = (status) => {
	if (status === Status.LOADING) return <h3>{status} ..</h3>;
	if (status === Status.FAILURE) return <h3>{status} ...</h3>;
	return null;
};

const MyMapComponent = (center, zoom, mapTypeId) => {
	const ref = useRef();
	let newCenter = new google.maps.LatLng(center);

	useEffect(() => {
		let newMap = new window.google.maps.Map(ref.current, {
			newCenter,
			zoom,
			mapTypeId
		});

		changeMap({ latitude: 37.33486, longitude: -122.00895 });
	});

	return <div ref={ref} id="map" />;
};

class MapApp extends React.Component {
	shouldComponentUpdate(nextProps) { return false };
	
	render() {
		const center = { lat: 37.33486, lng: -122.00895 }; //Cupertino, CA
		const zoom = 18; //45 degree view
		const mapTypeId = 'hybrid'; //Satellite and roads
		return (
			<Wrapper apiKey={mapsKey} render={render}>
				<MyMapComponent center={center} zoom={zoom} mapTypeId={mapTypeId} />
			</Wrapper>
		);
	};
};

/////////////////////////////////////
/////////// Select Store ////////////
/////////////////////////////////////

class StoreFind extends React.Component {
	changeStore = this.props.changeStore;

	render() {
		return (
			<form id="myForm">
				<input className="goback" type="text" id="myInput" placeholder="Enter Store Name" title="Type in a store name" />
				<ul id="hideul">
					{allStores.length>0 && allStores.map(store =>
						<li key={store[0]}><StoreButton 
							storeID={store[0]} 
							latitude={store[1]} 
							longitude={store[2]} 
							name={store[3]} 
							st1={store[4]} 
							st2={store[5]} 
							st3={store[6]} 
							st4={store[7]} 
							st5={store[8]} 
							mi1={store[9]} 
							mi2={store[10]} 
							mi3={store[11]} 
							mi4={store[12]} 
							mi5={store[13]} 
							loc={store[14]} 
							changeStore={this.changeStore}
							miles={0}
							fromFind={true}
						/></li>
					)}
				</ul>
			</form>
		);
	};
};

class StoreButton extends React.Component {
	static contextType = StoreContext;
	changeStore = this.props.changeStore;

	render() {
		const append = this.props.fromFind ? ", " + this.props.loc : "";
		return (
				<div key={this.props.storeID} className="option" onClick={() => {
					if (!this.context.checking) {
						changeMap(this.props);
						document.getElementById("myForm").reset();
						this.changeStore(this.props);
					};
				}}><span>{this.props.name}{append} </span></div>
		);
	};
};

///////////////////////////////////////
//////////// Picked Store /////////////
///////////////////////////////////////

class PickedStore extends React.Component {
	static contextType = StoreContext;

	render() {
		const result = matchStore(this.context.storeRow.storeID);
		return (
			<div className="storename">
				<p id="namestore">{result[3]}</p>
				<p className="place">{result[14]}</p>
			</div>
		);
	};
};

const matchStore = (match) => {
	let result = 0;

	for ( let [index,value] of allStores.entries() ) {
		if (value[0] === match) {
			result = index;
			break;
		};
	};

	return allStores[result];
};

/////////////////////////////////////////
/////////// Choose Item Type ////////////
/////////////////////////////////////////

class ItemSelection extends React.Component {
	static contextType = StoreContext;
	changeResult = this.props.changeResult;

	render() {
		return (
			<>
				{itemList.length>0 && itemList.map(items =>
					<ItemTypeButton 
						key={items[0]}
						typeRef={items[0]}
						typeDisplay={items[1]}
						changeResult={this.changeResult}
					/>
				)}
			</>
		);
	};
};

class ItemTypeButton extends React.Component {
	static contextType = StoreContext;
	changeResult = this.props.changeResult;

	render() {
		const typeRef = this.props.typeRef;
		const checkingNow = this.context.checking && this.context.itemPick === typeRef ? "loader" : "";
		const invis = this.context.checking && this.context.itemPick != typeRef;
		const visibility = this.context.storeRow.storeID === "R000" ? "invisible" : invis ? "invisible" : "visible";

		return (
			<>
				<div id={typeRef} key={typeRef} className={`option ${typeRef} ${visibility}`} onClick={() => {if (!this.context.checking) {this.changeResult(typeRef);}}}>
					<span>{this.props.typeDisplay} </span>
				</div>
				<div className={checkingNow}><span></span><span></span><span></span></div>
			</>
		)
	};
};

class CheckInventory extends React.Component {
	static contextType = StoreContext;

	render() {
		return (<div>{parse(this.context.result)}</div>);
	}; 
};

const resetItem = (item, index, arr) => {
	const itemThis = document.getElementById(item[0]);
	itemThis.setAttribute("style","font-size:16pt; padding:1em;");
};

///////////////////////////////////////
/////////// Closest Stores ////////////
///////////////////////////////////////

class ClosestStores extends React.Component {
	static contextType = StoreContext;
	changeStore = this.props.changeStore;

	render() {
		if (this.context.storeRow.storeID != "R000") {
			const closest = [];
			const thisRow = this.context.storeRow;
			[ [ thisRow.st1, thisRow.mi1 ], [ thisRow.st2, thisRow.mi2 ], [ thisRow.st3, thisRow.mi3 ], [ thisRow.st4, thisRow.mi4 ], [ thisRow.st5, thisRow.mi5 ] ].forEach( awayStore => {
				const newResult = matchStore(awayStore[0]);
				newResult.push(awayStore[1]);
				closest.push(newResult);
			});

			return (
				<>
					{closest.length>0 && closest.map(store =>
						<StoreButton 
							key={store[0]} 
							storeID={store[0]} 
							latitude={store[1]} 
							longitude={store[2]} 
							name={store[3]} 
							st1={store[4]} 
							st2={store[5]} 
							st3={store[6]} 
							st4={store[7]} 
							st5={store[8]} 
							mi1={store[9]} 
							mi2={store[10]} 
							mi3={store[11]} 
							mi4={store[12]} 
							mi5={store[13]} 
							loc={store[14]} 
							miles={store[15]}
							changeStore={this.changeStore}
							fromFind={false}
						/>
					)}
				</>
			);
		} else { return (<></>)};
	};
};

///////////////////////////////
/////////// Render ////////////
///////////////////////////////

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);
