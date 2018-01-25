/*tslint:disable*/
/**
 * Global imports
 */
import { Component, OnInit } from '@angular/core';

/**
 * Local imports
 */
import { MAMApi } from '@mam/api';

/**
 * Header Instance
 */
@Component({
	selector: 'mam-instance-footer',
	templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {
	public description:Promise<string>;
	constructor(private mamApi:MAMApi) { }

	/**
	 * Events
	 */
	ngOnInit() {
		this.retrieve();
	}

	/**
	 * Actions
	 */
	private retrieve (){
		this.description = this.mamApi.getContactoBrief();
	}
}
