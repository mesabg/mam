/**
 * Global imports
 */
import { Component, OnInit, Output } from '@angular/core';

/**
 * This component represents the layout of the SPA
 */
@Component({
	selector: 'app-root',
	templateUrl: './layout.component.html',
	styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
	constructor() { }
	ngOnInit() { }

	public changeMenu(){
		console.log("hola");
	}
}
