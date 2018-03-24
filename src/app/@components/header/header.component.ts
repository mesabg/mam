<<<<<<< HEAD
/*tslint:disable*/
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

import { Router } from '@angular/router';
import { CTAService } from '@mam/services';
declare const $:any;

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
	@Input('miniaturas') public miniaturas:Miniatura[];
	@Input('isPortafolio') public isPortafolio:Boolean = false;
	@Input('isMAM') public isMAM:Boolean = false;
	@Input('isContacto') public isContacto:Boolean = false;
	
	/**
	 * View injection
	 */
	@ViewChild('carouselContainer', {read: ViewContainerRef}) private carouselContainer:ViewContainerRef;
	@ViewChild('carousel') private $carouselView:ElementRef;
	private $carousel:SlickJS;
	public miniatura:Miniatura;
	constructor(public CTA:CTAService,private router:Router) { }

	/**
	 * Events
	 */
	ngOnInit() { this.parse();
		if(this.isPortafolio ||
			this.isMAM ||
			this.isContacto){
			//$(".banner").css("height", "100vh");
		}
	}
	ngOnChanges() { }
	ngAfterViewInit() {
		this.initSlickJS();
		
		this.animation();
		
	}
	public animation(){
		this.$carousel.eventAfterChange.subscribe(data =>{
			$(".loader1").stop();
			$(".loader1").width(100);
			//clearInterval(myVar);
			this.animation();
		});
		$(".loader1").animate({ width: "110%" },5000,"linear",()=>{
			$(".loader1").width(100);
			this.$carousel.slideNext();
		});
		/*let myVar =setInterval( ()=>{
			$(".loader1").animate({ width: "110%" },5000,"linear",()=>{$(".loader1").width(100) });
			this.$carousel.slideNext();
		}, 4900);	*/
	}

	/**
	 * Actions
	 */
	private initSlickJS():void{
		this.$carousel = new SlickJS($(this.$carouselView.nativeElement), SETTINGS);
		this.$carousel.eventAfterChange.subscribe(event => {
			let slide = event.currentSlide.currentSlide;
			this.miniatura = this.miniaturas[slide];
		});
	}


	private parse():void{
			this.miniatura = this.miniaturas[0];
	}

}
=======
/*tslint:disable*/
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

import { Router } from '@angular/router';
import { CTAService } from '@mam/services';
declare const $:any;

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
	@Input('miniaturas') public miniaturas:Miniatura[];
	@Input('isPortafolio') public isPortafolio:Boolean = false;
	@Input('isMAM') public isMAM:Boolean = false;
	@Input('isContacto') public isContacto:Boolean = false;
	
	/**
	 * View injection
	 */
	@ViewChild('carouselContainer', {read: ViewContainerRef}) private carouselContainer:ViewContainerRef;
	@ViewChild('carousel') private $carouselView:ElementRef;
	private $carousel:SlickJS;
	public miniatura:Miniatura;
	constructor(public CTA:CTAService,private router:Router) { }

	/**
	 * Events
	 */
	ngOnInit() { this.parse();
		if(this.isPortafolio ||
			this.isMAM ||
			this.isContacto){
			$(".banner").css("height", "100vh");
		}
	}
	ngOnChanges() { }
	ngAfterViewInit() {
		this.initSlickJS();
		
		this.animation();
		
	}
	public animation(){
		this.$carousel.eventAfterChange.subscribe(data =>{
			$(".loader1").stop();
			$(".loader1").width(100);
			//clearInterval(myVar);
			this.animation();
		});
		$(".loader1").animate({ width: "110%" },5000,"linear",()=>{
			$(".loader1").width(100);
			this.$carousel.slideNext();
		});
		/*let myVar =setInterval( ()=>{
			$(".loader1").animate({ width: "110%" },5000,"linear",()=>{$(".loader1").width(100) });
			this.$carousel.slideNext();
		}, 4900);	*/
	}

	/**
	 * Actions
	 */
	private initSlickJS():void{
		this.$carousel = new SlickJS($(this.$carouselView.nativeElement), SETTINGS);
		this.$carousel.eventAfterChange.subscribe(event => {
			let slide = event.currentSlide.currentSlide;
			this.miniatura = this.miniaturas[slide];
		});
	}


	private parse():void{
			this.miniatura = this.miniaturas[0];
	}

}
>>>>>>> 76a43613f806ecfbff48b7a285347a32be00ad98
