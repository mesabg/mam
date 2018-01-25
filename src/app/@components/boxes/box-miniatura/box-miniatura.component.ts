/*tslint:disable*/

import { 
	Component, 
	OnInit, 
	Input,
	OnChanges,
	ViewChild,
	ElementRef } from '@angular/core';

import { Miniatura } from '@mam/interfaces';
declare const $:any;

@Component({
	selector: 'mam-box-miniatura',
	templateUrl: './box-miniatura.component.html',
	styleUrls: ['./box-miniatura.component.scss']
})
export class BoxMiniaturaComponent implements OnInit, OnChanges {
	@Input('miniatura') public miniatura:Miniatura;
	@ViewChild('element') public element:ElementRef;

	private state = 'hidden';
	
	constructor() { }

	/**
	 * Events
	 */
	ngOnInit() { }
	ngOnChanges() {
		let self = this;
		if (this.state === 'hidden')
			$(this.element.nativeElement).fadeIn(500, function(){ self.state = 'visible'; });
		else {
			$(this.element.nativeElement)
				.fadeOut(250, function(){ self.state = 'hidden'; })
				.fadeIn(250, function(){ self.state = 'visible'; });
		}
	}
}
