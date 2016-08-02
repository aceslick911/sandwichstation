/// <reference path="../domains/domains.d.ts" />
/// <reference path="../es/eventSourcing.ts" />
/// <reference path="../types.d.ts" />

import {ItemCurrentInventoryBuilder} from "../domains/item/views/currentInventory";
import {EventItemAdded} from "../domains/item/events/itemAdded";

const fs = require('fs');

function readJSON<T>(filename:string, callback:(data)=>void){
	
	callback(JSON.parse( fs.readFileSync(filename,"UTF8")));
		
	
}

var purchaseEvents = readJSON<EventItemAdded>("../test/purchaseEvents.json" , data=>{
	var inventory = new ItemCurrentInventoryBuilder();
	for(var ev of data){
		inventory.processEvent(ev);
	}
	console.log(inventory.getState());

});
//var consumeEvents = readJSON("../test/consumeEvents.json" );

