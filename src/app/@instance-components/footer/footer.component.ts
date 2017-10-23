/**
 * Global imports
 */
import { Component, OnInit } from '@angular/core';

/**
 * Header Instance
 */
@Component({
	selector: 'mam-instance-footer',
	templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {
	constructor() { }

	/**
	 * Events
	 */
	ngOnInit() {
		this.retrieve();
	}

	/**
	 * Actions
	 */
	private retrieve (){ }
}
