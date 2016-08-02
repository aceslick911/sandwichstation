
namespace ES.Events {
	export interface IEvent {
		version: number;
		domain: string;
		data: any;
	}
}


namespace ES.Commands {
	export interface ICommandParameters {

	}

	export class ICommand {

		//Executes a command successfully or unsuccessfully
		run(parameters: ICommandParameters): boolean {
			return false;
		}

	}
}


namespace ES.Views {
	export class ViewBuilder {
		private state: any;

		processEvent(event: Events.IEvent) {
			//Does nothing
		}

		getState(): any {
			return this.state;
		};
	}
}
