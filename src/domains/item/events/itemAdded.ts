/// <reference path="../item.d.ts" />

import {IEvent} from "../../../es/eventSourcing"

	export class EventItemAdded implements IEvent {
		domain = "item"
		version = 1
		constructor( 
			public Date:Date,
			public Person:number,
			public Name:string,
			public Desc:string,
			public Cost:number,
			public Size:number,
			public Qty:number,
			public Expiry:number
			){
		}
	}
