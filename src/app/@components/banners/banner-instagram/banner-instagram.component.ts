/* tslint:disable */
/**
 * Global imports
 */
import { 
	Component, 
	OnInit,
	AfterViewInit,
	Input,
	ViewChild,
	ElementRef } from '@angular/core';
declare const $:any;

/**
 * Local imports
 */
import { ImageResponse } from '@mam/responses';
import { SlickJS } from '@ms/components';
import { SETTINGS } from './banner-instagram.slick-config';


@Component({
	selector: 'mam-banner-instagram',
	templateUrl: './banner-instagram.component.html',
	styleUrls: ['./banner-instagram.component.scss']
})
export class BannerInstagramComponent implements OnInit, AfterViewInit {
	/**
	 * Inputs
	 */
	@Input('titulo') public titulo:string;
	@Input('instagram') public instagram:ImageResponse[];

	/**
	 * Views
	 */
	@ViewChild('carousel') private $carouselView:ElementRef;
	private $carousel:SlickJS;

	constructor() { }

	/**
	 * Events
	 */
	ngOnInit() { }
	ngAfterViewInit() {
		this.initSlickJS();
		console.log("Instagram :: ", this.instagram);
	}


	/**
	 * Actions
	 */
	private initSlickJS():void{
		this.$carousel = new SlickJS($(this.$carouselView.nativeElement), SETTINGS);
	}
}
