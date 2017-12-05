/* tslint:disable */
import { 
  Component,
  OnInit,
  Input,
  ViewChild,
  AfterViewInit,
  ElementRef } from '@angular/core';


import { Color } from '@mam/enums';
import { SlickJS } from '@ms/components';
import { SETTINGS } from './banner-carousel.slick-config';
import { Logro } from 'app/#interfaces/logro.interface';
declare const $:any;

@Component({
  selector: 'mam-banner-carousel',
  templateUrl: './banner-carousel.component.html',
  styleUrls: ['./banner-carousel.component.scss']
})
export class BannerCarouselComponent implements OnInit, AfterViewInit {
  @Input('color') public color:Color;
  @Input('title') public title:string;
  @Input('elements') public elements:Logro[];
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
    console.log("Elements :: ", this.elements);
	}


	/**
	 * Actions
	 */
	private initSlickJS():void{
		this.$carousel = new SlickJS($(this.$carouselView.nativeElement), SETTINGS);
	}
}
