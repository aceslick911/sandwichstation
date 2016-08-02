/// <reference path="../item.d.ts" />

import {ViewBuilder} from "../../../es/eventSourcing"
import {EventItemAdded} from "../events/itemAdded"


export class ItemCurrentInventoryBuilder extends ViewBuilder {
	protected state: {
		Name: string,
		Desc: string,
		Qty: number,
		Cost: number
	}[]=[];

	processEvent(event: EventItemAdded) {
		//if (event instanceof EventItemAdded) {
			var found = false;
			for (var item of this.state) {
				if (item.Name == event.Name && item.Desc == event.Name) {
					found = true;
					item.Qty = item.Qty + event.Qty;
				}
			}
			if (!found) {
				this.state.push({
					Name: event.Name,
					Desc: event.Desc,
					Cost: event.Cost,
					Qty: event.Qty
				})
			}
		//}
	}
}
