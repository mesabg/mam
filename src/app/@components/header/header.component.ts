/**
 * Global imports
 */
import { 
	Component, 
	OnInit,
	AfterViewInit,
	ViewChild,
	ViewContainerRef,
	ElementRef,
	Input,
	Output,
	EventEmitter,
	OnChanges } from '@angular/core';

import $ = require('jquery');

/**
 * Local imports
 */
import { SlickJS } from '@ms/components';
import { ImageResponse } from '@mam/responses';
import { SETTINGS } from './header.slick-config';
import { Miniatura } from '@mam/interfaces';

/**
* Entry point
*/
/*import { InstanceBoxMiniaturaComponent } from '@mam/instance-components';*/
/**
 * MAM Application header
 */
@Component({
	selector: 'mam-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit, OnChanges {
	/**
	 * Input
	 */
	@Input('bannerImages') public bannerImages:ImageResponse[];

	/**
	* Ouput
	*/
	@Output() public onClick:EventEmitter<void> = new EventEmitter<void>();
	/**
	 * View injection
	 */
	@ViewChild('carouselContainer', {read: ViewContainerRef}) private carouselContainer:ViewContainerRef;
	@ViewChild('carousel') private $carouselView:ElementRef;
	@ViewChild('grid_Miniatura') private $gridMiniatura:ElementRef;
	private $carousel:SlickJS;
	public miniatura:Miniatura;
	constructor() { }

	/**
	 * Events
	 */
	ngOnInit() { 
		this.parse();}
	ngOnChanges() { }
	ngAfterViewInit() {
		this.initSlickJS();
	}


	/**
	 * Actions
	 */
	private initSlickJS():void{
		this.$carousel = new SlickJS($(this.$carouselView.nativeElement), SETTINGS);
	}


	private parse():void{
		this.miniatura = {
			content: "Lorem ipsum dolor sit amet, consectetur aoris ipsa.",
			author: "Lorem ipsum dolor sit amet, consectetur aoris ipsa." ,
			image: "assets/images/foto-01.png",
		};
	}


}
