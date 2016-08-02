/// <reference path="../item.d.ts" />

namespace ES.Events{
	export class EventItemConsumed implements IEvent {
		domain = "item"
		version = 1
		constructor( 
			public Date:Date,
			public Person:number,
			public Session:number,
			public Item:number,
			public Servings:number,
			public Status:number
			){
		}
	}
}