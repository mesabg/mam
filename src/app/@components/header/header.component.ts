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
	OnChanges } from '@angular/core';

declare const $:any;

/**
 * Local imports
 */
import { SlickJS } from '@ms/components';
import { ImageResponse } from '@mam/responses';
import { SETTINGS } from './header.slick-config';

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
}
