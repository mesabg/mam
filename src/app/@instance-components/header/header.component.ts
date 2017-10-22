/**
 * Global imports
 */
import { 
	Component, 
	OnInit,
	AfterViewInit,
	ViewChild,
	ViewContainerRef,
	ElementRef } from '@angular/core';

declare const $:any;

/**
 * Local imports
 */
import { SlickJS } from '@ms/components';
import { SETTINGS } from './header.slick-config';

/**
 * MAM Application header
 */
@Component({
	selector: 'mam-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {
	/**
	 * View injection
	 */
	@ViewChild('carouselContainer', {read: ViewContainerRef}) private carouselContainer:ViewContainerRef;
	@ViewChild('carousel') private $carouselView:ElementRef;
	private $carousel:SlickJS;

	constructor() { }

	/**
	 * Events
	 */
	ngOnInit() { }
	ngAfterViewInit() {

	}


	/**
	 * Actions
	 */
	private initSlickJS():void{
		this.$carousel = new SlickJS($(this.$carouselView.nativeElement), SETTINGS);
	}
}
