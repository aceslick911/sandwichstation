/// <reference path="../domains/domains.d.ts" />
/// <reference path="../es/eventSourcing.ts" />
/// <reference path="../types.d.ts" />


const fs = require('fs');

function readJSON(filename:string){
	var jsonData;
	fs.readFileSync(filename, (data)=>{
		jsonData = data;
	});
	return jsonData;
}

var purchaseEvents = readJSON("./purchaseEvents.json" );
var consumeEvents = readJSON("./consumeEvents.json" );

