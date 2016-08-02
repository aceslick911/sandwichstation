/// <reference path="../item.d.ts" />


namespace ES.Views {
	export class ItemCurrentInventoryBuilder extends ViewBuilder {
		protected state: {
			Name:string,
			Desc:string,
			Qty:number,
			Cost:number
		}[];

		processEvent(event: Events.EventItemAdded) {
			if(event instanceof Events.EventItemAdded){
				var found=false;
				for(var item of this.state){
					if(item.Name==event.Name && item.Desc==event.Name){
						found=true;
						item.Qty = item.Qty+event.Qty;
					}
				}
				if(!found){
					this.state.push({
						Name: event.Name,
						Desc: event.Desc,
						Cost: event.Cost,
						Qty: event.Qty
					})
				}
			}
		}
	}
}
