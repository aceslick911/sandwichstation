

export interface IEvent {
	version: number;
	domain: string;
}



export namespace Commands {
	export interface ICommandParameters {

	}

	export class ICommand {

		//Executes a command successfully or unsuccessfully
		run(parameters: ICommandParameters): boolean {
			return false;
		}

	}
}



export class ViewBuilder {
	protected state: any;

	processEvent(event: IEvent) {
		//Does nothing
	}

	getState(): any {
		return this.state;
	};
}

